import { axiosInstance } from "./axios-instance"

export const UtilServices = {
    getMenus: async () => {
        return axiosInstance.get('/api/app-config/menulist')
    }
}