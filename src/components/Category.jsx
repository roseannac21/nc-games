import React from "react";
import { Link } from "react-router-dom";

const Category = ({category}) => {
    return (
        <Link to={`/reviews?category=${category.slug}`}>
        <li id="category-li">
            <p>Filter by: </p>
            {category.slug}
        </li>
        </Link>
      );
}

export default Category