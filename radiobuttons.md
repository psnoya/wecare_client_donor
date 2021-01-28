        <Form.Field
        label="Please select a pickup time"
        />
        <Form.Field>
          <Radio
            data-cy='pickup-time1'
            label='08-12'
            name='morning'
            value='morning'
            // checked={}
            // onChange={}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            data-cy='pickup-time2'
            label='12-16'
            name='afternoon'
            value='afternoon'
            // checked={}
            // onChange={}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            data-cy='pickup-time3'
            label='16-20'
            name='evening'
            value='evening'
            // checked={}
            // onChange={}
          />


      cy.get("[data-cy='pickup-time1']").click()
      cy.get("[data-cy='pickup-time2']").click()
      cy.get("[data-cy='pickup-time3']").click()