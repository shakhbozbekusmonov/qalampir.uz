import axios from "axios";
import { API_PATH, TOKEN_NAME } from "../tools/constants";

export const api = axios.create({
    baseURL: API_PATH,
});

api.defaults.headers.common["Content-Type"] = "application/json";
api.defaults.headers.common["Authorization"] = localStorage.getItem(TOKEN_NAME);
