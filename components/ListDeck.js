import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native'
import { connect } from 'react-redux'

class ListDeck extends Component {

  state = {
    bounceValue: new Animated.Value(1),
  }

  render() {
    const { title, navigation } = this.props
    const count = this.props.decks[title].questions.length
    const { bounceValue } = this.state

    return (
      <View style={{flex: 1}}>
        <TouchableOpacity
          style={[{flex: 1}, styles.deck]}
          onPress={() => {
            Animated.sequence([
              Animated.timing(bounceValue, { duration: 0, toValue: 1.5}),
              Animated.spring(bounceValue, { toValue: 1, tension: 100})
            ]).start(() => (navigation.navigate('Deck', { deckName: title })))
          }}>
          <Animated.Text style={[styles.title, {transform: [{scale: bounceValue}]}]}>{title}</Animated.Text>
          <Text style={styles.count}>{count === 1 ? count + " card" : count + " cards"}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  deck: {
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
  },
  title: {
    fontSize: 20
  },
  count: {
    fontSize: 15
  }
})

function mapStateToProps (state) {
  return {
    decks: state
  }
}

export default connect(mapStateToProps)(ListDeck)