describe('Page Test', () => {
    it('Visits the Academy Blog', () => {
        cy.request({url: 'http://localhost:3000/', failOnStatusCode: false})
        cy.visit('http://localhost:3000/')

    })
})