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
      cy.get("[data-cy='foodbag-form']").within(() => {
      cy.get("[data-cy='number-of-bags']").type('5')
      })
    })
  })
})
