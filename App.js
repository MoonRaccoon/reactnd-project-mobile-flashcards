import React from 'react';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { View } from 'react-native';
import ListView from './components/ListView'
import Deck from './components/Deck'
import CreateDeck from './components/CreateDeck'
import CreateCard from './components/CreateCard'
import reducer from './reducers'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { white, black } from "./utils/colors";
import Quiz from './components/Quiz'
import { initialData } from "./utils/api";
import thunk from 'redux-thunk'
import { setLocalNotification } from "./utils/helpers";


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
        color: black
      },
      style: {
        height: 56,
        backgroundColor: white,
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
    screen: Tabs
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

export default class App extends React.Component {

  componentDidMount() {
    initialData()
    setLocalNotification()
  }

  render() {
    return (
      <Provider store={createStore(reducer, applyMiddleware(thunk))}>
        <View style={{flex: 1}}>
          <View style={{height: 20}}/>
          <Stack></Stack>
        </View>
      </Provider>
    );
  }
}
