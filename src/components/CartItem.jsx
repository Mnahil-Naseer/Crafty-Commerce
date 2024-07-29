import { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { CartContext } from "../contexts/CartContext";

const CartItem = ({ item }) => {
  const { removeFromCart, increaseAmount, decreaseAmount } = useContext(CartContext);
  const { id, title, image, price, amount } = item;

  return (
    <div className="flex flex-col md:flex-row gap-x-4 py-4 border-b border-gray-300 w-full font-light text-gray-700">
      <div className="w-full md:w-auto min-h-[150px] flex items-center gap-x-4">
        {/* Image */}
        <Link to={`/product/${id}`} className="bg-gray-100 p-2 rounded">
          <img className="max-w-[100px] rounded-md" src={image} alt={title} />
        </Link>
      </div>
      <div className="w-full flex flex-col">
        {/* Title and Remove Icon */}
        <div className="flex justify-between mb-2">
          <Link
            to={`/product/${id}`}
            className="text-sm uppercase font-medium text-blue-600 hover:underline"
          >
            {title}
          </Link>
          <div
            onClick={() => removeFromCart(id)}
            className="text-xl cursor-pointer"
          >
            <IoMdClose className="text-gray-500 hover:text-red-600 transition" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-x-2 h-[40px] text-sm">
          {/* Quantity */}
          <div className="flex flex-1 max-w-[100px] items-center h-full border text-blue-600 font-medium">
            <div
              onClick={() => decreaseAmount(id)}
              className="h-full flex-1 flex justify-center items-center cursor-pointer"
            >
              <IoMdRemove />
            </div>
            <div className="h-full flex justify-center items-center px-3">
              {amount}
            </div>
            <div
              onClick={() => increaseAmount(id)}
              className="h-full flex flex-1 justify-center items-center cursor-pointer"
            >
              <IoMdAdd />
            </div>
          </div>
          {/* Item Price */}
          <div className="flex flex-1 justify-around items-center text-gray-700">
            ${price.toFixed(2)}
          </div>
          {/* Final Price */}
          <div className="flex flex-1 justify-end items-center text-gray-900 font-semibold">
            {`$ ${(price * amount).toFixed(2)}`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
