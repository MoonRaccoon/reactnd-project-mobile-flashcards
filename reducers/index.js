import { CREATE_DECK, CREATE_CARD, GET_DECKS } from "../actions/index";

function deck (state = {}, action) {
  switch (action.type) {
    case GET_DECKS:
      return action.decks
    case CREATE_DECK:
      return {
        ...state,
        [action.deckName]: {
          title: action.deckName,
          questions: []
        }
      }
    case CREATE_CARD:
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