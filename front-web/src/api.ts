import axios from "axios";

const API_URL = 'https://poletto-sds2.herokuapp.com'
export function  fetchProducts () {
    return axios(`${API_URL}/products`)
}