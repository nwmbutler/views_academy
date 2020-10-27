describe('Page Test', () => {
    it('Visits the Academy Blog', () => {
        cy.visit({
            method:'GET',
            url:'/',
            failOnStatusCode: false
          })
        cy.get('h1').contains('Views From The Academy')
    })

    it('Checks content of blog card' , () => {
        cy.visit({
            method:'GET',
            url:'/',
            failOnStatusCode: false
          })

        cy.get(':nth-child(2) > .card > .card-body > .card-text').contains('Some quick example')
        cy.get(':nth-child(3) > .card > .card-body > .card-text').contains('Some quick example')
        cy.get(':nth-child(4) > .card > .card-body > .card-text').contains('Some quick example')
    })
})

