#!/bin/sh

dockerize -wait tcp://postgres:5432 -timeout 60s

# Executa as migrações
npm run migrations:latest

# Inicia a aplicação
npm start
