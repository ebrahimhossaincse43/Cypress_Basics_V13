describe('Alert Test', ()=>{
    
    beforeEach(()=>{
        cy.viewport(1020, 780)
        cy.visit('https://register.rediff.com/register/register.php')
    })

    it('Test', ()=>{
        // cy.get('[width="200"] > input').type('Test User')
        // cy.get('[valign="bottom"] > [type="text"]').type('12575521757')
        // cy.get('#country').select('17')
        cy.get('[height="45"] > :nth-child(1) > img').screenshot()
        cy.screenshot()
        cy.wait(5000)
    })
    
})