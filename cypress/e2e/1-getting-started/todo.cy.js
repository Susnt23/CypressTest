/// <reference types="cypress" />


describe('My First Test', function(){
   it ('does not do much', function(){
      expect(true).to.equal(true)

      cy.visit('https://example.cypress.io')

      cy.contains('type').click()

      cy.url()
      .should('include','/commands/actions')

      cy.get('#email1')
      .type('skhadka@gmail.com')
      .should('have.value', 'skhadka@gmail.com')
   })

})