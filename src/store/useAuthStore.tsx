import { create } from "zustand";

export interface User {
    id: string;
    fullName: string;
    email: string;
    role: string;
}

interface AuthState {
    user: User | null;
    token: string | null;
    setLogin: (user:User, token:string) => void;
    setLogout: () => void
}

const storedUser  = localStorage.getItem("user")
const storedToken  = localStorage.getItem("token")

export const useAuthStore = create<AuthState>((set) => ({
    user: storedUser ? JSON.parse(storedUser) : null,
    token: storedToken || null,
    setLogin: (user, token) => {
        localStorage.setItem("user", JSON.stringify(user))
        localStorage.setItem("user", JSON.stringify(token))
        set({user, token})
    },
    setLogout: () => {
        localStorage.removeItem("user")
        localStorage.removeItem("user")
        set({})
    },
}))