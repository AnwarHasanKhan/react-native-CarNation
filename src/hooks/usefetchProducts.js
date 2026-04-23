import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import api from '../services/Api';

function usefetchProducts() {
  const [product, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    api
      .get('/products')
      .then(response => {
        setProducts(response.data.products);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching products:', err);
        setError('Failed to load products');
        setLoading(false);
      });
  }, []);

  console.log('Console from usefetch2:', product);
  return product;
}

export default usefetchProducts;
