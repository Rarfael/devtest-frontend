
## Front End

Front end com operações bsicas de CRUD escrito em Vuejs.
A api consumida encontra-se nesse repositório: https://github.com/Rarfael/devtest-backend
 

## Setup

Antes de começar vá em src/services/Http.js e substitua baseURL pela url onde esta hosperada a api  
`
const client = axios.create({  
    baseURL: 'http://your-api-domain.api/api/V1',
`

```
npm install
npm run serve
```
