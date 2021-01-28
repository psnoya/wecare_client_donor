import React, { useState } from 'react'
import {
  Button,
  Container,
  Form,
  Header,
  Icon,
  Input,
} from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux'
import FoodBagServices from '../modules/FoodBagServices'

const CreateFoodBagForm = () => {
  const dispatch = useDispatch()
  const { createFoodBagMessage, errorMessage} = useSelector(state => state)
  const [foodbag, setFoodbag] = useState()
  
  return (
    <Container>
      <Header>Create your FoodBag</Header>
      <Form data-cy='foodbag-form'>
        <Form.Field
          data-cy='number-of-bags'
          name="foodbag"
          label='How many bags do you want to donate today?'
          placeholder='Number of bags'
          control={Input}
        />
        <Button data-cy='submit-btn' type='submit' color='purple' icon='heart'>
          <Icon name="heart"></Icon>
          Donate
        </Button>
        {}
      </Form>
    </Container>
  )
}

export default CreateFoodBagForm
