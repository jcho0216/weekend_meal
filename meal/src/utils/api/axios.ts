import axios, { Method } from "axios";

export const request = (method: Method, url: string) => {
    return axios({
        method,
        url: url,
        headers: {},
        data: {}
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
}