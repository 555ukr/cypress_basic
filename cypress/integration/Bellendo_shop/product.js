describe('Bellendo shop product', () => {
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

    it('Color variation', () => {

        cy.visit('/isolierflasche-hotsteel/')

        cy.get('#variation_products > label').should('have.length', 4)

        cy.get('span[color=blau]').click()
        cy.get('.choosen_variation_pa_farbe').contains('blau')

    })


})