
import { environment } from "src/environments/environment";

export const constants = {
    CURRENT_TOKEN: 'CURRENT_TOKEN',
}

const apiUrl = environment.apiUrl;

export const apiEndpoint = {
    AuthEndpoint: {
        login: `${apiUrl}/login`,
        logout: `${apiUrl}/logout`,
        loggedUser: `${apiUrl}/user`,
    },
    TodoEndpoint: {
        getAllTodo:`${apiUrl}/todo`,
        addTodo:`${apiUrl}/todo`,
        updateTodo:`${apiUrl}/todo`,
        destroyTodo:`${apiUrl}/todo`,
    }
}