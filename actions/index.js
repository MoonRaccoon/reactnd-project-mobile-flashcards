export const CREATE_DECK = 'CREATE_DECK'
export const CREATE_CARD = 'CREATE_CARD'
export const GET_DECKS = 'GET_DECKS'
import * as api from '../utils/api'

export const getDecks = (decks) => {
  return {
    type: GET_DECKS,
    decks: decks
  }
}

export function fetchDecks (dispatch) {
  api.fetchDecks()
    .then((result) => {
      dispatch(getDecks(JSON.parse(result)))
    })
}

export const createDeck = (deckName) => {
  return {
    type: CREATE_DECK,
    deckName: deckName
  }
}

export const createCard = (deckName, question, answer) => {
  return {
    type: CREATE_CARD,
    deckName: deckName,
    question: question,
    answer: answer
  }
}

