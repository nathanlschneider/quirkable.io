"use client";
import { useEffect, useState, useRef, use } from "react";

const ScrollWatcher = () => {
  const [scrollY, setScrollY] = useState(0);
  const [sectionHeight, setSectionHeight] = useState(0);
  const [opacity, setOpacity] = useState(0);
  const [logoSection, setLogoSection] = useState(0);

  function logit() {
    setScrollY(window.scrollY);
    // set css vars here
    scrollY > 40 ? document.documentElement.style.setProperty("--nav-height", "60px") : document.documentElement.style.setProperty("--nav-height", "95px");
    scrollY > 40 ? document.documentElement.style.setProperty("--nav-bg-color", "#f4f4ff") : document.documentElement.style.setProperty("--nav-bg-color", "transparent");
    scrollY > 40 ? document.documentElement.style.setProperty("--nav-logo-color", "var(--deep-purple)") : document.documentElement.style.setProperty("--nav-logo-color", "#fff");
  }

  useEffect(() => {
    if (scrollY > 40) {
      logit();
    }
  }, [scrollY]);

  useEffect(() => {
    const topSection = document.querySelector("main > div:first-of-type");
    setSectionHeight(Math.floor(topSection.getBoundingClientRect().height));
  }, []);

  useEffect(() => {
    setScrollY(window.scrollY);
    function watchScroll() {
      window.addEventListener("scroll", logit);
    }
    watchScroll();

    return () => {
      window.removeEventListener("scroll", logit);
    };
  });
};

export default ScrollWatcher;
