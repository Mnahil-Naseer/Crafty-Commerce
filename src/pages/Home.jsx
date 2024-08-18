import { useContext, useState, useEffect } from "react";
import { ProductContext } from "../contexts/ProductContext";
import Product from '../components/Product';
import Hero from '../components/Hero';
import CategoryFilter from '../components/CategoryFilter';
import { MdViewList } from "react-icons/md";
import { IoGridSharp } from "react-icons/io5";
import { MdStarRate } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { FaFilter } from "react-icons/fa6";

const Home = () => {
  const { products } = useContext(ProductContext);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState('');
  const [selectedRating, setSelectedRating] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [view, setView] = useState('grid'); // 'grid' or 'list'
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    const filterProductsByCategoryAndSearch = (item) => {
      const matchesCategory = !selectedCategory || item.category === selectedCategory;
      const matchesSubcategory = !selectedSubcategory || item.subcategory === selectedSubcategory;

      // Convert rating from string to number
      const itemRating = parseFloat(item.rating);
      const parsedSelectedRating = parseInt(selectedRating, 10);
      const matchesRating = !selectedRating || (!isNaN(itemRating) && itemRating >= parsedSelectedRating);

      const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSubcategory && matchesRating && matchesSearch;
    };

    const newFilteredProducts = products.filter(filterProductsByCategoryAndSearch);
    setFilteredProducts(newFilteredProducts);
  }, [products, selectedCategory, selectedSubcategory, selectedRating, searchQuery]);

  return (
    <div>
      <Hero />
      <div className="relative flex overflow-x-hidden bg-violet-500 text-white mt-2 mb-5">
        <div className="py-1 animate-marquee whitespace-nowrap">
          <span className="text-sm mx-4"> 📢📢📢 Welcome to <b className="text-black font-bold text-lg">Crafty Commerce</b> Online Shopping Store. Get <b className="text-red-700 font-bold text-lg">50%</b> discount on your 1st order with Free Delivery </span>
          <span className="text-sm mx-4"> 📢📢📢 Welcome to <b className="text-black font-bold text-lg">Crafty Commerce</b> Online Shopping Store. Get <b className="text-red-700 font-bold text-lg">50%</b> discount on your 1st order with Free Delivery </span>
          <span className="text-sm mx-4"> 📢📢📢 Welcome to <b className="text-black font-bold text-lg">Crafty Commerce</b> Online Shopping Store. Get <b className="text-red-700 font-bold text-lg">50%</b> discount on your 1st order with Free Delivery </span>
          <span className="text-sm mx-4"> 📢📢📢 Welcome to <b className="text-black font-bold text-lg">Crafty Commerce</b> Online Shopping Store. Get <b className="text-red-700 font-bold text-lg">50%</b> discount on your 1st order with Free Delivery </span>
          <span className="text-sm mx-4"> 📢📢📢 Welcome to <b className="text-black font-bold text-lg">Crafty Commerce</b> Online Shopping Store. Get <b className="text-red-700 font-bold text-lg">50%</b> discount on your 1st order with Free Delivery </span>
        </div>
      </div>
      <section id="Home" className="px-4 sm:px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="mt-6 lg:mt-28 mb-6">
            {/* Search Input */}
            <div className="flex items-center mb-6">
              <FaSearch className="text-2xl mr-2" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border rounded-lg p-2 w-full max-w-xs"
              />
            </div>
            {/* Category Filter */}
            <div className="flex items-center mb-6">
              <FaFilter className="text-xl mr-2" />
              <CategoryFilter
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
                selectedSubcategory={selectedSubcategory}
                onSubcategoryChange={setSelectedSubcategory}
                className="border rounded-lg p-2 w-full max-w-xs"
              />
            </div>
            {/* Rating Filter */}
            <div className="flex items-center mb-6">
              <MdStarRate className="text-xl mr-2" />
              <select
                value={selectedRating}
                onChange={(e) => setSelectedRating(e.target.value)}
                className="border rounded-lg p-2 w-full max-w-xs"
              >
                <option value="">All Ratings</option>
                <option value="1">1 Star & Up</option>
                <option value="2">2 Stars & Up</option>
                <option value="3">3 Stars & Up</option>
                <option value="4">4 Stars & Up</option>
                <option value="5">5 Stars</option>
              </select>
            </div>
          </div>
          <div className="flex-1">
            {/* View Options */}
            <div className="flex justify-end mb-4">
              <button
                className={`p-2 border rounded mx-1 ${view === 'grid' ? 'bg-gray-200' : ''}`}
                onClick={() => setView('grid')}
              >
                <IoGridSharp />
              </button>
              <button
                className={`p-2 border rounded mx-1 ${view === 'list' ? 'bg-gray-200' : ''}`}
                onClick={() => setView('list')}
              >
                <MdViewList />
              </button>
            </div>
            <div className={`grid gap-4 ${view === 'grid' ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-9' : ''}`}>
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <div key={product.id} className={view === 'list' ? 'flex flex-col md:flex-row items-start mb-4' : ''}>
                    <Product product={product} />
                  </div>
                ))
              ) : (
                <p>No products available.</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
