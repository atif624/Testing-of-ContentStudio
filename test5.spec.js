describe('Testing bulk uploader',() => {

    it('Openning ContentStudio',()=>{
        cy.visit('https://app.contentstudio.io/login')

    })

    it('Logging in',()=>{
        cy.get(':nth-child(1) > .input_field > input').type("slahudeenrasheed3@gmail.com")
        cy.get(':nth-child(2) > .input_field > input').type("123456")
        cy.get('.btn_block > .btn').click()
      
    })

    it('Getting to the AUTOMATION section',()=>{
        cy.get('.right_nav > .links > :nth-child(2) > a').click()
        cy.get('.left > .links > :nth-child(3) > a').click()
       
    })

    it('Moving to the Bulk Uploader',()=>{
        cy.get(':nth-child(6) > .box_inner > .bottom_btn > .btn').click({force: true})
        cy.get('.page_1 > .automation_page > .page_inner > .step_btn > .active').click()
        cy.get('.toasted > .d-flex')
    })
})