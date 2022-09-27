import {axiosService} from "./axiosService";
import {urls} from "../configs";

const postsServices = {
    getAll: (id) => axiosService.get(`${urls.posts}/${id}`)
}

export {
    postsServices
}