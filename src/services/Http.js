import axios from 'axios'

const client = axios.create({
    baseURL: 'http://localhost/devtest-backend/public/api',
    timeout: 1000,
    headers: {'Content-Type': 'application/json'}
})

export default client