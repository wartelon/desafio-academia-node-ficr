# Desafio `academia node FICR`

Neste desafio você deverá desenvolver uma api que retorna um currículo dinâmico. Para isso, você deverá comunicar-se com dois serviços para capturar informações. A api do Facebook e a api do Github.

## Especificações mínimas do projeto

* Utilizar o [express](https://www.npmjs.com/package/express)

* Utilizar algum pattern para estruturar o projeto

* O projeto deverá ser publicado no github

* Caso o usuário acesse uma rota que não foi especificada, deverá ser apresentado para ele uma mensagem de com o status 404

## Especificações desejáveis do projeto

* Publicar o projeto no [Heroku](https://www.heroku.com/) com dockerfile ou github

* Criar testes utilizando [Jest](https://www.npmjs.com/package/jest)

* Utilizar ferramentas de qualidade de código: [Eslint](https://www.npmjs.com/package/eslint) e [EditorConfig](https://editorconfig.org/)

* Sinta-se livre para adionar features ao seu gosto. Exemplo: tradução do conteúdo utilizando flags na requisição, como mostrado abaixo.

````http
  GET  /api/curriculo?lang=en_us
````

## Requisitos obrigatórios

* O projeto deve conter a seguinte rota:

````http
  GET  /api/curriculo
````

* A rota deve conter a seguinte resposta:

````json
  {
    "facebook_profile": {
      "image": "https://imagem-do-perfil",
      "name": "Fulano",
      "surname": "Silva",
      "Adress": "Rua fulano de tal, 256 - Pe",
      "gender": "Masculino",
      "birthday": "12/12/1994",
      "email": "fulano@gmail.com"
    },
    "github_profile": {
      "name": "Fulano da Silva",
      "html_url": "https://github.com/fulano",
      "bio": "Fullstack Developer and Mobile Developer",
      "company": "@Accenture",
      "repositories": [
        {
          "size": 49,
          "name": "academia-nodejs-ficr",
          "url": "https://api.github.com/repos/mizamelo/academia-nodejs-ficr"
        },
        {
          "size": 37,
          "name": "academia-php",
          "url": "https://api.github.com/repos/mizamelo/academia-php"
        }
      ]
    }
  }

````

  * Devem ser listados os 3 primeiros repositórios ordenados do maior para o menor pelo  campo 'size'
