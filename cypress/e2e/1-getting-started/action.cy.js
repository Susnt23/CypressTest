/// <reference types = "cypress" />

it ('Google testing', function(){

    cy.visit('https://www.google.com')
    cy.get('#SIvCob > a').click()
   
   let   item = "Test Automation"
    cy.get('.gLFyf').type(item)
    cy.get('.gLFyf').type('{enter}')
    
     item = "some other text"
     cy.log(item)

})