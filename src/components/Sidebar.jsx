import { useContext } from "react";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import CartItem from "./CartItem";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, itemAmount, total } = useContext(CartContext);
  const navigate = useNavigate();
  
  const handleCheckout = () => {
    handleClose();
    navigate("/billing");
  };

  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full bg-violet-100 fixed top-0 h-full shadow-2xl md:w-[35vw] lg:w-[30vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-8 rounded-l-lg`}
    >
      <div className="flex items-center justify-between p-3 border-b border-violet-400">
        <div className="uppercase text-lg my-3 font-semibold text-violet-900">
          View Cart ({itemAmount})
        </div>
        <div
          onClick={handleClose}
          className="cursor-pointer w-8 h-8 flex justify-center items-center"
        >
          <IoMdArrowForward className="text-2xl text-violet-900" />
        </div>
      </div>
      <div className="flex flex-col gap-y-2 h-[50vh] md:h-[60vh] lg:h-[65vh] overflow-y-auto border-b border-violet-500">
        {cart.map((item) => {
          return (
            <div key={item.id} className="border-b py-2">
              <CartItem item={item} />
            </div>
          );
        })}
      </div>
      <div className="flex flex-col mt-2">
        <div className="flex justify-between items-center mb-4">
          {/* Total */}
          <div className="font-semibold text-violet-900">
            <span className="mr-2">Subtotal:</span> ${parseFloat(total).toFixed(2)}
          </div>
          {/* Clear Cart Button */}
          <div
            onClick={clearCart}
            className="cursor-pointer bg-red-500 text-white w-10 h-10 flex justify-center items-center text-xl rounded-full hover:bg-red-600 transition"
          >
            <FiTrash2 />
          </div>
        </div>
        <button
          onClick={handleCheckout}
          className="bg-violet-600 py-3 text-white font-medium rounded hover:bg-violet-700 transition w-full"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
