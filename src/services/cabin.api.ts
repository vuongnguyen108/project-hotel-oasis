import axios from "axios";
import type { Cabin } from "../type/cabin/Cabin.type";

const API_URL = 'https://the-wild-oasis-api.vercel.app/api'

export const getCabinApi = async ():Promise<Cabin> => {
    const res = await axios.get(`${API_URL}/cabins`);
    return res.data;
}