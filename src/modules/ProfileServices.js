import axios from 'axios'
import { LOCAL_STORAGE_KEY } from './Auth'

const ProfileServices = {
  async update(event, dispatch) {
    event.preventDefault()
    const headers = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))

    let response = await axios.put(
      '/user/:id',
      {
        user: {
          companyName: parseInt(event.target.companyName.value),
          adress: parseInt(event.target.adress.value),
          zipcode: parseInt(event.target.zipcode.value),
          city: parseInt(event.target.city.value)
        },
      },
      {
        headers: headers,
      }
    )
    event.target.reset()
    dispatch({
      type: 'SET_PROFILE_MESSAGE',
      payload: response.data.message,
    })
  }
}





export default ProfileServices
