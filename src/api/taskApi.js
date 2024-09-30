import axios from 'axios';

const api = axios.create({
    baseURL: 'https://task-manager-1u0i.onrender.com'
});

export const getTasks = () => api.get('/');
export const createTask = (data) => api.post('/', data);
export const updateTask = (id, data) => api.put(`/${id}`, data);
export const deleteTask = (id) => api.delete(`/${id}`);
