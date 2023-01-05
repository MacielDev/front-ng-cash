import { useApi } from "./useApi"



export const useAuth = () => ({
  validateToken: async (token: string) => { 
    const response = await useApi.post("/ajustar a url de acordo com a api", { token });
    return response.data;
  },
  login: async (email: string, password: string) => {
    const response = await useApi.post("/ajustar a url de acordo com a api", { email, password })
    return response.data;
  },
  logout: async () => {
    const response = await useApi.post("/Ajustar a url de acordo com a api");
    return response.data;
  }
})