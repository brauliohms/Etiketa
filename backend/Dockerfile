# Estágio de construção
FROM node:20-alpine AS build

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Estágio final
FROM node:20-alpine

WORKDIR /usr/app

COPY --from=build /usr/app ./

# Instale o dockerize
RUN apk add --no-cache --virtual .build-deps \
    curl \
    && curl -sSL https://github.com/jwilder/dockerize/releases/download/v0.6.1/dockerize-alpine-linux-amd64-v0.6.1.tar.gz \
    | tar -C /usr/local/bin -xzv

COPY entrypoint.sh ./

RUN chmod +x /usr/app/entrypoint.sh

CMD ["/usr/app/entrypoint.sh"]
