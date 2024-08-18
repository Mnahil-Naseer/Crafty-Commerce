import { createContext, useState, useEffect } from "react";
import { localProducts } from "../components/LocalProducts";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(localProducts); 
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};
export default ProductProvider
