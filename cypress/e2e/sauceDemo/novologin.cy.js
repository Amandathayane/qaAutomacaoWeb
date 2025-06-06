/// <reference types="cypress" />

describe('Validação da funcionalidade de login', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/v1/')
    cy.clearCookies()
  })

  it('Deve fazer login com credenciais válidas', () => {
    cy.login('standard_user', 'secret_sauce')

    cy.get('.product_label').should('be.visible')
    cy.url().should('include', '/inventory')
  })

  it('Deve exibir erro com login e senha inválidos', () => {
    cy.login('usuario_invalido', 'senha_invalida')
    
    cy.get('[data-test="error"]').should('be.visible')
      .and('have.text', 'Epic sadface: Username and password do not match any user in this service')
  })

  it('Deve exibir erro com login inválido e senha válida', () => {
    cy.login('usuario_invalido', 'secret_sauce')
    
    cy.get('[data-test="error"]').should('be.visible')
      .and('have.text', 'Epic sadface: Username and password do not match any user in this service')
  })
})