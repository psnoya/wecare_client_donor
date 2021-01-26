describe('finds root', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('finds root', () => {
    expect('contain', 'weCare')
  })
})
