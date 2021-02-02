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
        credentials: true,
        currentUser: action.payload,
      }
    case 'REGISTER_ERROR_MESSAGE':
      return {
        ...state,
        registerErrorMessage: action.payload,
      }
    case 'SET_CREATE_FOODBAG_MESSAGE':
      return {
        ...state,
        createFoodBagMessage: action.payload,
        errorMessage: '',
      }
    case 'SET_ERROR_FOODBAG_MESSAGE':
      return {
        ...state,
        errorMessage: action.payload,
        createFoodBagMessage: '',
      }
      case 'SET_PROFILE_MESSAGE':
        return {
          ...state,
          updateProfileMessage: action.payload, 
        }
    
    case 'SET_PROFILE_DATA':
      return {
        ...state,
        profile: action.payload
      }
      
        

    default:
      return state
  }
}

export default rootReducer
