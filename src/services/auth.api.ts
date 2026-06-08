import axios from "axios";
import type { RegisterPayload } from "../type/authen/auth.type";

const API_URL = 'https://the-wild-oasis-api.vercel.app/api'

export const registerApi = async (data:RegisterPayload) => {
    const res = await axios.post(`${API_URL}/auth/admin/register`, data);
    return res.data;
}