import axios from "axios";

const getData = (url='') => {
    return axios.get(`http://localhost:3001/${url}`)
};

const postData = (payload, url='') => {
    return axios.post(`http://localhost:3001/${url}`, payload)
};

const updateData = (payload, url='') => {
    return axios.put(`http://localhost:3001/${url}`, payload)
};

const deleteData = (payload, url='') => {
    return axios.delete(`http://localhost:3001/${url}`, {data: payload})
};

export {getData, postData, updateData, deleteData};