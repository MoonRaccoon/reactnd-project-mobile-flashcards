import * as types from "../actions/types";

function deck (state = {}, action) {
  switch (action.type) {
    case types.GET_DECKS:
      return action.decks
    case types.CREATE_DECK:
      return {
        ...state,
        [action.deckName]: {
          title: action.deckName,
          questions: []
        }
      }
    case types.CREATE_CARD:
      return {
        ...state,
        [action.deckName]: {
          ...state[action.deckName],
          questions: [
            ...state[action.deckName].questions,
            {
              question: action.question,
              answer: action.answer
            }
          ]
        }
      }
    default:
      return state
  }
}

export default deck