import axios from 'axios'

const api = axios.create({
    baseURL: 'http://rgfumigacao.com.br/api/client/'
})

export default api