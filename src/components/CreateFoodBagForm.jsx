import React from 'react'
import {
  Button,
  Container,
  Form,
  Header,
  Icon,
  Input,
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
      <Form
        data-cy='foodbag-form'
        onSubmit={(event) => FoodBagServices.create(event, dispatch)}
      >
        <Form.Field
          data-cy='number-of-bags'
          name='foodbag'
          label='How many bags do you want to donate today?'
          placeholder='Number of bags'
          control={Input}
          type='number'
          max={10}
          min={1}
        />
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
