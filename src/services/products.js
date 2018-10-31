import Http from './http';

export const create = ({ product_name, product_type, product_description }) => Http.post('/products', { firstName, lastName });

export const getAllProducts = (page = 0, extraParams = {}) => {
  const params = { page, ...extraParams }; 
  
  return Http.get('/user', { params });
};
