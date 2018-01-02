import { AsyncStorage } from 'react-native'

const DECKS_STORAGE_KEY = 'MobileFlashcards:decks'

export function fetchDecks () {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
}

export function initialData () {
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
    React: {
      title: 'React',
      questions: [
        {
          question: 'What is React?',
          answer: 'A library for managing user interfaces'
        },
        {
          question: 'Where do you make Ajax requests in React?',
          answer: 'The componentDidMount lifecycle event'
        }
      ]
    },
    JavaScript: {
      title: 'JavaScript',
      questions: [
        {
          question: 'What is a closure?',
          answer: 'The combination of a function and the lexical environment within which that function was declared.'
        }
      ]
    }
  }))
}

export function saveDeckTitle (title) {
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
    [title]: {
      title: title,
      questions: []
    }
  }))
}

export function addCardToDeck (title, question, answer) {
  // TODO: get value of old questions array, merge with new value

  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then((data) => {
    const oldQuestions = JSON.parse(data)[title].questions

    return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
      [title]: {
        title: title,
        questions: oldQuestions.concat([
          {
            question: question,
            answer: answer
          }
        ])
      }
    }))}
  )


}