import Axios from 'axios';

const url = 'http://localhost:3004/products';

export function getProducts() {
    // return Axios.get(URL,
    // {
    //   withCredentials: true,
    //   headers: {'Authorization': getToken()}
    // });

    return Axios.get(url);
}

export function saveProduct(item ) {
    const {id} = item;
    const putUrl = url + '/' + id;
    return Axios.put(putUrl, item);
} 