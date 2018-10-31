import axios from 'axios'

const client = axios.create({
    baseURL: 'http://localhost/devtest-backend/public/api/v1',
    timeout: 9000,
    headers: {'Content-Type': 'application/json'}
})

export default client