import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native'
import { black, white, green, red} from "../utils/colors";
import { connect } from 'react-redux'
import Button from './Button'

class Quiz extends Component {

  state = {
    cardFacing: "question",
    index: 0,
    score: 0,
    finished: false
  }

  getQuestion = (name, index) => {
    return this.props.decks[name].questions[index].question

  }

  getAnswer = (name, index) => {
    return this.props.decks[name].questions[index].answer

  }

  changeFacing = (face) => {
    this.setState((state) => {
      return {...state, cardFacing: face}
    })
  }

  increment = (answer) => {
    if (answer === 'correct') {
      this.setState((state) => {
        return {cardFacing: 'question', index: state.index + 1 }
      })
      this.scoreUp()
    }
    else if (answer === 'incorrect') {
      this.setState((state) => {
        return {...state, index: state.index++}
      })
    }
  }

  scoreUp = () => {
    this.setState((state) => {
      return { ...state, score: state.score + 1 }
    })
  }

  showScore = () => {
    this.scoreUp()
    this.setState((state) => {
      return { ...state, finished: true}
    })
  }

  increase = () => {
    this.setState((state) => {
      return {
        cardFacing: "question",
        index: state.index + 1,
        score: state.index + 1 }
    })
  }

  clearQuiz = () => {
    this.setState({
      cardFacing: "question",
      index: 0,
      score: 0,
      finished: false
    })
  }


  render() {
    const { deckName, count } = this.props.navigation.state.params

    return (
      <View style={[{flex: 1}, styles.container]}>
        {!this.state.finished ?
          <View style={styles.container}>
          <Text>{(this.state.index + 1) + "/" + count}</Text>
          <View style={styles.container}>
            {this.state.cardFacing === 'question' ?
              <View style={styles.container}>
                <Text style={styles.prompt}>{this.getQuestion(deckName, this.state.index)}</Text>
                <TouchableOpacity onPress={() => (this.changeFacing('answer'))}>
                  <Text style={{color: red}}>Answer</Text>
                </TouchableOpacity>
              </View>
              :
              <View style={styles.container}>
                <Text style={styles.prompt}>{this.getAnswer(deckName, this.state.index)}</Text>
                <TouchableOpacity onPress={() => (this.changeFacing('question'))}>
                  <Text style={{color: green}}>Question</Text>
                </TouchableOpacity>
              </View>
              }
          </View>
            <View style={{padding: 60}}>
              <Button text={"Correct"}
                      color={green}
                      textColor={white}
                      onPress={() => {
                        if (this.state.index < count - 1) {
                          console.log(count)
                          return this.increment('correct')
                        }
                        return this.showScore()
                      }}/>
              <Button text={"Incorrect"}
                      color={red}
                      textColor={white}
                      onPress={() => {
                        if (this.state.index < count - 1) {
                          console.log(count)
                          return this.increment('incorrect')
                        }
                        return this.showScore()
                      }}/>
            </View>
          </View>
          :
          <View>
            <Text style={styles.prompt}>Final Score:</Text>
            <Text style={styles.prompt}>{this.state.score + "/" + count}</Text>
            <View style={{padding: 60}}>
              <Button text={"Reset Quiz"}
                      color={black}
                      textColor={white}
                      onPress={this.clearQuiz}/>
              <Button text={"Return to Deck"}
                      color={black}
                      textColor={white}
                      onPress={() => (this.props.navigation.goBack())}/>
            </View>
          </View>
          }
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

function mapStateToProps (state) {
  return {
    decks: state
  }
}

export default connect(mapStateToProps)(Quiz)