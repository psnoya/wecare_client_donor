/* eslint-disable no-undef */
describe('Donor can register an account', () => {
  beforeEach(() => {
    cy.server()
    cy.route({
      method: 'POST',
      url: 'http://localhost:3000/api/auth',
      response: 'fx:donor_can_register.json',
      headers: {
        uid: 'donor@donor.com',
      },
    })
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/api/auth/validate_token/**',
      status: 200,
      response: 'fx:donor_can_register.json',
    })
    cy.visit('/')
  })
  it.only('with valid credentials', () => {
    cy.get("[data-cy='register-btn']").click()
    cy.get("[data-cy='registration-form']").within(() => {
      cy.get("[data-cy='email']").type('donor@donor.com')
      cy.get("[data-cy='password']").type('123456')
      cy.get("[data-cy='password-confirmation']").type('123456')
      cy.get("[data-cy='submit-btn']").click()
      cy.get("[data-cy='register-btn']").should('not.be.visible')
    })
  })

  describe('unsuccessfully', () => {
    it('with invalid credentials', () => {
      cy.route({
        method: 'POST',
        url: 'http://localhost:3000/api/auth',
        status: '401',
        response: {
          errors: {
            full_messages: ['Invalid login credentials. Please try again.'],
          },
          success: false,
        },
      })
      cy.visit('/')
      cy.get("[data-cy='register-btn']").click()
      cy.get("[data-cy='registration-form']").within(() => {
        cy.get("[data-cy='email']").type('donor@donor.com')
        cy.get("[data-cy='password']").type('password')
        cy.get("[data-cy='password-confirmation']").type('wrong_password')
        cy.get("[data-cy='submit-btn']").click()
        cy.get("[data-cy='register-error-message']").should(
          'contain',
          'Invalid login credentials. Please try again.'
        )
      })
    })
    it('Password confirmation dont match', () => {
      cy.route({
        method: 'POST',
        url: 'http://localhost:3000/api/auth',
        status: '401',
        response: {
          errors: {
            full_messages: ['Wrong password, please try again'],
          },
          success: false,
        },
      })
      cy.visit('/')
      cy.get("[data-cy='register-btn']").click()
      cy.get("[data-cy='registration-form']").within(() => {
        cy.get("[data-cy='email']").type('donor@donor.com')
        cy.get("[data-cy='password']").type('123456')
        cy.get("[data-cy='password-confirmation']").type('654321')
        cy.get("[data-cy='submit-btn']").click()
        cy.get("[data-cy='register-error-message']").should(
          'contain',
          'Wrong password, please try again'
        )
        cy.get("[data-cy='register-btn']").should('not.be.visible')
      })
    })
  })
})
