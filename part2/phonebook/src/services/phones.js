import axios from 'axios'

const baseUrl = 'https://phonebook-y9ep.onrender.com/api/persons'

const getAll = () => {
    return axios.get(baseUrl)
}

const create = newObject => {
    return axios.post(baseUrl, newObject)
}

const deletePhone = id => {
    return axios.delete(`${baseUrl}/${id}`)
}

/*const update = (id, newObject) => {
    return axios.put(`${baseUrl}/${id}`, newObject)
}*/

export default {
    create: create,
    getAll: getAll,
    delete: deletePhone,
    //update: update
}