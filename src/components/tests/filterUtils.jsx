const filteredCategories = (categories, filter) => {
  return categories.filter((category) =>
    category.name.toLowerCase().includes(filter.toLowerCase())
  );
};

export default filteredCategories;
