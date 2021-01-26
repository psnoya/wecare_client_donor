import initialState from '../store/initialState'

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REGISTRATION_FORM':
      return {
        ...state,
        modalOpen: false,
      };
    default:
      return state
  }
}

export default rootReducer
