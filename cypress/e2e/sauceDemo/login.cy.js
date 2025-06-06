/// <reference types="cypress" />


context('Validação da funcionalidade de login', () => {

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/v1/')
        cy.clearCookies()
    });


    it('Validar os campos com email e senha válidos', () => {

        //Passos
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('#login-button').click()

        //Assertions
        cy.get('.product_label').should('exist').and('be.visible')

    });


    it('Validar os campos com email e senha inválidos', () => {

        //Passos
        cy.get('[data-test="username"]').type('Amanda é linda')
        cy.get('[data-test="password"]').type('amanda')
        cy.get('#login-button').click()

        //Assertions
        cy.get('[data-test="error"]').should('exist').should('be.visible')
        .should('have.text','Epic sadface: Username and password do not match any user in this service')

    });

    it('Validar os campos com email inválido', () => {

        //Passos
        cy.get('[data-test="username"]').type('Amanda é linda')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('#login-button').click()

        //Assertions
        cy.get('[data-test="error"]').should('exist').should('be.visible')
        .should('have.text','Epic sadface: Username and password do not match any user in this service')

    });

});