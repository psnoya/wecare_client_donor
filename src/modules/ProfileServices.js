import axios from 'axios'
import { LOCAL_STORAGE_KEY } from './Auth'

const ProfileServices = {
  async update(event, currentUser, dispatch) {
    event.preventDefault()
    const headers = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    debugger
    let response = await axios.put(
      `/user/${currentUser.id}`,
      {
        company_name: event.target.company_name.value,
        adress: event.target.adress.value,
        zipcode: event.target.zipcode.value,
        city: event.target.city.value,
      },
      {
        headers: headers,
      }
    )
    debugger
    event.target.reset()
    if (response.status === 200) {
      dispatch({
        type: 'SET_PROFILE_MESSAGE',
        payload: 'Your profile has been successfully updated!',
      })
      dispatch({
        type: 'SET_PROFILE_DATA',
        payload: response.data.user,
      })
    }
  },
}

export default ProfileServices
