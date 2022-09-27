import {axiosService} from "./axiosService";
import {urls} from "../configs";

const commentsServices = {
    getAll: () => axiosService.get(urls.comments)
}

export {
    commentsServices
}