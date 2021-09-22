import axios, { Method } from "axios";

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