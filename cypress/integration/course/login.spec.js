describe('Working with inputs', () => {
    it('should override the current time', () => {
        const date = new Date(2020, 3, 10).getTime() // return timestamp
        cy.clock(date)
        cy.log(date)
    })
    
    it('should load website', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.clearCookies({ log:true })
        cy.clearLocalStorage('your item', { log: true })
        cy.title().should('include', 'Zero - Log in')
    })

    it('should fill username', () => {
        cy.get('#user_login').as('username')
        cy.get('@username').clear()
        cy.get('@username').type('some invalid password', { delay: 50 })
    })

    it('should fill password', () => {
        cy.get('#user_password').as('password')
        cy.get('@password').clear()
        cy.get('@password').type('some invalid password')
    })

    it('should mark checbox', () => {
        cy.get('input[type="checkbox"]').click()
    })

    it('should submit login form', () => {
        cy.contains('Sign in').click()
    })

    it('should dispaly error message', () => {
        cy.get('.alert-error').should('be.visible').and('contain', 'Login and/or password are wrong.')
    })
})