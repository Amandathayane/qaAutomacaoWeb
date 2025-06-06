import { gerarDadosFormulario } from '../../support/utils/dados-fake'

/// <reference types="cypress" />

context('Validação da funcionalidade de aprovação ou reprovação', () => {

    beforeEach(() => {
        cy.visit('https://angelofdiasg.tech/qaprogramador/sacfunc/')
    })

    //MENSAGENS
    const mensagemAprovada = (nome, credito) => `Olá, ${nome}. Sua solicitação de crédito no valor de R$ ${credito} foi APROVADA!`
    const mensagemReprovada = (nome, credito) => `Olá, ${nome}. Sua solicitação de crédito no valor de R$ ${credito} foi REPROVADA, pois sua renda é menor que R$ 2000.`


    it('Deve aprovar solicitação de crédito quando renda for suficiente', () => {
        //DADOS
        const { nome, email, renda, cpf, credito } = gerarDadosFormulario(2000, 1000) //VALORES DE RENDA E CREDITO RESPECTIVAMENTE

        //PASSOS
        cy.preencherFormulario({ nome, email, renda, cpf, credito })
        cy.botaoSolicitacaoDeCredito()

        //VALIDAÇÕES
        cy.get('#result').should('be.visible').and('contain', 'APROVADA').and('have.text', mensagemAprovada(nome, credito))
    })


    it('Deve reprovar solicitação de crédito quando renda for insuficiente', () => {
        //DADOS
        const { nome, email, renda, cpf, credito } = gerarDadosFormulario(1000, 1000) //VALORES DE RENDA E CREDITO RESPECTIVAMENTE

        //PASSOS
        cy.preencherFormulario({ nome, email, renda, cpf, credito })
        cy.botaoSolicitacaoDeCredito()

        //VALIDAÇÕES
        cy.get('#result').should('be.visible').and('contain', 'REPROVADA').and('have.text', mensagemReprovada(nome, credito))
    })
})