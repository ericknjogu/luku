"use client";
import React, { useEffect, useState } from "react";
import HomeTabbar from "./HomeTabbar";
import { productType } from "@/constants";
import { client } from "@/sanity/lib/client";
import { Product } from "../../sanity.types";
import ProductCard from "./ProductCard";

export default function ProductsGrid() {
  const [selectedTab, setSelectedTab] = useState(productType[0]?.title || "");

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const query = `*[_type == "product" && variant == $variant] | order(name asc)`;

  const params = { variant: selectedTab.toLocaleLowerCase() };

  console.log(params);
  console.log(query);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const response = await client.fetch(query, params).catch(console.error);
      setProducts(await response);
      setLoading(false);
    }
    fetchData();
  }, [selectedTab]);

  return (
    <div className="mt-10 flex flex-col items-center">
      <HomeTabbar selectedTab={selectedTab} onTabSelect={setSelectedTab} />
      {loading ? (
        <div>Loading</div>
      ) : products && products?.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">
          {products?.map((product: Product) => (
            <div key={product._id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      ) : (
        <div>No products found</div>
      )}
      x
    </div>
  );
}
