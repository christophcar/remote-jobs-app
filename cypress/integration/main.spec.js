describe('App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('has the right title', () => {
    cy.title().should('equal', 'Finde Jobs an den ungewöhnlichsten Orten')
  })

  it('has a hero image', () => {
    cy.get('[data-cy="Heroimage"]').should('have.length', 1)
  })

  it('has multiple category buttons', () => {
    cy.get('[data-cy="CategoryButton"]').should('have.length', 11)
  })
})

describe('Navigation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('has a logo that is clickable', () => {
    cy.get('[data-cy="Logo"]').click()
  })

  it('has an input field', () => {
    cy.get('[data-cy="Input"]').should('have.length', 1)
  })
})

describe('Search', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  it('can filter jobs via text', () => {
    cy.get('input[placeholder="Suche nach Jobs..."]').type('Frontend')
    // cy.get('[data-cy="JobCard"]')
  })

  it('can filter jobs via category buttons', () => {
    cy.get('[data-cy="CategoryButton"]').click({ multiple: true })

    // cy.get('[data-cy="JobCard"]')
  })
})

describe('Descriptions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  it('can visit details page', () => {
    cy.get('[data-cy="JobCard"]')
      .first()
      .click()
    cy.get('[data-cy="Descriptions"]')
  })
})
