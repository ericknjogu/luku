import { requiredUser } from "@/hooks/requiredUser";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

export default async function OrdersPage() {
  await requiredUser();
  return <div>OrdersPage</div>;
}
