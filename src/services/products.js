import Http from './Http.js';

export const create = ({ product_name, product_type, product_description }) => Http.post('/products', { product_name, product_type, product_description });

export const updateProduct = ({ id, product_name, product_type, product_description }) => { 
  Http.put(`/products/${id}`, { product_name, product_type, product_description })
};

export const getAllProducts = (page = 0, extraParams = {}) => {
  const params = { page, ...extraParams }; 
  return Http.get('/products', { params });
};

export const deleteProduct = (productId) => {
  return Http.delete(`/products/${productId}`)
}
