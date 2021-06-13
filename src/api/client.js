import {create} from 'apisauce';

const apiClient = create({
    baseURL: "https://ishan-portfolio-backend.herokuapp.com/api",
});

export default apiClient;
