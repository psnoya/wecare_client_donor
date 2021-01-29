import React from 'react'
import {
  Button,
  Container,
  Form,
  Header,
  Icon,
  Message,
  Radio,
} from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux'
import FoodBagServices from '../modules/FoodBagServices'

const CreateFoodBagForm = () => {
  const dispatch = useDispatch()
  const { createFoodBagMessage, errorMessage } = useSelector(state => state)

  return (
    <Container>
      <Header>Create your FoodBag</Header>
      <Icon
        name='shopping bag'
        size='massive'
        style={{ marginTop: '0.1em', marginBottom: '0.2em' }}
      />
      <Form
        data-cy='foodbag-form'
        onSubmit={event => FoodBagServices.create(event, dispatch)}
      >
        <Form.Field label='Please select a pickup time' />
        <Form.Field>
          <Radio
            data-cy='pickup-time1'
            label='08-12'
            name='morning'
            value='morning'
            // checked={}
            // onChange={}
          />
          <Radio
            data-cy='pickup-time2'
            label='12-16'
            name='afternoon'
            value='afternoon'
            // checked={}
            // onChange={}
          />
          <Radio
            data-cy='pickup-time3'
            label='16-20'
            name='evening'
            value='evening'
            // checked={}
            // onChange={}
          />
        </Form.Field>

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
