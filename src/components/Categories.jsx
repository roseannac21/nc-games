import axios from "axios";
import React, { useEffect, useState } from "react";
import Category from "./Category";
import ErrorHandler from "./ErrorHandler";

const Categories = ({ errState, setErrState }) => {
  const [categoryList, setCategoryList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://nc-games-no2.onrender.com/api/categories")
      .then(({ data }) => {
        setErrState(false);
        setCategoryList(data.categories);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setErrState(true);
      });
  }, []);

  if (isLoading) {
    return <p>Loading categories...</p>;
  } else if (errState) {
    return (
      <>
        <ErrorHandler />
      </>
    );
  }

  return (
    <section>
      <h3>Filter By:</h3>
      <ul>
        {categoryList.map((category, index) => {
          return (
            <Category
              key={index}
              category={category}
              setErrState={setErrState}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Categories;
