import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { BsPlus, BsEyeFill } from 'react-icons/bs';
import { CartContext } from '../contexts/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { id, image, category, title, price, rating, description } = product;

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition hover:shadow-slate-400 hover:shadow-lg hover:-skew-x-2">
        <div className="w-full h-full flex justify-center items-center">
          {/* Image */}
          <div className="w-[200px] mx-auto flex justify-center items-center ">
            <img
              className="max-h-[180px] group-hover:scale-110 transition duration-300 hover:shadow-lg hover:shadow- hover:-skew-y-2"
              src={image}
              alt={title}
            />
          </div>
        </div>
        {/* Buttons */}
        <div className="absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col justify-center items-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button onClick={() => addToCart(product)}>
            <div className="flex justify-center items-center text-white w-12 h-12 bg-red-500">
              <BsPlus className="text-3xl" />
            </div>
          </button>
          <button
            onClick={handleModalOpen}
            className="w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl"
          >
            <BsEyeFill className="text-xl" />
          </button>
        </div>
      </div>
      {/* Category, Title & Price */}
      <div>
        <div className="text-sm capitalize text-gray-500 mb-1">{category}</div>
        <Link to={`/product/${id}`}>
          <h2 className="font-semibold mb-1">{title}</h2>
        </Link>
        <div className="flex space-x-24 mt-2">
          <h2 className="font-semibold">${price}</h2>
          <h2 className="font-semibold text-xs mt-1">{rating}⭐</h2>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50 p-4">
          <div className="bg-violet-200 p-4 sm:p-6 md:p-8 lg:p-10 rounded-lg shadow-lg max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg w-full relative">
            <button
              onClick={handleModalClose}
              className="absolute top-4 right-4 text-lg text-red-300 hover:text-red-700 transition"
            >
              <span className="text-3xl">&times;</span>
            </button>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">{title}</h2>
            <img className="w-26 h-36 sm:h-48 md:h-56 lg:h-64 object-cover mb-4" src={image} alt={title} />
            <p className="text-gray-700 mb-4 text-sm sm:text-base">{description}</p>
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <h3 className="text-lg font-semibold">${price}</h3>
              <h3 className="text-sm font-semibold">{rating}⭐</h3>
            </div>
            <button
              onClick={() => {
                addToCart(product);
                handleModalClose();
              }}
              className="mt-4 bg-violet-300 hover:bg-violet-500 text-white px-4 py-2 rounded shadow-xl hover:shadow-gray-600 "
            >
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
