"use client";
import React, { useEffect, useState } from "react";
import HomeTabbar from "./HomeTabbar";
import { productType } from "@/constants";
import { client } from "@/sanity/lib/client";

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
      ) : (
        products &&
        products.length > 0 &&
        products.map((product) => <p key={product?.id}>{product?.name}</p>)
      )}
    </div>
  );
}
