import { CREATE_DECK, CREATE_CARD, GET_DECKS } from "../actions/index";

const initialDeckState = {
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
}

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