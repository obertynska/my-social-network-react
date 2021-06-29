import axios from "axios";

const BASE_URL = "https://social-network.samuraijs.com/api/1.0",
    API_KEY = "fa51ce67-4abd-43d0-b84d-a4c98bf7038a"

const instance = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
    headers: {
        "API-KEY": API_KEY
    }
})


export const usersAPI = {
    getUsers(pageNumber, usersPerPage) {

        return instance.get(`/users?page=${pageNumber}&count=${usersPerPage}`)
            .then(response => response.data)
    }
}

export const followAPI = {
    toggleIsFollowed(id, status) {
        let method;

        if (status === 'follow') {
            method = 'post'
        }
        if (status === 'unfollow') {
            method = 'delete'
        }

        return instance[method](`/follow/${id}`).then(response => response.data)

    }
}

export const profileAPI = {
    getProfileInfo(userId) {
        return instance.get(`/profile/${userId}`).then(response => response.data)
    },
    getUserStatus(userId) {
        return instance.get(`/profile/status/${userId}`).then(response => response.data)
    },
    updateUserStatus(status){
        return instance.put(`/profile/status`, { status }).then(response => response.data)
    }
}

export const authAPI = {
    auth() {
        return instance.get('/auth/me').then(response => response.data)
    },
    login(formData={}){
        return instance.post('/auth/login', formData).then(response => response.data)
    },
    logout(){
        return instance.delete('/auth/login').then(response => response.data)
    }
}