/// <reference types = "cypress" />


describe('Cura Make appointment', function(){

     it('Visit the URL',function(){

         cy.visit('https://katalon-demo-cura.herokuapp.com/')

 })
     it('Click on Make appointment',function(){
          
        //Username
        cy.get('#btn-make-appointment').click()
        cy.get('#txt-username').type('John Doe').should('have.value', 'John Doe')

        // Password
        cy.get('#txt-password').type('ThisIsNotAPassword').should('have.value', 'ThisIsNotAPassword')

        cy.get('#btn-login').click()
})

    it('Make an Appointment',function(){
        cy.get('#combo_facility').select('Seoul CURA Healthcare Center')
        cy.get('.checkbox-inline').click()
        cy.get('.col-sm-4 > :nth-child(2)').click()
        cy.get('#txt_visit_date').type('30/03/2020')
        cy.get('#txt_comment').click({force:true})
        cy.get('#txt_comment').type('I will be available on time')
        cy.get('#btn-book-appointment').click()

})

    it('Verify Appointment ',function(){


       cy.get('h2').contains('Appointment Confirmation')
       cy.get('#comment').contains('I will be available on time')
        

       

    })





})