import React, { Component } from 'react'
import { View, Text, StyleSheet, } from 'react-native'
import { connect } from 'react-redux'
import { white, black } from "../utils/colors";
import Button from './Button'


class Deck extends Component {
  render() {
    const {deckName } = this.props.navigation.state.params
    const count = this.props.decks[deckName].questions.length

    return (
      <View style={[{flex: 1}, styles.deck]}>
        <Text style={styles.title}>{deckName}</Text>
        <Text style={styles.count}>{count === 1 ? count + " card" : count + " cards"}</Text>
        <View style={{padding: 20}}/>
        <Button text={"Add Card"}
                color={white}
                textColor={black}
                onPress={() => (this.props.navigation.navigate('createCard', {deckName: deckName}))}/>
        {count >= 1 ?
          <Button text={"Start Quiz"}
                  color={black}
                  textColor={white}
                  onPress={() => {
                    this.props.navigation.navigate('quiz', { deckName: deckName })
                  }}/>
          :
          <Text>You must add a card in order to start quizzing</Text>
        }
      </View>
    )
  }
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
