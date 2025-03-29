import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export default function NoProductsAvailable({
  selectedTab,
  className,
}: {
  selectedTab: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center py-10",
        className
      )}
    >
      <motion.div>
        <h2>No products Available</h2>
      </motion.div>
      <motion.p>
        We&apos;re sorry, there are no products available for{" "}
        <span className="text-base font-semibold text-darkColor">
          {selectedTab}
        </span>{" "}
        at the moment.
      </motion.p>
    </div>
  );
}
