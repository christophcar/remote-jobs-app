describe('App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('has the right title', () => {
    cy.title().should('equal', 'Remote Jobs in Germany')
  })

  it('has the right input', () => {
    cy.get('input[placeholder="Search for jobs..."]').should('have.length', 1)
  })

  it('has a filter', () => {
    cy.get('[data-cy="Filter"]').should('have.length', 1)
  })

  describe('Categories', () => {
    it('has six buttons', () => {
      cy.get('nav > a').should('have.length', 6)
    })

    it('changes path on click', () => {
      cy.get('nav > a')
        .contains('description')
        .click()

      cy.url().should('contain', '/description')
    })
  })
})
