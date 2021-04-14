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
  follow(userId) {
    return instance.post(`follow/${userId}`).then((response) => response.data);
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`).then((response) => response.data);
  },
};
export const profileAPI = {
  getUserProfile(userId) {
    return instance.get(`profile/${userId}`).then((response) => response.data);
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`).then((response) => response.data);
  },
  updateStatus(status) {
    return instance.put(`profile/status`, { status: status }).then((response) => response.data);
  },
};
export const authAPI = {
  me() {
    return instance.get(`auth/me`).then((response) => response.data);
  },
};

export const securityAPI = {
  //
};
