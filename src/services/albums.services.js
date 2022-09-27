import {axiosService} from "./axiosService";
import {urls} from "../configs";

const albumsServices = {
    getAll: () => axiosService.get(urls.albums)
}

export {
    albumsServices
}