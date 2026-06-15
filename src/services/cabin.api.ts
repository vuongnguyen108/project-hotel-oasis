import axios from "axios";
import type { Cabin } from "../type/cabin/Cabin.type";
import { api } from "./api";

const API_URL = 'https://the-wild-oasis-api.vercel.app/api'

export const getCabinApi = async (): Promise<Cabin> => {
    const res = await axios.get(`${API_URL}/cabins`);
    return res.data;
}

export const uploadCabinImageApi = async (
    file: File,
    onProgress?: (percent: number) => void
) => {
    //Nguyên tắc khi đẩy file lên - begin
    const formData = new FormData();
    formData.append('file', file);
    // end

    const res = await api.post('/cabins/upload', formData, {
        onUploadProgress: (e) => {
            const percent = Math.round((e.loaded * 100) / (e.total || 1));
            console.log(percent, 'percent');
            console.log(e.loaded, e.total, 'xxxxxxxxxxxx');
            onProgress?.(percent)
        },
    })

    return res.data; // trả lại URL
}