import axios, { Method } from "axios";

export const baseUrl = process.env.REACT_APP_API_URL;

export const getClassMember = (method: Method, url: string) => {
    return axios({
        method: method,
        url: url,
        headers: {},
        data: {}
    })
    .then((res) => {return res.data})
    .catch((err) => {console.log(err)})
}