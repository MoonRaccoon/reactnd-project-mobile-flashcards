import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native'
import { black, white} from "../utils/colors";
import { connect } from 'react-redux'
import { createCard } from "../actions/index";
import { addCardToDeck } from "../utils/api";

import Button from './Button'

class CreateCard extends Component {

  state = {
    question: "",
    answer: ""
  }

  render() {
    const { deckName } = this.props.navigation.state.params
    return (
      <View style={styles.container}>
        <View style={{padding: 20}}></View>
        <TextInput style={styles.textbox}
                   placeholder={"Question"}
                   value={this.state.question}
                   onChangeText={(text) => (this.setState((state) => {
                     return {...state, question: text}
                   }))}/>
        <View style={{padding: 10}}></View>
        <TextInput style={styles.textbox}
                   placeholder={"Answer"}
                   value={this.state.answer}
                   onChangeText={(text) => (this.setState((state) => {
                     return {...state, answer: text}
                   }))}/>
        <Button text={"Submit"}
                color={black}
                textColor={white}
                onPress={() => {
                  this.props.dispatch(createCard(deckName, this.state.question, this.state.answer))
                  addCardToDeck(deckName, this.state.question, this.state.answer)
                  this.props.navigation.goBack()
                }}/>
      </View>
    )
  }
}

styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  prompt: {
    fontSize: 30,
    textAlign: 'center',
    padding: 30
  },
  textbox: {
    width: 300,
    height: 40,
    borderColor: black,
    borderWidth: 1,
    borderRadius: 8,
    padding: 10
  },
})

export default connect()(CreateCard)