/// <reference types="cypress" />


it ('Basic test',function(){

    cy.visit('https://codedamn.com/')

    // way 1
    cy.contains('Learn Programming' ).should('exist')
 
    // way 2
    cy.get('.asyncComponent > div > a')

    //way 3

    cy.get('[data-testid=learnbtn]')

   


})  
