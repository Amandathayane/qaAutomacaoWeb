/// <reference types="cypress" />

context('Validação da funcionalidade de aprovação ou reprovação', () => {

    beforeEach(() => {
        cy.visit('https://angelofdiasg.tech/qaprogramador/sacfunc/')
    })


    it('Deve validar os campos obrigatórios e aprovação', () => {
        cy.preencherFormulario({
            nome: 'Amanda é linda',
            email: 'amanda@hiago.com',
            renda: 2000,
            cpf: '123.456.789-11',
            credito: 1000
        })
        cy.botaoSolicitacaoDeCredito()

        cy.get('#result')
            .should('be.visible')
            .and('have.text', 'Olá, Amanda é linda. Sua solicitação de crédito no valor de R$ 1000 foi APROVADA!')
            .and('contain', 'APROVADA')
    })

    it('Deve validar a aprovação de crédito', () => {
        cy.preencherFormulario({
            nome: 'Amanda é linda',
            email: 'amanda@hiago.com',
            renda: 2000,
            cpf: '123.456.789-11',
            credito: 1000
        })
        cy.botaoSolicitacaoDeCredito()

        cy.get('#result')
            .should('be.visible')
            .and('contain', 'APROVADA')
            .and('have.text', 'Olá, Amanda é linda. Sua solicitação de crédito no valor de R$ 1000 foi APROVADA!')
    })

    it('Deve validar a reprovação de crédito', () => {
        cy.preencherFormulario({
            nome: 'Amanda é linda',
            email: 'amanda@hiago.com',
            renda: 1000,
            cpf: '123.456.789-11',
            credito: 1000
        })
        cy.botaoSolicitacaoDeCredito()

        cy.get('#result')
            .should('be.visible')
            .and('contain', 'REPROVADA')
    })
})
