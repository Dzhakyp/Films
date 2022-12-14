import React from "react";
import navElems from "../NavElems";
import NavbarItem from "../NavbarItem";
export default function NavbarList() {
  const newBar = navElems.map((item) => <NavbarItem key={item.id} {...item} />);
  return <ul className="navbar">{newBar}</ul>;
}
