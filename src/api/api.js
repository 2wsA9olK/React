import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "3af3ae65-7024-4265-9075-ff474de25fe6"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            });
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`${userId}`)
    },
    getProfile(userId){
        return instance.get(`profile/` + userId);
    }
};

export const authAPI = {
    me(){
        return instance.get(`auth/me`);
    }
};
