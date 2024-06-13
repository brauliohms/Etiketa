# SuperTags Backend

## Instalação

### 1. Instalar Dependências

Primeiro, instale as dependências do projeto. Você pode usar `yarn` ou `npm`.

#### Usando Yarn

```yarn install```

#### Usando NPM

```npm install```

#### Configurar Variáveis de Ambiente

Copie o arquivo .env.example para .env e ajuste as variáveis de ambiente conforme necessário

```cp .env.example .env```

Edite o arquivo .env com suas configurações específicas.

#### Rodando a Aplicação com Docker

- Construir e Iniciar o Docker Compose
Certifique-se de que o Docker e o Docker Compose estão instalados e funcionando no seu sistema. Para construir e iniciar os serviços, use o comando abaixo:

```docker-compose up --build```

#### Acessar a Documentação da API

Após iniciar os serviços, você pode acessar a documentação da API no navegador:

```http://localhost:4040/api-docs```

#### Outras Informações

Certifique-se de que as portas configuradas no docker-compose.yml não estejam em uso por outros serviços.
O banco de dados PostgreSQL será iniciado e persistirá os dados no diretório ./data.

#### Estrutura do Projeto

```bash
src/ - Código-fonte da aplicação.
docker-compose.yml - Configuração do Docker Compose.
.env - Arquivo de configuração de variáveis de ambiente.
.env.example - Exemplo de arquivo de configuração de variáveis de ambiente.
```
