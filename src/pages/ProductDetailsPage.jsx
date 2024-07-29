import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';

const ProductDetailsPage = ({ products }) => {
  const { addToCart } = useContext(CartContext);
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  const { image, title, price, rating, description } = product;

  return (
    <div className="container mx-auto p-4">
      <div className="flex">
        <img className="w-1/2 h-auto object-cover" src={image} alt={title} />
        <div className="w-1/2 pl-4">
          <h2 className="text-2xl font-semibold mb-4">{title}</h2>
          <p className="text-gray-700 mb-4">{description}</p>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">${price}</h3>
            <h3 className="text-sm font-semibold">{rating}⭐</h3>
          </div>
          <button
            onClick={() => addToCart(product)}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
