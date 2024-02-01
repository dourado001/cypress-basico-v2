// CAC-TAT.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function () {
    beforeEach(() => {
        cy.visit('./src/index.html')
    })
    it('verifica o título da aplicação', function () {
        cy.title().should('eq', 'Central de Atendimento ao Cliente TAT')
    })
    it('preenche campos obrigatorios', function () {
        cy.get('#firstName').type('Neymar')
        cy.get('#lastName').type('Jr')
        cy.get('#email').type('neymar.jr@fundacaoneymar.com')
        cy.get('#open-text-area').type('Nao to gordo!')
        cy.get('button[type="submit"]').click()
        cy.get('span[class="success"]').should('be.visible')
    })
})
