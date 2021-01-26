import React from 'react'
import { Form, Modal, Button, Icon } from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux'

const RegistrationForm = () => {
  const dispatch = useDispatch()
  const { openModal } = useSelector((state) => state)

  return (
    <>
      <Modal
        closeIcon
        onClose={() => dispatch({ type: 'REGISTRATION_FORM', payload: {openModal: false}})}
        onOpen={() => dispatch ({ type: 'REGISTRATION_FORM', payload: {openModal: true}})}
        open={openModal}
        trigger={<Button data-cy="register-btn">Register Button</Button>}
      >
        <Modal.Header>Register Account</Modal.Header>
        <Modal.Content>
          <Form
            data-cy="registration-form"
            onSubmit={(e) => RegistrationForm(e)}
          >
            <Form.Input
              icon="at"
              type="text"
              label="email"
              placeholder="Your email"
              iconPosition="left"
            />
            <Form.Input
              icon="key"
              type="password"
              label="password"
              placeholder="Your password"
              iconPosition="left"
            />
            <Form.Input
              icon="key"
              type="password"
              label="password-confirmation"
              placeholder="Confirm your password"
              iconPosition="left"
            />
            <Button data-cy="submit-btn" icon labelPosition="left">
              <Icon name="user"></Icon>
              Submit
            </Button>
          </Form>
        </Modal.Content>
      </Modal>
    </>
  )
}

export default RegistrationForm
