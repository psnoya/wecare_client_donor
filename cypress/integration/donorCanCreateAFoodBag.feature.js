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
  it('with valid credentials', () => {
    cy.get("[data-cy='register-btn']").click()
    cy.get("[data-cy='registration-form']").within(() => {
      cy.get("[data-cy='email']").type('donor@donor.com')
      cy.get("[data-cy='password']").type('123456')
      cy.get("[data-cy='password-confirmation']").type('123456')
      cy.get("[data-cy='submit-btn']").click()
      cy.get("[data-cy='register-btn']").should('not.be.visible')
    })
  })
  
  describe('and successfully create a foodbag', () => {
    it('by choosing a pickup time 12-16', () => {
      cy.route({
        method: 'POST',
        url: 'http://localhost:3000/api/foodbags',
        response: { message: 'Your foodbag was successfully created!' },
      })
      cy.get("[data-cy='foodbag-form']").within(() => {
        cy.get('[data-cy="pickuptime-dropdown"]').select('12-16')
        cy.get("[data-cy='submit-btn']").contains('Donate').click()
        cy.get("[data-cy='api-response-success-message']").should(
          'contain',
          'Your foodbag was successfully created!'
        )
      })
    })
  })
  describe('successfully', () => {
    it('fills in pickup time 16-20', () => {
      cy.route({
        method: 'POST',
        url: 'http://localhost:3000/api/foodbags',
        response: { message: 'Your foodbag was successfully created!' },
      })
      cy.get("[data-cy='foodbag-form']").within(() => {
        cy.get('[data-cy="pickuptime-dropdown"]').select('16-20')
        cy.get("[data-cy='submit-btn']").contains('Donate').click()
        cy.get("[data-cy='api-response-success-message']").should(
          'contain',
          'Your foodbag was successfully created!'
        )
      })
    })
  })
  describe('unsuccessfully', () => {
    it('fills in form', () => {
      cy.route({
        method: 'POST',
        url: 'http://localhost:3000/api/foodbags',
        response: { message: "Pickuptime can't be blank!" },
        status: 422,
      })
      cy.get("[data-cy='foodbag-form']").within(() => {
        cy.get("[data-cy='submit-btn']").contains('Donate').click()
        cy.get("[data-cy='api-response-error-message']").should(
          'contain',
          "Pickuptime can't be blank!"
        )
      })
    })
  })
})
