describe('React sample application', () => {
  it('Successful data enter allows submission', () => {
    cy.visit('http://localhost:5173/')
    cy.get('[name="name"]').type("Valdas")
    cy.get('[name="email"]').type("valdukasirko@gmail.com")
    cy.get('[name="address"]').type("Seredžius")
  })

  
})