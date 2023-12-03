import axios from "axios";

var BackendUrl = "http://localhost:8000/api/v1"
if (process.env.MODE === "PRODUCTION") {
    BackendUrl = "https://awdiz-backend-4.onrender.com/api/v1"
}

const api = axios.create({ baseURL: BackendUrl })

export default api;