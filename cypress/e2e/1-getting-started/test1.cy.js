/// <reference types="cypress" />


it ('login Test',function(){

cy.visit('https://loxodo-staging.azurewebsites.net/login')
cy.contains('loxodo').should('exist')
cy.get('#mat-input-4').type('stagesr')
cy.get('#mat-input-0').type('q1@stagesr.com')

cy.get('#mat-input-1').type('q1')
cy.get('.btn-primary').click()








})