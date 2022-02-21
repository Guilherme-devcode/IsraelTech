# Teste Desenvolvedor Frontend Angular

## Documentação

#### Node.js
* Node.js - <https://nodejs.org/en/>
    * Documentação - <https://nodejs.org/en/docs/>

#### Angular
* Angular CLI - <https://angular.io/guide/setup-local>
    * Documentação - <https://angular.io/docs>

## Instalação

Após a instalção das ferramentas acima, basta rodar os comandos em seu terminal

### Backend

* Atualização das dependências do node.js
    * `$ npm install`
* Iniciando aplicação
    * `$ npx json-server --watch db.json --port 3001`
* Aplicação ficará disponível na host 
    * `http://localhost:3001/`
* Parando aplicação
    * `$ npm stop`

### Frontend

* Primeiramente verifique se o Angular CLI está instalado
    * `$ ng version`
    * Caso não esteja, basta instalá-lo 
        * `$ npm install -g @angular/cli`
* Atualização das dependências do angular.js
    * `$ ng update`
* Iniciando aplicação
    * `$ ng serve`
* Aplicação ficará disponível na host 
    * `http://127.0.0.1:4200`



* O candidato deve criar um projeto para cadastro de produtos usando Angular em sua última versão.
* O prazo para entrega do projeto é dia 20/02.
* O candidato deve enviar o link do repositório do projeto.
* O contéudo deste teste NÃO deve ser compartilhado ou usado como portifólio sem a autorização da DOUBLE IT.

# Atividades
* Acessar o link do protótipo que deve ser usada como referência para desenvolvimento.
  * Link dp protótipo: https://xd.adobe.com/view/82f246d4-f2ef-4795-7acf-9c9fc7b25eb4-f4c3/
  * Senha: Doubleit2021% (Com o 'D' em maiúsculo)
  
  # INSTRUÇÕES PARA USO DO PROTÓTIPO
    * No canto superior direito existe um ícone "</>" que ao ser clicado mostra para o desenvolvedor uma guia de referência de cada estilo para ter como base na construção do site.
      *  Para fazer download das imagens basta estar no modo desenvolvedor (clicar no ícone "</>") e selecionar a imagem que vai mostrar um botão de download na guia lateral na direita.
      *  Temos um cdn que deve ser incluido no projeto que contém as fontes usadas no protótipo. Segue abaixo:
      *  "https://use.typekit.net/hzy7zyt.css" (colocar dentro de uma tag link)
  
    # PROJETO ANGULAR
    * Todos os componentes devem ser carregados com LazyLoading
    * Todos os componentes devem ter seus respectivos serviços simulando uma chamada a uma api. (Caso queira pode usar o json-server para simular uma api)
    * O projeto deve usar scss para estilos
    * Criar guarda de rota para validar se o usuário está autenticado e em caso de falha redirecionar para tela de login.
    
    # LOGIN
    * Mocar os dados de usuário como nome, email e senha. 
    * Caso o usuário informe a senha mocada de forma incorreta é necessário informar uma mensagem de erro. (Pode ser um toast)
    * Se a senha informada estiver correta, adicionar o token na sessionStorage ou localStorage que será usado para validar se o usuário esta logado ou não.
      * Token que deve ser usado: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyMzQ1Njc4OTAiLCJuYW1lIjoiSm9lIFNhbSJ9.RpYD7qsSX8UvhHeBarSe67yJo-OXU2UNtIvmme0u2vo
    
    # HEADER/MENU
    * O nome e foto do usuário deve ser recuperaddo de um serviço que retorne os dados do usuario. (Caso queira pode usar o json-server para simular uma api)
    
    # ÍNICIO
    * Usar o guarda de rota criado no inicio do projeto que será responsável por validar se o usuário esta logado ou não.
    * O texto de de boas vindas deve ser composto pelo nome do usuário que deve ser recuperado de um serviço que retorne os dados do usuário (pode ser o mesmo usado na sessão Header/Menu).
    
    # PRODUTOS
    * Usar o guarda de rota criado no inicio do projeto que será responsável por validar se o usuário esta logado ou não.
    * Criar Listagem
      * Todos os itens devem ser recuperados através de um serviço que retorne os dados de vários produtos. (Caso queira pode usar o json-server para simular uma api)
    * Criar modal para editar produto
      * Chamar um serviço para salvar o item. (Caso queira pode usar o json-server para simular uma api para salvar os dados)
      * Após edição os dados salvos devem ser refletidos na listagem. 
    * Criar modal para remover produto
      * Chamar um serviço para excluir um dado. (Caso queira pode usar o json-server para simular uma api)
      * Após a exclusão do produto o item excluído não deve ser mostrado na listagem. 
    * Criar modal para criar produto
      * Chamar um serviço para salvar o item. (Caso queira pode usar o json-server para simular uma api)
      * Ao criar um novo item, o produto deve ser mostrado na listagem.











# Israeltech

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
