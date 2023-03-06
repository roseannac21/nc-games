import React from "react";
import { Link } from "react-router-dom";

const Category = ({ category }) => {
  const categoryName = category.slug;
  const capitalized = `${categoryName[0].toUpperCase()}${categoryName.slice(
    1
  )}`;
  return (
    <Link to={`/reviews?category=${category.slug}`}>
      <li id="category-li">
        <p>{capitalized}</p>
      </li>
    </Link>
  );
};

export default Category;
