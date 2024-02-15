/// <reference types='cypress'/>

context('Dev Finances Agilizei', () => {
   //hooks
   //Trechos de código que exexutam antes e depois dos testes
   //before -> antes de cada teste
   //beforeEach -> antes de cada teste
   //After -> depois de todos os testes
   //afterEach -> depois de cada teste

   beforeEach(() => {
      cy.visit('https://dev-finance.netlify.app/?description=Mesada&amount=50&date=2024-02-21')
      cy.get('#data-table tbody tr').should('have.length', 0)
   });
   it('Cadastrar entradas', () => {
      //Entender o fluxo manualmente      
      
      //Adicionar as asserções que a gente precisa

      
      //Mapear os elementos que vamos interagir e
      //Descrever as integrações com o cypress
      cy.get('#transaction .button').click()// id + classe
      cy.get('#description').type('Mesada')// id
      cy.get('[name=amount]').type(12)// Atributos
      cy.get('[type=date]').type('2024-02-21')// Atributos
      cy.get('button').contains('Salvar').click()// Tipo e valor

      cy.get('#data-table tbody tr').should('have.length', 1)
      
      //Os dados que foram cadastrados

   });

   //cadastrar saidas
   it('Cadastrar saidas', () => {
      //Mapear os elementos que vamos interagir e
      //Descrever as integrações com o cypress
      cy.get('#transaction .button').click()// id + classe
      cy.get('#description').type('Mesada')// id
      cy.get('[name=amount]').type(-12)// Atributos
      cy.get('[type=date]').type('2024-02-21')// Atributos
      cy.get('button').contains('Salvar').click()// Tipo e valor

      cy.get('#data-table tbody tr').should('have.length', 1)
   });

   //remover entradas e saidas
});