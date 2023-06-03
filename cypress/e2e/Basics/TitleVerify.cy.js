/// <reference types="cypress-xpath" />

describe('First Test', ()=>{

    it('Hello Cypress', ()=>{
        cy.visit("https://code.visualstudio.com/")
        cy.wait(5000)
        cy.title().should('eq', "Visual Studio Code - Code Editing. Redefined")
    }) 

})