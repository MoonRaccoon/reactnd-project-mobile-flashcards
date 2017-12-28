import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, } from 'react-native'

export default function ListDeck ({ title, count }) {
  return (
    <View style={{flex: 1}}>
      <TouchableOpacity style={[{flex: 1}, styles.deck]}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.count}>{count === 1 ? count + " card" : count + " cards"}</Text>
      </TouchableOpacity>
    </View>
  )
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
