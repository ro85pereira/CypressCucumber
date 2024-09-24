import {Given, When,Then} from 'cypress-cucumber-preprocessor/steps'

Given("Quando o usuario estiver na tela de Login", () =>{
   
    cy.visit("https://automationexercise.com/login")
  
})

When("digitar email e senha no formulario de login e clicar no botão login", () =>{
    //capturar campo email e senha pelo id
    cy.get('[data-qa="login-email"]').type('ro85pereira@hotmail.com');
    cy.get('[data-qa="login-password"]').type('SalazarVasco');
    //clicar no botão utilizando a classe
    cy.get('[data-qa="login-button"]').click();
})

Then("terá acesso a tela Home", () =>{
    cy.get('div.shop-menu').contains('Logged in as');
})
