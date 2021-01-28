import axios from 'axios'

const FoodBagServices = {
  async create() {
    event.preventDefaultDefault()
    let headers = JSON.parse(localStorage.getItem('J-tockAuth-Storage'))
    try {
      let response = await axios.post('/foodbags', {
        foodbag: event.target.value,
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
