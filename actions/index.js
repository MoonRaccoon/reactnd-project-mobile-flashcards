import * as types from './types'
import * as api from '../utils/api'

export const getDecks = (decks) => {
  return {
    type: types.GET_DECKS,
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
    type: types.CREATE_DECK,
    deckName: deckName
  }
}

export const createCard = (deckName, question, answer) => {
  return {
    type: types.CREATE_CARD,
    deckName: deckName,
    question: question,
    answer: answer
  }
}

