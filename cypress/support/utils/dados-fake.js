// cypress/support/utils/dados-fake.js
import { faker } from '@faker-js/faker'


//SOLICITAÇÃO DE CRÉDITO
export function gerarCPFFormatado() {
    const getRandom = () => Math.floor(Math.random() * 9)
    const cpfNumeros = Array.from({ length: 11 }, getRandom)

    return `${cpfNumeros.slice(0, 3).join('')}.${cpfNumeros.slice(3, 6).join('')}.${cpfNumeros.slice(6, 9).join('')}-${cpfNumeros.slice(9, 11).join('')}`
}

export function gerarDadosFormulario(renda, credito) {
    return {
        nome: faker.person.fullName(),
        email: faker.internet.email(),
        renda,
        cpf: gerarCPFFormatado(),
        credito
    }
}