Feature: Login

Scenario: Login com sucesso
Given Quando o usuario estiver na tela de Login
When digitar email e senha no formulario de login e clicar no botão login
Then terá acesso a tela Home