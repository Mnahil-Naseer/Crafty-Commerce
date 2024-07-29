import React, { useContext, useState } from 'react';
import { CartContext } from '../contexts/CartContext';
import { useNavigate } from 'react-router-dom';

const BillingPage = () => {
  const { cart, total } = useContext(CartContext);
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('cash');
  const [accountNumber, setAccountNumber] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/');
    alert("✅ Your Order Has Been Placed Successfully. Thank you for Ordering.^_^");
  };

  const handleBackToShopping = () => {
    navigate('/');
  };

  return (
    <div className="container  mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-6">Billing Information</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Country*</label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded"
                placeholder="Enter your country"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">City*</label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded"
                placeholder="Enter your city"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Address*</label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded"
                placeholder="Enter your address"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Postal Code*</label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded"
                placeholder="Enter your postal code"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email*</label>
              <input
                type="email"
                className="w-full px-3 py-2 border rounded"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Payment Method*</label>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="cash"
                  name="paymentMethod"
                  value="cash"
                  checked={paymentMethod === 'cash'}
                  onChange={() => setPaymentMethod('cash')}
                  className="mr-2"
                />
                <label htmlFor="cash" className="mr-4">Payment on Cash</label>
                <input
                  type="radio"
                  id="card"
                  name="paymentMethod"
                  value="card"
                  checked={paymentMethod === 'card'}
                  onChange={() => setPaymentMethod('card')}
                  className="mr-2"
                />
                <label htmlFor="card">Payment on Card</label>
              </div>
            </div>
            {paymentMethod === 'card' && (
              <div className="mb-4">
                <label className="block text-gray-700">Account Number*</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded"
                  placeholder="Enter your account number"
                  value={accountNumber}
                  onChange={(e) => setAccountNumber(e.target.value)}
                  required
                />
              </div>
            )}
            <div className="mb-4">
              <label className="block text-gray-700">Additional Information</label>
              <textarea
                className="w-full px-3 py-2 border rounded"
                placeholder="Enter any additional information"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-violet-600 text-white px-14 py-2 rounded"
            >
              Place Order
            </button>
          </form>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-5">Your Order</h2>
          {cart.map((item) => (
            <div key={item.id} className="flex items-center py-4 rounded-xl bg-gray-200 mb-4">
              <img src={item.image} alt={item.title} className="w-24 h-24 object-cover mr-4" />
              <div className='flex-grow'>
                <p className="font-semibold">{item.title}</p>
                <p>{item.amount} x ${item.price.toFixed(2)}</p>
              </div>
              <div className='text-right'>
                <p>${(item.amount * item.price).toFixed(2)}</p>
              </div>
            </div>
          ))}
          <div className="flex justify-between items-center bg-gray-200 p-4 rounded-xl">
            <div className="text-lg font-semibold">Total: ${parseFloat(total).toFixed(2)}</div>
          </div>
          <div className="text-center  mt-6">
        <button
          onClick={handleBackToShopping}
          className="bg-violet-600 text-white px-14 py-2 rounded"
        >
          Back to Shopping
        </button>
      </div>
        </div>
      </div>
      
    </div>
  );
};

export default BillingPage;
