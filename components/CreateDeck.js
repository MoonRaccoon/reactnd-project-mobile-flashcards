import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, KeyboardAvoidingView} from 'react-native'
import { black, white} from "../utils/colors";
import { connect } from 'react-redux'
import { createDeck } from "../actions/index";
import { saveDeckTitle } from "../utils/api";
import Button from './Button'

class CreateDeck extends Component {

  state = {
    title: ""
  }

  updateTitle = (title) => {
    this.setState({ title: title})
  }

  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={[{flex: 1}, styles.container]}>
        <Text style={styles.prompt}>What is the title of your new deck?</Text>
        <TextInput style={styles.textbox}
                   placeholder={"Deck title"}
                   onChangeText={this.updateTitle}
                   value={this.state.title}/>
        <Button text={"Create Deck"}
                color={black}
                textColor={white}
                onPress={() => {
                  this.props.dispatch(createDeck(this.state.title))
                  saveDeckTitle(this.state.title)
                  this.updateTitle("")
                  this.props.navigation.goBack()
                }}/>
      </KeyboardAvoidingView>
    )
  }
}

styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  prompt: {
    fontSize: 30,
    textAlign: 'center',
    padding: 50
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

export default connect()(CreateDeck)