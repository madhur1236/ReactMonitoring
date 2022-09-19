import axiosAPI from '../AxiosAPI';

export const getUsersList = () => {
    return axiosAPI.get('/users');
}