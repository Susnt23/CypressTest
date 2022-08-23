/// <reference types="cypress" />

const { visible } = require("ansi-colors")

it ('learning assertion',function() {
   

  //Implicit Assserion
  cy.visit('https://example.cypress.io/')
  cy.contains('get').click()
  
  cy.get('#query-btn')
     .should('contain', 'Button')
     .should('have.class', 'query-btn')
     .should ('be.visible')
     .should ('be.enabled')

  cy.get('#query-btn').invoke('attr', 'id')
      .should('equal', 'query-btn')

  cy.get('#query-btn')
      .should('contain', 'Button')
      .and('have.class','query-btn')


      //Explicit Assertions
      expect(true).to.be.true
      

      let name = 'Susnt'
      expect(name).to.be.equal('Susnt')

     //assert

     assert.equal(7,7, 'not equal')
     assert.strictEqual(7,7,'Not Strictly Equal')



})