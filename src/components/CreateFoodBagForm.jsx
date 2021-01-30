import React from 'react'
import {
  Button,
  Container,
  Form,
  Header,
  Icon,
  Message,
} from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux'
import FoodBagServices from '../modules/FoodBagServices'

const CreateFoodBagForm = () => {
  const dispatch = useDispatch()
  const { createFoodBagMessage, errorMessage } = useSelector((state) => state)

  return (
    <Container>
      <Header>Create your FoodBag</Header>
      <Icon
        name='shopping bag'
        size='small'
        style={{ marginTop: '0.1em', marginBottom: '0.2em' }}
      />
      <Form
        data-cy='foodbag-form'
        onSubmit={(event) => FoodBagServices.create(event, dispatch)}
      >
        <Form.Field />
        <Form.Field>
          <label for='pickuptime'>Choose a Pickup Time:</label>
          <select
            name='pickuptime'
            id='pickuptime'
            data-cy='pickuptime-dropdown'
          >
            <option>Select Pickup Time</option>
            <option value={0}>08-12</option>
            <option value={1}>12-16</option>
            <option value={2}>16-20</option>
          </select>
        </Form.Field>
        <br /> <br /> 
        <Button data-cy='submit-btn' type='submit' color='purple' icon='heart'>
          <Icon name='heart'></Icon>
          Donate
        </Button>
        {createFoodBagMessage && (
          <Message
            color='green'
            size='big'
            data-cy='api-response-success-message'
          >
            {createFoodBagMessage}
          </Message>
        )}
        {errorMessage && (
          <Message color='red' size='big' data-cy='api-response-error-message'>
            {errorMessage}
          </Message>
        )}
      </Form>
    </Container>
  )
}

export default CreateFoodBagForm
