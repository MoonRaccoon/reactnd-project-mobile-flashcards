import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, } from 'react-native'
import { black, white, green, red} from "../utils/colors";
import { connect } from 'react-redux'
import Button from './Button'
import { clearLocalNotification, setLocalNotification } from "../utils/helpers";

class Quiz extends Component {

  componentDidMount() {
    clearLocalNotification().then(setLocalNotification())
  }

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
        return {
          cardFacing: 'question',
          score: state.score,
          finished: state.finished,
          index: state.index + 1
        }
      })
      this.scoreUp()
    }
    else if (answer === 'incorrect') {
      this.setState((state) => {
        return {
          cardFacing: 'question',
          score: state.score,
          finished: state.finished,
          index: state.index + 1
        }
      })
    }
  }

  scoreUp = () => {
    this.setState((state) => {
      return {  ...state, score: state.score + 1 }
    })
  }

  showScore = () => {
    this.setState((state) => {
      return { ...state, finished: true}
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
    const { deckName } = this.props.navigation.state.params
    const count = this.props.decks[deckName].questions.length

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
                          return this.increment('correct')
                        }
                        else {
                          this.scoreUp()
                          return this.showScore()
                        }
                      }}/>
              <Button text={"Incorrect"}
                      color={red}
                      textColor={white}
                      onPress={() => {
                        if (this.state.index < count - 1) {
                          return this.increment('incorrect')
                        }
                        else {
                          return this.showScore()
                        }
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
