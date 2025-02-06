import React from "react";
import HeaderMenu from "./HeaderMenu";
import Logo from "./Logo";
import Container from "./Container";
import MobileMenu from "./MobileMenu";
import SearchBar from "./SearchBar";
import CartIcon from "./CartIcon";
import { Button } from "./ui/button";

export default function Header() {
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
          <div>
            <Button
              variant={"ghost"}
              className="text-sm font-semibold hover:text-darkColor hoverEffect">
              Login
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}
