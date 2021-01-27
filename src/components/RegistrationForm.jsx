import React from 'react'
import { Form, Modal, Button, Icon, Message } from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux'
import { signUp } from '../modules/Auth'

const RegistrationForm = () => {
  const dispatch = useDispatch()
  const { openModal } = useSelector((state) => state)
  const { registerErrorMessage, modalOpen } = useSelector((state) => state)

  return (
    <>
      <Modal
        closeIcon
        onClose={() =>
          dispatch({ type: 'REGISTRATION_FORM', payload: { openModal: false } })
        }
        onOpen={() =>
          dispatch({ type: 'REGISTRATION_FORM', payload: { openModal: true } })
        }
        open={openModal}
        trigger={<Button data-cy='register-btn'>Register Button</Button>}
      >
        <Modal.Header>Register Account</Modal.Header>
        <Modal.Content>
          <Form data-cy='registration-form' onSubmit={(e) => signUp(e)}>
            <Form.Input
              data-cy='email'
              icon='at'
              type='text'
              label='email'
              placeholder='Your email'
              iconPosition='left'
            />
            <Form.Input
              data-cy='password'
              icon='key'
              type='password'
              label='password'
              placeholder='Your password'
              iconPosition='left'
            />
            <Form.Input
              data-cy='password-confirmation'
              icon='key'
              type='password'
              label='password-confirmation'
              placeholder='Confirm your password'
              iconPosition='left'
            />
            <Button
              type='submit'
              data-cy='submit-btn'
              icon
              labelPosition='left'
              onClick='{event => { submit(event)}'
            >
              <Icon name='user'></Icon>
              Submit
            </Button>
            <Modal.Description>
              {registerErrorMessage && (
                <Message data-cy='register-error-message' negative>
                  {registerErrorMessage}
                </Message>
              )}
            </Modal.Description>
          </Form>
        </Modal.Content>
      </Modal>
    </>
  )
}

export default RegistrationForm
