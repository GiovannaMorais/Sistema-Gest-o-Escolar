# Sistema de Gestão Escolar

Este projeto é um Sistema de Gestão Escolar que permite gerenciar materiais, provas, estudantes, recados e acesso ao sistema com autenticação. O projeto é dividido entre o backend (Node.js com Express, Prisma e PostgreSQL) e o frontend (React com Styled Components). A estrutura do projeto segue o padrão de monopositorio, utilizando o Turborepo.

## Tecnologias Utilizadas

### Backend:
- **Node.js**: Plataforma para execução do JavaScript no servidor.
- **Express**: Framework para criar APIs RESTful.
- **Prisma**: ORM para interação com o banco de dados PostgreSQL.
- **PostgreSQL**: Banco de dados relacional usado no projeto.

  
### Frontend:
- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Styled Components**: Biblioteca para estilização de componentes React.


## Funcionalidades

- **CRUD de Materiais**: Gerenciamento de materiais didáticos da escola.
- **CRUD de Provas**: Cadastro, edição, consulta e exclusão de provas.
- **CRUD de Estudantes**: Gerenciamento dos dados dos estudantes.
- **CRUD de Recados**: Sistema de recados para comunicação entre a escola e os alunos/responsáveis.
- **Sistema de Login**: Autenticação para usuários do sistema.

## Estrutura do Projeto

O projeto é organizado como um monorepo, utilizando o **Turborepo** para gerenciar o backend e o frontend dentro de um único repositório.

```bash
.
├── apps
│   ├── backend # Backend Node.js + Express + Prisma
│   └── frontend # Frontend React + Styled Components
└── 
...
```

## Instalação e Configuração

### Pré-requisitos

- Node.js (>= 14.x)
- PostgreSQL (>= 12.x)
- Yarn (ou npm)

### Passo a Passo

1. **Clone o repositório:**

   ```bash
   git clone <url-do-repositorio>
   cd sistema-gestao-escolar

## Rotas da API

O backend fornece as seguintes rotas para gerenciamento dos recursos:

### Usuários

- `POST /user` - Criar novo usuário
- `GET /users` - Listar todos os usuários
- `GET /user/:id` - Obter um usuário pelo ID
- `GET /users/:role` - Listar usuários por função (role)
- `PUT /user/:id` - Atualizar usuário existente
- `DELETE /user/:id` - Remover usuário

### Estudantes

- `GET /students` - Listar todos os estudantes
- `GET /students/:class` - Listar estudantes por turma
- `GET /student/:id` - Obter um estudante pelo ID
- `POST /student` - Criar novo estudante
- `PUT /student/:id` - Atualizar estudante existente
- `DELETE /student/:id` - Remover estudante

### Materiais

- `GET /materials` - Listar todos os materiais
- `GET /material/:id` - Obter um material pelo ID
- `POST /material` - Criar novo material
- `PUT /material/:id` - Atualizar material existente
- `DELETE /material/:id` - Remover material

### Provas

- `GET /exams` - Listar todas as provas
- `GET /exams/:class` - Listar provas por turma
- `GET /exam/:id` - Obter uma prova pelo ID
- `POST /exam` - Criar nova prova
- `PUT /exam/:id` - Atualizar prova existente
- `DELETE /exam/:id` - Remover prova

### Recados

- `GET /notices` - Listar todos os recados
- `GET /notice/:id` - Obter um recado pelo ID
- `POST /notice` - Criar novo recado
- `PUT /notice/:id` - Atualizar recado existente
- `DELETE /notice/:id` - Remover recado

## Contribuição

Contribuições são bem-vindas! Para contribuir com o projeto, siga os passos abaixo:

1. **Fork** o repositório.
2. Crie uma **branch** para sua funcionalidade ou correção de bug:
   ```bash
   git checkout -b minha-nova-funcionalidade
