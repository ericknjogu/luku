import React from "react";
import HeaderMenu from "./HeaderMenu";
import Logo from "./Logo";
import Container from "./Container";

export default function Header() {
  return (
    <header className="bg-white border-b border-b-gray-400 py-5">
      <Container className="flex items-center justify-between gap-7 text-lightColor">
        <HeaderMenu />
        <Logo />
        <div>Right Side</div>
      </Container>
    </header>
  );
}
