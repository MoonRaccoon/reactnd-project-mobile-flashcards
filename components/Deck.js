import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, } from 'react-native'
import { connect } from 'react-redux'
import { white, black } from "../utils/colors";
import Button from './Button'
import { StackNavigator } from 'react-navigation'
import CreateCard from './CreateCard'


function Deck ({ navigation }) {
  const { deckName, count } = navigation.state.params

  return (
    <View style={[{flex: 1}, styles.deck]}>
        <Text style={styles.title}>{deckName}</Text>
        <Text style={styles.count}>{count === 1 ? count + " card" : count + " cards"}</Text>
        <Button text={"Add Card"}
                color={white}
                textColor={black}
                onPress={() => (navigation.navigate('createCard'))}/>
        <Button text={"Start Quiz"}
                color={black}
                textColor={white}
                onPress={() => (navigation.navigate('quiz', {deckName: deckName, count: count}))}/>
    </View>
  )
}

const styles = StyleSheet.create({
  deck: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 50
  },
  count: {
    fontSize: 30
  },
})



function mapStateToProps (state) {
  return {
    decks: state
  }
}

export default connect(mapStateToProps)(Deck)
