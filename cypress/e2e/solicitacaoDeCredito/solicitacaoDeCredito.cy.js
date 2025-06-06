/// <reference types="cypress" />


context('Validação da funcionalidade de aprovação ou reprovação', () => {

    beforeEach(() => {
        cy.visit('https://angelofdiasg.tech/qaprogramador/sacfunc/')
    });

    it('Validar os campos obrigatórios', () => {

        //Passos
        cy.get('#nome').type('Amanda é linda')
        cy.get('#email').type('amanda@hiago.com')
        cy.get('#renda').type(2000)
        cy.get('#cpf').type('123.456.789-11')
        cy.get('#credito').type('1000')
        cy.get('[type="submit"]').click()

        //Assertions
        cy.get('#result').should('exist').should('be.visible')
            .should('have.text', 'Olá, Amanda é linda. Sua solicitação de crédito no valor de R$ 1000 foi APROVADA!')
            .contains('APROVADA')

    });


    it('Validar aprovação de crédito', () => {

        //Passos
        cy.get('#nome').type('Amanda é linda')
        cy.get('#email').type('amanda@hiago.com')
        cy.get('#renda').type(2000)
        cy.get('#cpf').type('123.456.789-11')
        cy.get('#credito').type('1000')
        cy.get('[type="submit"]').click()

        //Assertions
        cy.get('#result').should('be.visible').should('contain', 'APROVADA')
            .and('have.text', 'Olá, Amanda é linda. Sua solicitação de crédito no valor de R$ 1000 foi APROVADA!')
    });


    it('Validar reprovação de crédito', () => {

        //Passos
        cy.get('#nome').type('Amanda é linda')
        cy.get('#email').type('amanda@hiago.com')
        cy.get('#renda').type(1000)
        cy.get('#cpf').type('123.456.789-11')
        cy.get('#credito').type('1000')
        cy.get('[type="submit"]').click()

        //Assertions
        cy.get('#result').should('be.visible').should('contain', 'REPROVADA')

        //.contains(/aprovada/i)
        //.contains('Aprovada', {matchCase: false})
    });
});