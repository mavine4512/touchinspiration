import axios from "axios"

import {BaseUrl as baseUrl} from './baseUrl'

const fetchUSer = () => {
    return axios.get(baseUrl + '/users')
}

const updateUser = (id,data) => {
    return axios.patch( baseUrl+'/users/' + id, data)
}

const network = (url, params, method, body, successCallback, errorCallback) => {
    let param
    if(params !== null){
        param = params
    } else {
        param = ''
    }
    let requestParams = '/' + url + '/' + param
    return axios.request({url: baseUrl + requestParams, method: method, data: body }).then(response => {
        successCallback(response)
    }).then(function (e) {
        errorCallback(e)
    })
}

export { fetchUSer,updateUser,network }
