
const CategoryFilter = ({
  selectedCategory,
  onCategoryChange,
  selectedSubcategory,
  onSubcategoryChange,
  className
}) => {
  const categories = [
    { name: 'Women Clothing', subcategories: ['Formal', 'Casual'] },
    { name: 'Men Clothing', subcategories: ['Formal', 'Casual'] },
    { name: 'Accessories', subcategories: ['Watches', 'Earrings', 'Necklaces', 'Rings'] },
  ];

  const handleCategoryChange = (e) => {
    onCategoryChange(e.target.value);
    onSubcategoryChange(''); // Reset subcategory when category changes
  };

  return (
    <div className=" flex-col" >
      <select
        value={selectedCategory}
        onChange={handleCategoryChange}
        className="border rounded-lg p-2 mb-6"
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category.name} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>
      <div >
      {selectedCategory && (
        <select
          value={selectedSubcategory}
          onChange={(e) => onSubcategoryChange(e.target.value)}
          className="border rounded-lg p-2 mb-6"
        >
          <option value="">All Subcategories</option>
          {categories
            .find((category) => category.name === selectedCategory)
            ?.subcategories.map((subcategory) => (
              <option key={subcategory} value={subcategory}>
                {subcategory}
              </option>
            ))}
        </select>
        
      )}
      </div>
    </div>
  );
};

export default CategoryFilter;
