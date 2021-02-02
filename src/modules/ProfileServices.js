import axios from 'axios'
import { LOCAL_STORAGE_KEY } from './Auth'

const ProfileServices = {
  async create(event, dispatch) {
    debugger
    event.preventDefault()
    const headers = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    debugger
    let response = await axios.post(
      '/user/:id',
      {
        user: { companyName: parseInt(event.target.companyName.value) },
        
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
  },
}

export default ProfileServices
