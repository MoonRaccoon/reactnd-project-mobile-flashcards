import React from 'react';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { View , Platform, StatusBar } from 'react-native';
import ListView from './components/ListView'
import Deck from './components/Deck'
import CreateDeck from './components/CreateDeck'
import CreateCard from './components/CreateCard'
import reducer from './reducers'
import { TabNavigator, StackNavigator  } from 'react-navigation'
import { white, black, gray } from "./utils/colors";
import Quiz from './components/Quiz'
import { initialData, fetchDecks } from "./utils/api";
import thunk from 'redux-thunk'
import { setLocalNotification } from "./utils/helpers";
import { Constants } from 'expo'


const Tabs = TabNavigator({
  Decks: {
    screen: ListView,
    navigationOptions: {
      tabBarLabel: 'DECKS',
    },
  },
  newDeck: {
    screen: CreateDeck,
    navigationOptions: {
      tabBarLabel: 'NEW DECK',
    },
  }},
  {
    tabBarOptions: {
      activeTintColor: white,
      labelStyle: {
        color: white
      },
      style: {
        height: 56,
        backgroundColor: black,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 6,
        shadowOpacity: 1
      }
    }
  })


const Stack = StackNavigator({
  Decks: {
    screen: Tabs,
    navigationOptions: {
      title: "Mobile Flashcards",
      headerTintColor: white,
      headerStyle: {
        backgroundColor: black,
      }
    },
  },
  Deck: {
    screen: Deck,
    navigationOptions: ({navigation}) => ({
      title: `${navigation.state.params.deckName}`,
      headerTintColor: white,
      headerStyle: {
        backgroundColor: black,
      }
    }),
  },
  createCard: {
    screen: CreateCard,
    navigationOptions: {
      title: "Add Card",
      headerTintColor: white,
      headerStyle: {
        backgroundColor: black,
      }
    },
  },
  quiz: {
    screen: Quiz,
    navigationOptions: {
      title: "Quiz",
      headerTintColor: white,
      headerStyle: {
        backgroundColor: black,
      }
    },
  }
})

function MobileStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

export default class App extends React.Component {

  componentDidMount() {
    initialData()
    setLocalNotification()
  }

  render() {
    return (
      <Provider store={createStore(reducer, applyMiddleware(thunk))}>
        <View style={{flex: 1}}>
          <MobileStatusBar
            backgroundColor="black"
            barStyle="light-content"
          />
          <Stack/>
        </View>
      </Provider>
    );
  }
}
