import React from 'react';
import ListView from './ListView'
import Deck from './Deck'
import CreateDeck from './CreateDeck'
import CreateCard from './CreateCard'
import { TabNavigator, StackNavigator  } from 'react-navigation'
import { white, black } from "../utils/colors";
import Quiz from './Quiz'

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


export const DeckStack = StackNavigator({
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