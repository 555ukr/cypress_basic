describe('custom commande', () => {
    it('should login to apllication using custom cypress command', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        
        cy.login('username', 'password')
    })
})