import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin, FaPinterest } from "react-icons/fa";
import bg from '../assets/img/Elegant Online Shopping Logo Template.jpg';
import hero from '../assets/img/bghero.jpg';

const Footer = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const heroRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    alert("Thank you for your message. We will get back to you soon.");
    document.getElementById("Hero").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer id="Footer" className="relative py-9 mt-14 bg-gray-600 text-black">
      <div className="absolute inset-0">
        <img src={hero} alt="Background" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 opacity-40"></div>
      </div>
      <div className="relative container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/4 mt-16 md:mb-0">
          <img src={bg} alt="Logo" className="h-20 mb-4 rounded-full"/>
          <h4 className="text-lg">
            <span className="font-bold flex"><p className="text-xl mr-7">🗺</p>  Shop 009A, Level 4, Block A, Demo Park, Ottawa</span>
          </h4><br/>
          <h4 className="text-lg">
            <span className="font-bold flex"><p className="text-xl mr-7">📞</p>  +1-613-555-0182</span>
          </h4><br/>
          <h4 className="text-lg ">
            <span className="font-bold flex "> <p className="text-xl mr-7">📧</p> contact@demo.com</span>
          </h4>
        </div>
        <div className="w-full md:w-1/4 justify-center mt-28 md:mb-0">
          <h2 className="font-bold text-xl mb-4 my-4">Follow Us</h2>
          <div className="flex space-x-6 mt-6 mb-4">
            <Link to="#" className="hover:text-violet-400"><FaFacebook className="text-2xl" /></Link>
            <Link to="#" className="hover:text-violet-400"><FaInstagram className="text-2xl" /></Link>
            <Link to="#" className="hover:text-violet-400"><FaLinkedin className="text-2xl" /></Link>
            <Link to="#" className="hover:text-violet-400"><FaPinterest className="text-2xl" /></Link>
          </div>
        </div>
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h2 className="font-bold text-xl mb-4">Get in Touch</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Your name" className="p-2 w-full border border-gray-300 rounded-md mb-4 text-black" required />
            <input type="email" placeholder="Your email address" className="p-2 w-full border border-gray-300 rounded-md mb-4 text-black" required />
            <textarea placeholder="Your message" className="p-2 w-full border border-gray-300 rounded-md mb-4 text-black" required />
            <button type="submit" className="bg-violet-500 text-white p-2 rounded-md w-full">Submit</button>
          </form>
        </div>
      </div>
      <div className="relative container mx-auto text-center mt-6">
        <p className="font-bold">
          Copyright &copy; MN's 2023. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
