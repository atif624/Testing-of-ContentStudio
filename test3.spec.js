describe('Testing Linking articles to social media',() => {

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
    it('Moving to the Linking articles to social media',()=>{
        cy.get(':nth-child(1) > .box_inner > .bottom_btn > .new_campaign').click({force: true})
    })
    it('Checking if system generates an error message for not writing campaign name',()=>{

        cy.get('.page_1 > .automation_page > .page_inner > .step_btn > .active').click()
        cy.get('.toasted > .d-flex')

    })

    it('Checking if system generates an error message after writing the campaign name but not selecting any account',()=>{
       
        cy.get('.page_inner > :nth-child(2) > input').type("My social campaign")
        cy.get('.page_1 > .automation_page > .page_inner > .step_btn > .active').click()
        cy.get('.toasted > .d-flex')

    })


})