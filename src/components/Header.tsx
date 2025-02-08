import React from "react";
import HeaderMenu from "./HeaderMenu";
import Logo from "./Logo";
import Container from "./Container";
import MobileMenu from "./MobileMenu";
import SearchBar from "./SearchBar";
import CartIcon from "./CartIcon";
import { Button } from "./ui/button";
import { currentUser } from "@clerk/nextjs/server";
import { ClerkLoaded, SignedIn, SignInButton, UserButton } from "@clerk/nextjs";

import { ListOrdered } from "lucide-react";
import Link from "next/link";

export default async function Header() {
  const user = await currentUser();

  console.log("user", user);

  return (
    <header className="bg-white border-b border-b-gray-400 py-5">
      <Container className="flex items-center justify-between gap-7 text-lightColor">
        <HeaderMenu />
        <div className="w-auto md:w-1/3 flex items-center justify-center">
          <MobileMenu />
          <Logo>Luku</Logo>
        </div>

        <div className="w-auto md:w-1/3 flex items-center justify-center gap-5 ">
          <SearchBar />
          <CartIcon />
          <ClerkLoaded>
            <SignedIn>
              <Link href={"/orders"} className="group relative">
                <ListOrdered className="w-5 h-5 group-hover:text-darkColor hoverEffect" />
                <span className="absolute -top-2 -right-1 w-4 h-4 bg-darkColor text-white text-xs  rounded-full font-semibold flex items-center justify-center">
                  0
                </span>
              </Link>
              <UserButton />
            </SignedIn>
            {!user && (
              <SignInButton mode="modal">
                <Button
                  variant={"ghost"}
                  className="text-sm font-semibold hover:text-darkColor hoverEffect">
                  Login
                </Button>
              </SignInButton>
            )}
          </ClerkLoaded>
        </div>
      </Container>
    </header>
  );
}
