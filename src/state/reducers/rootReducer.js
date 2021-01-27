import initialState from '../store/initialState'

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REGISTRATION_FORM':
      return {
        ...state,
        modalOpen: false,
      }
    case 'SET_CURRENT_USER':
      return {
        ...state,
        currentUser: action.payload,
      }
    case 'REGISTER_ERROR_MESSAGE':
      return {
        ...state,
        registerErrorMessage: action.payload,
      }
    default:
      return state
  }
}

export default rootReducer
