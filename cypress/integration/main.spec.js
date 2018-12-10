describe('App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('has the right title', () => {
    cy.title().should('equal', 'Finde Jobs an den ungewöhnlichsten Orten')
  })

  it('has an input field', () => {
    cy.get('[data-cy="Input"]').should('have.length', 1)
  })

  it('has filter button', () => {
    cy.get('[data-cy="FilterButton"]').should('have.length', 1)
  })

  it('has six category buttons', () => {
    cy.get('[data-cy="CategoryButton"]').should('have.length', 6)
  })
})

describe('Search', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  it('can filter jobs via text', () => {
    cy.get('input[placeholder="Search for jobs..."]').type('Frontend')

    cy.get('[data-cy="JobCard"]')
  })

  it('can filter jobs via category buttons', () => {
    cy.get('[data-cy="CategoryButton"]').click({ multiple: true })

    cy.get('[data-cy="JobCard"]')
  })
})
