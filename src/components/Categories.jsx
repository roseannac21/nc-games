import axios from "axios";
import React, { useEffect, useState } from "react";
import Category from "./Category";

const Categories = () => {

    const [categoryList, setCategoryList] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        axios.get("https://nc-games-no2.onrender.com/api/categories")
        .then(({data}) => {
            setCategoryList(data.categories)
            setIsLoading(false)
        })
    }, [])

    if (isLoading) {
        return <p>Loading categories...</p>
    }

    return (
        <ul>
        {categoryList.map((category, index) => {
          return (
            <Category key={index} category={category} />
          );
        })}
      </ul>
    )
}

export default Categories;