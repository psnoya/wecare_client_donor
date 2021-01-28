import axios from 'axios'

const FoodBagServices = {
  async create(event, dispatch) {
    event.preventDefault()
    let headers = JSON.parse(localStorage.getItem('J-tockAuth-Storage'))
    try {
      let response = await axios.post(
        '/foodbags',
        {
          foodbag: event.target.value,
        },
        {
          headers: headers,
        }
      )
      event.target.reset()
      dispatch({
        type: 'SET_CREATE_FOODBAG_MESSAGE',
        payload: response.data.message,
      })
    } catch (error) {
      dispatch({
        type: 'SET_ERROR_FOODBAG_MESSAGE',
        payload: error.response.data.message,
      })
    }
  },
}

export default FoodBagServices
