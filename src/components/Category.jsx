import React from "react";
import { Link } from "react-router-dom";

const Category = ({category}) => {
    return (
        <li id="category-li">
            <p>Filter by: </p>
          <Link to={`/reviews?category=${category.slug}`}>
            {category.slug}
          </Link>
        </li>
      );
}

export default Category