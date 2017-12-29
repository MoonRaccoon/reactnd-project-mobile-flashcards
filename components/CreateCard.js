import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native'
import { black, white} from "../utils/colors";
import { connect } from 'react-redux'
import Button from './Button'

class CreateCard extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={{padding: 20}}></View>
        <TextInput style={styles.textbox} placeholder={"Question"}/>
        <View style={{padding: 10}}></View>
        <TextInput style={styles.textbox} placeholder={"Answer"}/>
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

export default CreateCard