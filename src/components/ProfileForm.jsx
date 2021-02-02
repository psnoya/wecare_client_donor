import React from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { Form, Button, Input, Message, Container, Segment, Header } from 'semantic-ui-react'
import ProfileServices from '../modules/ProfileServices'
import { NavLink } from 'react-router-dom'

const ProfileForm = () => {
 
  const dispatch = useDispatch()
  const updateProfileMessage = useSelector((state) => state.updateProfileMessage)
  const currentUser = useSelector(state => state.currentUser)

  return (
    <Container>
      <Segment>
      <Button data-cy='back-btn' fluid as={NavLink}
    to={`/foodbags`}>
      Back
    </Button>   
        <Header as='h1'>Update your Profile</Header>
    <Form
      data-cy='profile-form'
      onSubmit={(event) => ProfileServices.update(event, currentUser, dispatch)}
    >
      <Form.Field
        data-cy='company-name'
        label='Company Name'
        control={Input}
        name='companyName'
        placeholder='Company Name'
      />
      <Form.Field
        data-cy='adress'
        label='Adress'
        control={Input}
        name='adress'
        placeholder='Adress'
      />
      <Form.Field
        data-cy='zipcode'
        label='Zipcode'
        control={Input}
        name='zipcode'
        placeholder='Zipcode'
      />
      <Form.Field
        data-cy='city'
        label='City'
        control={Input}
        name='city'
        placeholder='City'
      />
        <Button data-cy='submit-btn' type='save' color='pink' value='save'>
      Save
      </Button>
      {updateProfileMessage && (
            <Message
              color='green'
              size='big'
              data-cy='response-success-message'
            >
              {updateProfileMessage}
            </Message>
          )}
        </Form>
      </Segment>
    </Container>
  )
}

export default ProfileForm
