import axios from 'axios';

let options = {
    baseURL:'https://jsonplaceholder.typicode.com'
}
let axiosInstance = axios.create(options)
const getPostsByUserId = (id) => axiosInstance('/users/' + id + '/posts')
const getUsers = () => axiosInstance('/users')

export {getUsers, getPostsByUserId}
