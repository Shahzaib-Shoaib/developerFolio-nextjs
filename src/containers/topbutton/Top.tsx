
"use client";

import React, { useEffect, useState } from "react";
import "./Top.scss";

export default function Top() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      id="topButton"
      title="Go to top"
      aria-label="Scroll to top"
      style={{
        visibility: isVisible ? "visible" : "hidden",
      }}
    >
      <i
        className="fas fa-hand-point-up"
        aria-hidden="true"
      ></i>
    </button>
  );
}
