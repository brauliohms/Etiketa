FROM node:20

# Crie e defina o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

# Copie o package.json e o package-lock.json (se existir) para o diretório de trabalho
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie o restante do código-fonte para o diretório de trabalho
COPY . .

# Exponha a porta 3000 para fora do contêiner
EXPOSE 3333

# Defina o comando padrão para iniciar o aplicativo
CMD ["npm", "start"]