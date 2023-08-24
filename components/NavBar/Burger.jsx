"use client";

import { useEffect, useState } from "react";

const Burger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    console.log("click");
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const burger = document.getElementById("burger");

    burger.onclick = () => {
      if (!burger.classList.contains("active") && !burger.classList.contains("reverse")) {
        burger.classList.add("active");
      } else if (burger.classList.contains("active")) {
        burger.classList.remove("active");
        burger.classList.add("reverse");
      } else if (burger.classList.contains("reverse")) {
        burger.classList.add("active");
        burger.classList.remove("reverse");
      }
    };
  }, []);

  return (
    <div id="burger">
      <div className="blade" />
      <div className="blade" />
      <div className="blade" />
    </div>
  );
};

export default Burger;
