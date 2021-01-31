import axios from 'axios'
import { LOCAL_STORAGE_KEY } from './Auth'

const FoodBagServices = {
  async create(event, dispatch) {
    event.preventDefault()
    const headers = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    try {
      let response = await axios.post(
        '/foodbags',
        {
          foodbag: { pickuptime: parseInt(event.target.pickuptime.value) },
        },
        { headers: headers }
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
