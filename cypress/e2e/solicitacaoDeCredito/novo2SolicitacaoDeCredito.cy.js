import { gerarCPFFormatado } from '../../support/utils/dados-fake'
import { faker } from '@faker-js/faker'

/// <reference types="cypress" />

context('Validação da funcionalidade de aprovação ou reprovação', () => {

    beforeEach(() => {
        cy.visit('https://angelofdiasg.tech/qaprogramador/sacfunc/')
    })

    
    it('Deve aprovar solicitação de crédito quando renda for suficiente', () => {
        //DADOS
        const nome = faker.person.fullName()
        const email = faker.internet.email()
        const renda = 2000
        const cpf = gerarCPFFormatado()
        const credito = 1000

        //PASSOS
        cy.preencherFormulario({ nome, email, renda, cpf, credito })
        cy.botaoSolicitacaoDeCredito()

        //VALIDAÇÕES
        const mensagemEsperada = `Olá, ${nome}. Sua solicitação de crédito no valor de R$ ${credito} foi APROVADA!`

        cy.get('#result').should('be.visible').and('contain', 'APROVADA').and('have.text', mensagemEsperada)
    })


    it('Deve reprovar solicitação de crédito quando renda for insuficiente', () => {
        //DADOS
        const nome = faker.person.fullName()
        const email = faker.internet.email()
        const renda = 1000
        const cpf = gerarCPFFormatado()
        const credito = 1000

        //PASSOS
        cy.preencherFormulario({ nome, email, renda, cpf, credito })
        cy.botaoSolicitacaoDeCredito()

        //VALIDAÇÕES
        const mensagemEsperada = `Olá, ${nome}. Sua solicitação de crédito no valor de R$ ${credito} foi REPROVADA, pois sua renda é menor que R$ 2000.`

        cy.get('#result').should('be.visible').and('contain', 'REPROVADA').and('have.text', mensagemEsperada)
    })
})
