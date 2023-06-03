describe('Hover Test', () =>{

    it('Open Url', ()=>{
        cy.visit('https://www.amazon.com/')
        cy.get('#nav-link-accountList').trigger('mouseover')
        cy.wait(5000)
        cy.get('[href="/gp/css/homepage.html?ref_=nav_AccountFlyout_ya"] > .nav-text').click()
        cy.wait(5000)
    })
})