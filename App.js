import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { StyleSheet, Text, View, Platform } from 'react-native';
import ListView from './components/ListView'
import CreateDeck from './components/CreateDeck'
import reducer from './reducers'
import { Constants } from 'expo'
import { TabNavigator } from 'react-navigation'
import { purple, white, black } from "./utils/colors";

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

function StatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{flex: 1}}>
          <View style={{height: 20}}/>
          <Tabs></Tabs>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
