describe('Bellendo shop', () => {
    // beforeEach(() => {
    //     const username = Cypress.env('username')
    //     const password = Cypress.env('password')

    //     expect(username, 'username was set').to.be.a('string').and.not.be.empty
    //     expect(password, 'password was set').to.be.a('string').and.not.be.empty

    //     cy.visit('/')

    //     cy.get('input[id=user_login]').type(username);
    //     cy.get('input[id=user_pass]').type(`${password}{enter}`)

    //     cy.visit('https://dimi.bellendo.de/?clear-cart')
    // })

    it('Paid shipment method', () => {

        cy.visit('/gugelhupfform-easy-baking/')

        cy.get('button.single_add_to_cart_button').click()

        cy.visit('/cart/')
        cy.get('ul#shipping_method').contains('3,00')
    })

    it('Free shipment method', () => {

        cy.visit('/aufbewahrungsbox-lorena/')

        cy.get('button.single_add_to_cart_button').click()

        cy.visit('/cart/')
        cy.get('ul#shipping_method').contains('0,00')
    })
})

