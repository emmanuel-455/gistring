import axios from "axios";


// Fetching data from a server
export const axiosInstance = axios.create({
    baseURL: import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api",
    withCredentials: true, // to send cookies
});