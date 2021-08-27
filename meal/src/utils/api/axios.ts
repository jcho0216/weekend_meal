import axios, { Method } from "axios";

export const request = (method: Method, url: string) => {
    return axios({
        method,
        url: url,
        headers: {
            'Date': "Fri, 27 Aug 2021 12:20:30 GMT",
            'apigw-requestid': 'Eudf5gnZIE0EMJg='
            

            
        },
        data: {}
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
}