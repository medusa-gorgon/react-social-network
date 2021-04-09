import axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: { 'API-KEY': '6ff05f69-0a38-46af-a52a-54d6b964352c' },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then((response) => response.data);
  },
};
