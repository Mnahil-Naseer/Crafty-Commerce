import { Link } from "react-router-dom";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import landing1 from "../assets/img/landingone.jpg";
import landing2 from "../assets/img/scroll.jpg";
import landing3 from '../assets/img/landingthree.jpg';
import landing4 from '../assets/img/screen.jpg';
import landing5 from '../assets/img/landing5.jpg';
import landing6 from "../assets/img/landing6.jpg";
import landing from "../assets/img/landing1.jpg";
const images = [landing, landing1, landing2, landing3, landing4, landing5, landing6];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  const textControls = useAnimation();
  const imageControls = useAnimation();

  const textInView = useInView(textRef, { once: true });
  const imageInView = useInView(imageRef, { once: true });

  useEffect(() => {
    if (textInView) {
      textControls.start("visible");
    }
    if (imageInView) {
      imageControls.start("visible");
    }
  }, [textInView, imageInView, textControls, imageControls]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const scrollToHero = () => {
    document.getElementById("Home").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.section id="Hero"
      className="h-[700px] sm:h-[650px] bg-indigo-100 bg-no-repeat bg-cover bg-center py-20 "
      style={{ backgroundImage: `url(${images[currentImage]})`}}
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <div className="container mx-auto flex flex-col-reverse sm:flex-row justify-between items-center h-full">
        {/* text */}
        <motion.div
          className="flex flex-col justify-center w-full sm:w-1/2 p-4 sm:p-0"
          ref={textRef}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={textControls}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="font-semibold flex items-center uppercase">
            <div className="w-10 h-[2px] mr-3 bg-red-700"></div>Hot Trend
          </div>
          <h1 className="uppercase text-[30px] sm:text-[40px] md:text-[55px] leading-tight font-semibold mb-4 text-black">
            Fresh Fashion Finds<br />
            <span className="font-light text-gray-800">new collection</span>
          </h1>
          <Link
            to={'/'}
            onClick={scrollToHero}
            className='self-start uppercase font-semibold border-b-2 border-red-700 text-red-700 hover:text-red-500 animate-bounce transition'
          >
            Discover More
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
