describe('Brouser Actions', () => {
    it('shoul load bookds website', ()=> {
        cy.visit('https://books.toscrape.com/index.html');
        cy.url().should('include', 'index.html');
        cy.log('Before Reload');
        cy.reload()
        cy.log('After Reload');
    })

    it('should click on Travael category', () => {
         cy.get('a')
            .contains('Travel')
            .click();
        cy.get('h1').contains('Travel');
    })

    it ('should display correct numbar of books', () => {
        cy.get('.product_pod')
            .its('length')
            .should('eq', 11);
    })

    it('should display correct price', () => {
        cy.get('a').contains('Poetry').click();
        cy.get('a').contains('Olio').click();
        cy.get('.price_color').contains('23.88');
    })
})