/// <reference types="cypress-xpath" />

describe('First Test', ()=>{

    it('Hello Cypress', ()=>{
        cy.visit("https://code.visualstudio.com/")
        cy.wait(5000)
        cy.get('#nav-extend').click()
        cy.wait(5000)
        cy.get('#navbar-brand').click()
    }) 

})