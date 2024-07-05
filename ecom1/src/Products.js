import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import '../App.css';

const products = [
  { id: 1, name: 'Product 1', image: 'https://via.placeholder.com/150', price: 1999.99, description: 'Description for product 1' },
  { id: 2, name: 'Product 2', image: 'https://via.placeholder.com/150', price: 4995.99, description: 'Description for product 2' },
  { id: 3, name: 'Product 3', image: 'https://via.placeholder.com/150', price: 190.99, description: 'Description for product 3' },
];

const Products = () => {
  const { addItemToCart } = useContext(CartContext);

  return (
    <div>
      <h2>Products</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: ₹{product.price}</p>
            <button onClick={() => addItemToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
