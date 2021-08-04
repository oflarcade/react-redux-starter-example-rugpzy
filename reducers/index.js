import { MessageActions, LogActions } from '../actions'

export const messages = (state = [], action) => {
  switch (action.type) {
    case MessageActions.ADD_MESSAGE:
      console.log('ADD_MESSAGE', action)
      return [
        ...state,
        action.message
      ]
    case MessageActions.REMOVE_MESSAGE:
      console.log('REMOVE_MESSAGE', action)
      return state.filter(msg => !msg === action.message)
    default:
      return state
  }
}

export const logs = (state = [], action) => {
  switch (action.type) {
    case LogActions.ADD_LOG:
      console.log('ADD_LOG', action)
      return [
        ...state,
        action.log
      ]
    case LogActions.REMOVE_LOG:
      console.log('REMOVE_LOG', action)
      return state.filter(log => !log === action.log)
    default:
      return state
  }
}