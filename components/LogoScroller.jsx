"use client";
import { useEffect, useState, useRef, use } from "react";
import Joomla from "@components/Logos/Joomla";
import WordPress from "@components/Logos/WordPress";
import Basecamp from "@components/Logos/Basecamp";
import Shopify from "@components/Logos/Shopify";
import WooCommerce from "@components/Logos/WooCommerce";
import React from "@components/Logos/React";
import { nunito, lexend_deca } from "@app/fonts";

const LogoScroller = () => {
  useEffect(() => {
    let timer = setInterval(() => {
      handleCycle_left();
    }, 4000);
  }, []);

  function handleCycle_left() {
    const fBox = slider.firstElementChild;
    const childrenCount = slider.childElementCount;
    const itemsTotalWidth = childrenCount * fBox.getBoundingClientRect().width;
    const negativeSpace = slider.getBoundingClientRect().width - itemsTotalWidth;
    const spacer = negativeSpace / (childrenCount - 1);

    const transitionDuration = 1000;
    slider.style.transition = `transform ${transitionDuration}ms ease-in-out`;
    slider.style.transform = `translateX(-${fBox.getBoundingClientRect().width + spacer}px)`;

    setTimeout(() => {
      slider.style.transition = "none";
      slider.style.transform = "translateX(0)";
      fBox.remove();
      slider.appendChild(fBox);
    }, transitionDuration);
  }

  return (
    <div id="wrapper" onClick={() => handleCycle_left()} style={{ height: "auto", overflow: "hidden", margin: "0 auto", width: "83%" }}>
      <div id="slider" style={{ display: "flex", justifyContent: "space-between", width: "100vw" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <Joomla width={128} height={128} viewBox={"0 0 32 32"} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <WordPress width={128} height={128} viewBox={"0 0 32 32"} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <Basecamp width={128} height={128} viewBox={"0 0 32 32"} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <Shopify width={128} height={128} viewBox={"0 0 32 32"} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <WooCommerce width={128} height={128} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <React width={128} height={128} viewBox={"0 0 32 32"} />
        </div>
      </div>
    </div>
  );
};

export default LogoScroller;
