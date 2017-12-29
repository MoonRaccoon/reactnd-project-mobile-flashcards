import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native'
import { black, white} from "../utils/colors";
import { connect } from 'react-redux'
import Button from './Button'
class CreateDeck extends Component {

  render() {
    return (
      <View style={[{flex: 1}, styles.container]}>
        <Text style={styles.prompt}>What is the title of your new deck?</Text>
        <TextInput style={styles.textbox} placeholder={"Deck title"}/>
        <Button text={"Submit"}
                color={black}
                textColor={white}/>
      </View>
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

export default CreateDeck