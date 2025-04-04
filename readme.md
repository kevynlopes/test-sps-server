# 🔧 SPS Node - API REST de Usuários

API REST desenvolvida em Node.js para gerenciamento de usuários com autenticação via JWT e armazenamento em memória.

---

## 🚀 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [JWT (jsonwebtoken)](https://github.com/auth0/node-jsonwebtoken)
- [Nodemon](https://nodemon.io/) para desenvolvimento

---

## 👤 Usuário Admin Padrão

Um usuário administrador é automaticamente cadastrado em memória na inicialização da aplicação.  
**Credenciais:**

```json
{
  "name": "admin",
  "email": "admin@spsgroup.com.br",
  "password": "1234",
  "type": "admin"
}
````

## 🧪 Como Rodar o Projeto

```bash
# Instalar dependências
npm install

# Iniciar aplicação em modo desenvolvimento
npm run dev
````
