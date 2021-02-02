import React from 'react'
// import React, { useState } from "react";
import { useDispatch, useSelector} from 'react-redux'
import { Form, Button, Message } from 'semantic-ui-react'
import ProfileServices from '../modules/ProfileServices'

const ProfileForm = () => {
  debugger
  const dispatch = useDispatch()
  const updateProfileMessage = useSelector((state) => state)
  // const [companyName, setCompanyName] = useState()
  // const [adress, setAdress] = useState()
  // const [zipcode, setZipcode] = useState()
  // const [city, setCity] = useState()
  debugger

  return (
    <Form
      data-cy='profile-form'
      onSubmit={(event) => ProfileServices.create(event, dispatch)}
    >
      <Form.Field
        data-cy='company-name'
        label='Company Name'
        // control={Input}
        name='companyName'
        placeholder='Company Name'
        // onChange={(event) => setCompanyName(event.target.value)}
      />
      <Form.Field
        data-cy='adress'
        label='Adress'
        // control={Input}
        name='adress'
        placeholder='Adress'
        // onChange={(event) => setAdress(event.target.value)}
      />
      <Form.Field
        data-cy='zipcode'
        label='Zipcode'
        // control={Input}
        name='zipcode'
        placeholder='Zipcode'
        // onChange={(event) => setZipcode(event.target.value)}
      />
      <Form.Field
        data-cy='city'
        label='City'
        // control={Input}
        name='city'
        placeholder='City'
        // onChange={(event) => setCity(event.target.value)}
      />
      <Button data-cy='save-btn' type='save' color='pink' value='save'>
        Save
      </Button> 

      {/* {updateProfileMessage && (
            <Message
              color='green'
              size='big'
              data-cy='response-success-message'
            >
              {updateProfileMessage}
            </Message>
          )} */}

      {/* {updateProfileMessage && (
        <Message
          color='green'
          size='big'
          data-cy='response-success-message'>
          {updateProfileMessage}
        </Message>
      )} */}
    </Form>
  )
}

export default ProfileForm
