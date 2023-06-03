describe('Alert Test', ()=>{
    
    beforeEach(()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    })

    let js_alert= "//button[contains(text(),'Click for JS Alert')]"
    let js_confirm = "//button[contains(text(),'Click for JS Confirm')]"
    let js_prompt = "//button[contains(text(),'Click for JS Prompt')]"
    let result = "//p[@id='result']"
    
    it('Test', () =>{
        cy.xpath(js_alert).click()
        cy.wait(3000)
        cy.xpath(result).should('have.text', 'You successfully clicked an alert')
        cy.wait(3000)


        cy.on('window:confirm', ()=>{
            return true
        })
        cy.xpath(js_confirm).click()
        cy.wait(3000)


        cy.window().then(function($win){
            cy.stub($win, 'prompt').returns('Hello Prompt')
            cy.xpath(js_prompt).click()
        })

        })
})