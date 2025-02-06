import React from "react";
import HeaderMenu from "./HeaderMenu";
import Logo from "./Logo";

export default function Header() {
  return (
    <div>
      <HeaderMenu />
      <Logo />
      <div>Right Side</div>
    </div>
  );
}
