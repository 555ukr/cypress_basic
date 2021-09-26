describe('Bellendo shop filter', () => {
    // beforeEach(() => {
    //     const username = Cypress.env('username')
    //     const password = Cypress.env('password')

    //     expect(username, 'username was set').to.be.a('string').and.not.be.empty
    //     expect(password, 'password was set').to.be.a('string').and.not.be.empty

    //     cy.visit('/')

    //     cy.get('input[id=user_login]').type(username);
    //     cy.get('input[id=user_pass]').type(`${password}{enter}`)
    // })

    // it('Serch page filter', () => {
    //     cy.visit('/')

    //     cy.get('input[type=search]').first().type('pfannen{enter}')

    //     cy.get('aside.widget_price_filter').should('be.visible')

    //     cy.get('form.woocommerce-ordering').should('be.visible')
    // })

    it('Subsubcategory mobile', () => {
        cy.viewport('iphone-6')

        cy.visit('/')
        cy.visit('/aufbewahrung/')
        cy.get('div.filter-container').should('not.visible')
        cy.get('div.sort').should('not.visible')
    })

    it('Subsubcategory desctop', () => {
        cy.visit('/')
        cy.visit('/aufbewahrung/')
        cy.get('div#shop-sidebar').should('exist')
    })
})