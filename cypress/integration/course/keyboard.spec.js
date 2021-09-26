describe("Keyborbord press simulation", () => {
    it('should submit searchbox with keybord', () => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.get('#searchTerm').type('just some text {enter}')
    })
})