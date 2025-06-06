// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// cypress/support/commands.js

Cypress.Commands.add('login', (username, password) => {
  cy.get('[data-test="username"]').type(username)
  cy.get('[data-test="password"]').type(password)
  cy.get('#login-button').click()
})


Cypress.Commands.add('preencherFormulario', ({ nome, email, renda, cpf, credito }) => {
  if (nome) cy.get('#nome').clear().type(nome)
  if (email) cy.get('#email').clear().type(email)
  if (renda) cy.get('#renda').clear().type(renda)
  if (cpf) cy.get('#cpf').clear().type(cpf)
  if (credito) cy.get('#credito').clear().type(credito)
})

Cypress.Commands.add('botaoSolicitacaoDeCredito' , () => {
  cy.get('[type="submit"]').click()
})