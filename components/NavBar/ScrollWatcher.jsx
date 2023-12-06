"use client";
import { useEffect, useState, useRef} from "react";

const ScrollWatcher = () => {
  const [scrollY, setScrollY] = useState(0);
  const [sectionHeight, setSectionHeight] = useState(0);
  const [opacity, setOpacity] = useState(0);
  const [logoSection, setLogoSection] = useState(0);

  const breakPoint = 440;

  function logit() {
    setScrollY(window.scrollY);
    // set css vars here
    scrollY > breakPoint ? document.documentElement.style.setProperty("--mix-mode", "difference") : document.documentElement.style.setProperty("--mix-mode", "normal");
   // scrollY > 40 ? document.documentElement.style.setProperty("--nav-height", "60px") : document.documentElement.style.setProperty("--nav-height", "95px");
   // scrollY > 40 ? document.documentElement.style.setProperty("--nav-bg-color", "var(--gray)") : document.documentElement.style.setProperty("--nav-bg-color", "transparent");
   // scrollY > 40 ? document.documentElement.style.setProperty("--nav-logo-color", "var(--deep-purple)") : document.documentElement.style.setProperty("--nav-logo-color", "#fff");
  }

  useEffect(() => {
    if (scrollY > breakPoint) {
      logit();
    }
  }, [scrollY]);

  useEffect(() => {
    const topSection = document.querySelector("body > section:first-of-type");
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
