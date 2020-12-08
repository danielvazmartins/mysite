# Iniciar Projeto

## Database
Liberar IP atual para acessar o banco de dados
https://account.mongodb.com/account/login
- Network Access
- Add IP Address

## Api
cd api
npm install 
npm run start:dev

## Front End
cd spa
npm install
npm start

## Problemas comuns
- Erro: node_modules/@types/jest/index.d.ts(31,1): error TS6200: Definitions of the following identifiers conflict with those in another file: describe, fdescribe, xdescribe, it, fit, xit, beforeEach, afterEach, beforeAll, afterAll, expect, clock, CustomEqualityTester, CustomMatcherFactory, DEFAULT_TIMEOUT_INTERVAL
Adicionar a configuração abaixo no arquivo tsconfig.json
"typeRoots": [
    "node_modules/@types"
]
Limpar pasta "dist"