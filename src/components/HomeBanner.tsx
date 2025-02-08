import React from "react";

import Title from "./Title";

export default function HomeBanner() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Title className="text-center text-4xl md:text-5xl uppercase bold">
        Best Clothing Store
      </Title>
      <p className="text-center text-xs md:text-sm text-lightColor/80 font-medium max-w-[480px]">
        Find everything you need at the best price and shop the best fashion and
        lifestyle products.
      </p>
    </div>
  );
}
