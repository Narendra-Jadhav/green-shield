import axios from 'axios';

const url = 'http://localhost:3000/products';

export const fetchProducts = () => axios.get(url).then((res) => {
    return res.data;
});

export const createProduct = (newProduct) => axios.post(url, newProduct);