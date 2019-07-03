describe('Testing Social Posts in COMPOSER',() => {

    it('Openning ContentStudio',()=>{

        cy.visit('https://app.contentstudio.io/login')
        
    })
    it('Logging in',()=>{

        cy.get(':nth-child(1) > .input_field > input').type("slahudeenrasheed3@gmail.com")
        cy.get(':nth-child(2) > .input_field > input').type("123456")
        cy.get('.btn_block > .btn').click()
       
    })
    it('Getting to the COMPOSER',()=>{

        cy.get('.right_nav > .links > :nth-child(2) > a').click()

    })
    it('Making a social post without social account selection',()=>{

        cy.get(':nth-child(1) > .box_inner').click()
        cy.get('.inline_checkbox_list > ul > :nth-child(1) > .radio_input_image > .radio_left').click()
        cy.get('.radio_list > :nth-child(1) > .radio_left').click()
        cy.get('.post_footer > .btn').click()
        cy.get('.content_sec > p')

    })

})