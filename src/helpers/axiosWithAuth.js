import axios from "axios";

const axiosWithAuth = () => {
    const token = window.localStorage.getItem('token')
    return axios.create({
        header:{
            Authorization: token,
            baseURL:'http://localhost:5000',
        }
    })
}

export default axiosWithAuth;

//Task List:
//Build and export a function used to send in our authorization token