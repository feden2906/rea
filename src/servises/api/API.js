import axios from 'axios';

const options = {
    baseURL: 'https://jsonplaceholder.typicode.com/'
};
const axiosInstance = axios.create(options);

const getUsers = () => axiosInstance('/users');
const getPosts = () => axiosInstance('/posts');
const getComment = () => axiosInstance('/comments');
const getUsersPosts = (id) => axiosInstance('/users/' + id + '/posts')
const getPostsComments = (id) => axiosInstance('/posts/' + id + '/comments')

export {getUsers, getComment, getPosts, getUsersPosts, getPostsComments}