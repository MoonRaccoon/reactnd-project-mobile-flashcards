import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native'

export default function Button ({text, color, textColor, onPress}) {
  const styles = StyleSheet.create({
    btn: {
      borderWidth: 1,
      borderRadius:10,
      backgroundColor: color,
      margin: 20,
      width: 100,
      height: 50,
      justifyContent: 'center'
    }
  })

  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <Text style={{color: textColor, textAlign: 'center'}}>{text}</Text>
    </TouchableOpacity>
  )
}