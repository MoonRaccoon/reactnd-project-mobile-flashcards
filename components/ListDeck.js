import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, } from 'react-native'
import { connect } from 'react-redux'

class ListDeck extends Component {

  render() {
    const { title, navigation } = this.props
    const count = this.props.decks[title].questions.length

    return (
      <View style={{flex: 1}}>
        <TouchableOpacity
          style={[{flex: 1}, styles.deck]}
          onPress={() => (navigation.navigate('Deck', { deckName: title }))}>
          <Text style={styles.title}>{title}</Text>
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