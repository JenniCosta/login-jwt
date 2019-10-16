import axios from "axios";
import { getToken } from "./servicesAuth";

 const api = axios.create({
    // baseURL: "localhost:8080" // não sei qual url colocar 
 });

api.interceptors.request.use(async config => {
    // const token = getToken();
     if(token){
         config.headers.Authorization = `Bearer ${token}`;
    } return config;
 });

export default api;