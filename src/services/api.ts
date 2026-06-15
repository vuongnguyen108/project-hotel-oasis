// config axios interceptor để gắn token vào data trước khi request(call API)

import axios from "axios";

export const api = axios.create({
    baseURL: "https://the-wild-oasis-api.vercel.app/api"
})

api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token")
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})