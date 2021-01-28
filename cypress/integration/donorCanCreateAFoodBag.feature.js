/* eslint-disable no-undef */
describe('Donor can create a foodbag', () => {
  beforeEach(() => {
    cy.server()
    cy.route({
      method: 'POST',
      url: 'http:localhost:3000/api/auth/sign_in',
      response: 'fx:donor_can_register.json',
      headers: {
        uid: 'donor@donor.com',
      },
    })
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/api/auth/validate_token**',
      response: 'fx:donor_can_register.json',
    })
    cy.visit('/')
  })
  describe('successfully', () => {
    it('fills in form', () => {
      cy.route({
        method: "POST",
        url: "http://localhost:3000/api/foodbags",
        response: { message: "Your foodbag was successfully created!" },
      })
      cy.get("[data-cy='foodbag-form']").within(() => {
      cy.get("[data-cy='number-of-bags']").type('5')
      cy.get("[data-cy='submit-btn']").contains("Donate").click()
      cy.get("[data-cy='api-response-success-message']").should("contain", "Your foodbag was successfully created!" )
      })
    })
  })
})
