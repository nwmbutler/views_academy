describe('Page Test', () => {
    it('Visits the Academy Blog', () => {
        cy.visit({
            method:'GET',
            url:'/',
            failOnStatusCode: false
          })
        cy.get('h1').contains('Views From The Academy')
    })
})

