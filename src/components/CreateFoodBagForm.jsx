import React from 'react'
import { Button, Container, Form, Header, Input, Radio } from 'semantic-ui-react'

const CreateFoodBagForm = () => {
  return (
    <Container>
      <Form data-cy='foodbag-form'>
        <Form.Field
          data-cy='number-of-bags'
          label='Number of bags'
          placeholder='Number of bags'
          control={Input}
        />

        <Form.Field>
          <Header>Please select a pickup time</Header>
          <Radio
          data-cy='pickup-time1'
            label='08-12'
            name='radioGroup'
            value=''
            // checked={}
          />
        </Form.Field>
        <Form.Field>
          <Radio
          data-cy='pickup-time2'
            label='12-16'
            name='radioGroup'
            value=''
            // checked={}
          />
        </Form.Field>
        <Form.Field>
          <Radio
          data-cy='pickup-time3'
            label='16-20'
            name='radioGroup'
            value=''
            // checked={}
          />
        </Form.Field>
        <Button 
        data-cy='submit-btn'
        type='submit'
        icon="heart"
        color="purple"
        >Donate</Button>
      </Form>
    </Container>
  )
}

export default CreateFoodBagForm
