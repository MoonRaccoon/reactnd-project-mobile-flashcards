import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList} from 'react-native'
import { connect } from 'react-redux'
import ListDeck from './ListDeck'

class ListView extends Component {

  renderItem = ({item}) => {
    return <ListDeck
      title={item.title}
      count={item.questions.length}/>
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <FlatList
          data={this.props.decks}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index}
        />
      </View>
    )
  }
}

function mapStateToProps (state) {
  return {
    decks: state
  }
}

export default connect(mapStateToProps)(ListView)