describe('write /read data to json / text file', () => {
    it('should write date into JSON', () => {
        cy.writeFile('log.json', { name: 'Mike', age: 25 })
    })

    it('should write data to the text file', () => {
        cy.writeFile('log.txt', 'Hello world')
    })

    it('should read and verify data from JSON file', () => {
        cy.readFile('log.json').its('age').should('eq', 25)
    })

    it('should read and verify data from text file', () => {
        cy.readFile('log.txt').should('eq', 'Hello world')
    })

    it('should read and verify brouser document content', () => {
        cy.visit('https://www.example.com')
        cy.wait(2000)
        cy.document().its('contentType').should('eq', 'text/html')
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
    })
})