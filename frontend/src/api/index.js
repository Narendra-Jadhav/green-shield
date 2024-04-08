import axios from 'axios';

const url = 'http://localhost:3000/products';

export const fetch = () => axios.get(url).then((res) => {
    return res;
});

export const createProduct = (newProduct) => axios.post(url, newProduct);