import axios from "axios";
import type { LoginPayload, RegisterPayload } from "../type/authen/auth.type";
import type { User } from "../store/useAuthStore";

const API_URL = 'https://the-wild-oasis-api.vercel.app/api'

export const registerApi = async (data:RegisterPayload) => {
    const res = await axios.post(`${API_URL}/auth/admin/register`, data);
    return res.data;
}

export const loginApi = async (data:LoginPayload) => {
    const res = await axios.post<{access_token:string, user:User}>(`${API_URL}/auth/admin/login`, data);
    return res.data;
}