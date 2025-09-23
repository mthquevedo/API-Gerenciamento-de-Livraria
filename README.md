## API de Gerenciamento de Livraria

Uma API REST para um sistema de gerenciamento de livraria construída em Node.js, Express e MongoDB.

## Funcionalidades
### CRUD
- Criar registros nas entidades
- Listar os registros do banco de dados com filtros e paginação
- Atualizar registros completos
- Excluir registros

### Recursos Avançados
- Busca parcial por termos
- Paginação configurável
- Filtros por atributos de schema
- Ordenação personalizada
- Validação de erros e retorno dedicado

## Tecnologias

![Skills](https://skills.syvixor.com/api/icons?i=nodejs,javascript,express,mongodb)

## Endpoints da API

### Autores

```http
GET    /autores              # Listar autores
GET    /autores/:id          # Listar autor
POST   /autores              # Criar autor
PUT    /autores/:id          # Atualizar autor
DELETE /autores/:id          # Excluir autor
```

### Livros

```http
GET    /livros               # Listar livros
GET    /livros/busca         # Listar livros (com filtros)
GET    /livros/:id           # Listar livro
POST   /livros               # Criar livro
PUT    /livros/:id           # Atualizar livro
DELETE /livros/:id           # Excluir livro
```

## Instalação e execução

```bash
npm install                  # Instala as dependências
npm run dev                  # Desenvolvimento com hot reload
```
