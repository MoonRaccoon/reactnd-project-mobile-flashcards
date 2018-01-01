import React, { Component } from 'react'
import { View, FlatList} from 'react-native'
import { connect } from 'react-redux'
import ListDeck from './ListDeck'
import {fetchDecks} from "../actions/index";

class ListView extends Component {

  componentDidMount() {
    fetchDecks(this.props.dispatch)
  }

  renderItem = ({item}) => {
    return <ListDeck
      title={item.title}
      count={item.questions.length}
      navigation={this.props.navigation}/>
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <FlatList
          data={Object.values(this.props.decks)}
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