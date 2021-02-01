import axios from 'axios'

const ProfileServices = {
  async create(event, dispatch) {
    debugger
    event.preventDefault()
    let headers = JSON.parse(localStorage.getItem('J-tockAuth-Storage'))
    debugger
    let response = await axios.post(
      'api/user/:id',
      {
        user: {
          companyName: event.target.companyName.value,
          adress: event.target.adress.value,
          zipcode: event.target.zipcode.value,
          city: event.target.city.value,
        },
      },
      {
        headers: headers,
      }
    )
    event.target.save()
    dispatch({
      type: 'SET_PROFILE_MESSAGE',
      payload: response.data.message,
    })
  },
}

export default ProfileServices
