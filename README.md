
 Cadastro de Usuários com Node.js, SQLite e Front-end Simples

Projeto simples de cadastro de usuários com integração entre front-end e back-end, utilizando Node.js, Express, SQLite e uma interface em HTML/CSS/JS puro.


Tecnologias Utilizadas

- Front-end: HTML, CSS, JavaScript puro (sem frameworks)
- Back-end: Node.js com Express
- Banco de Dados: SQLite3
- Outros: CORS, Body-Parser


   Funcionalidades

   ront-end
- Campo para digitar nome do usuário
- Botão de salvar
- Lista dinâmica de usuários cadastrados
- Responsivo para mobile

 Back-end
- Rota `POST /salvar`: salva novo usuário no banco
- Rota `GET /usuarios`: retorna todos os usuários cadastrados
- Criação automática do banco (`meuSite.db`) e da tabela `usuarios`



   Como Funciona
    index.html

Estrutura HTML com input de nome, botão para salvar e uma `<ul>` que lista os usuários.

   index.css

Estilo clean e responsivo para input, botão e conteúdo da página.

   index.js

- `salvarUsuario()`: envia nome para o back-end via `fetch`
- `listarUsuarios()`: busca os nomes cadastrados e mostra na tela

    server.js

- Inicializa servidor com Express
- Conecta ao banco SQLite e cria tabela se não existir
- Rotas:
  - `POST /salvar` → Insere novo nome
  - `GET /usuarios` → Retorna todos os nomes cadastrados


   Como Executar



 Instale as dependências:
   
   npm install express sqlite3 cors body-parser
   

 Inicie o servidor

   node server.js


 Abra o index.html no navegador .



   Observações

- O projeto usa banco de dados local (`meuSite.db`)
- A comunicação entre front e back acontece em `http://localhost:3000`
- Os dados são persistidos no arquivo SQLite



   Contato

Desenvolvido por *Alan Cefair* 
📧 Email: [alancefair16@gmail.com]  
📚 Curso: Análise e Desenvolvimento de Sistemas – ESBAM 3ºPeriodo

