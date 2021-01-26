import store from "../state/store/configureStore";

const RegistrationForm = async (event) => {
  try {
    event.preventDefault()
    let response = await auth.RegistrationForm({
      email: event.target.email.value,
      password: event.target.password.value,
      password_confirmation: event.target.password_confirmation.value,
    })
    store.dispatch({ type: 'REGISTRATION_FORM', payload: { openModal: true} })
  } catch (error) {
    store.dispatch({
      type: 'REGISTER_ERROR_MESSAGE',
      payload: error.response.data.errors.full_messages[0],
    })
    store.dispatch({ type: 'REGISTRATION_FORM', payload: { openModal: true} })
  }
}
