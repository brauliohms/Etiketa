# Etiketa

## ROTEIRO DESENVOLVIMENTO

### BACKEND: Eurico, Junior Maia

#### 1 - Etapa (11/06/2024):

[] contexto delimitado auth em `packages/auth`

[] Criar provedores: Criptografia, Token, Usuario

[] Criar modelos ricos: Usuario, SenhaForte, Email, NomePessoa

[] usuario com: senha forte obrigatorio (1 caractere especial, 1 numero, 1 maiuscula e 1 minuscula com minimo de 8 caracteres )

[] usuario com: id gerado por uuid, e-mail único

[] criptografar senha usuario

[] criar casos de uso: RegistrarUsuario, LoginUsuario, LogoutUsuario

[] criar adaptadores: BancoDadosUsuarioDTO, JWTAdpter, Criptografia

[] persistir dados usuario em um banco de dados

[] gerar um token para validação de usuário

> APIs estarao em `apps/backend/`

[] endpoint criar usuario (nome, email, senha): `api.etiketa.com.br/v1/accounts/signup`

[] endpoint login (email, senha): `api.etiketa.com.br/v1/accounts/login`

[] endpoint logout: `api.etiketa.com.br/v1/accounts/logout`

#### 2 - Etapa (19/06/2024):

#### 3 - Etapa (26/06/2024):

#### 4 - Etapa (03/07/2024):

#### 5 - Etapa (11/06/2024)_OPCIONAL_:

#### 6 - Conclusão (17/07/2024)

### FRONTEND: Braulio, Filipi A. Souza

> framework frontend em `apps/frontend/`

#### 1 - Etapa (11/06/2024):

[] tela de cadastro de usuario com nome, email e senha: `app.etiketa.com.br/signup`

[] feedback visual erro tela de cadastro

[] tela de login: `app.etiketa.com.br/login`

[] feedback visual erro tela de login

[] tela pós login (página interna da aplicação): `app.etiketa.com.br/home`

[] A página interna da aplicação só deve ser acessível para usuários logados

[] Ao fazer o login, a sessão do usuário deve se manter ativa por um período de tempo (uma semana)

#### 2 - Etapa (19/06/2024):

#### 3 - Etapa (26/06/2024):

#### 4 - Etapa (03/07/2024):

#### 5 - Etapa (11/06/2024)_OPCIONAL_:

#### 6 - Conclusão (17/07/2024)

> Ouvinte: Madson
