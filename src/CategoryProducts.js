import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useParams } from "react-router";

function CategoryProducts(params) {
  const [data, setData] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/category/${category}`)
      .then((response) => {
        setData(response.data.products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [category]);

  return (
    <div>
      {data !== null ? (
        <div className="flex flex-wrap">
          {data.map((itm) => {
            return <ProductCard key={itm.id} prd={itm} />;
          })}
        </div>
      ) : (
        <div>
          <h1>Loading</h1>
        </div>
      )}
    </div>
  );
}

export default CategoryProducts;
