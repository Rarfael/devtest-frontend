import axios from 'axios'

const client = axios.create({
    baseURL: 'http://your-api-domain.api/api',
    timeout: 9000,
    headers: {'Content-Type': 'application/json'}
})

export default client