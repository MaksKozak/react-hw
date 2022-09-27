import {axiosService} from "./axiosService";
import {urls} from "../configs";

const todosServices = {
    getAll: () => axiosService.get(urls.todos)
}

export {
    todosServices
}