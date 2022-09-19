import axios from "axios";
import {requestErrorHandler, requestInterceptor,responseErrorHandler, responseInterceptor} from './AxiosHelperMethods';

const baseURL = 'https://crudcrud.com/api/519dca70cb194f6f83a0941039acdf04';
const axiosAPI = axios.create({
    baseURL: baseURL,
});

axiosAPI.interceptors.request.use(requestInterceptor, requestErrorHandler);
axiosAPI.interceptors.response.use(responseInterceptor, responseErrorHandler);

export default axiosAPI;