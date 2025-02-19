import { productType } from "@/constants";
import { Repeat } from "lucide-react";
import React from "react";

interface Props {
  onTabSelect: (tab: string) => void;
  selectedTab: string;
}

export default function HomeTabbar({ selectedTab, onTabSelect }: Props) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-2 text-sm font-semibold">
        {productType?.map((item) => (
          <button
            key={item.title}
            onClick={() => onTabSelect(item.title)}
            className={`border border-darkColor rounded-full hover:bg-darkColor hover:text-white hoverEffect px-4 py-1.5 md:px-6 md:py-2 ${
              selectedTab === item.title ?
                "bg-darkColor text-white"
              : "text-darkColor"
            }`}>
            {item.title}
          </button>
        ))}
      </div>
      <button className="border border-darkColor rounded-full hover:bg-darkColor hover:text-white hoverEffect p-2">
        <Repeat className="w-5 h-5" />
      </button>
    </div>
  );
}
