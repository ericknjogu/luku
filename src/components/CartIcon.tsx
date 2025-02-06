import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function CartIcon() {
  return (
    <Link href={"/cart"} className="group relative">
      <ShoppingBag className="w-5 h-5 group-hover:text-darkColor hoverEffect" />
      <span className="absolute -top-2 -right-1 w-4 h-4 bg-darkColor text-white text-xs  rounded-full font-semibold flex items-center justify-center">
        0
      </span>
    </Link>
  );
}
