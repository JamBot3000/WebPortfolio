// When a user scrolls down they will have a "back to top" button
import React, { useEffect, useState } from "react";

const Top = () => {
  const [isActive, setIsActive] = useState(false);

  function scrolled(scrollY, innerHeight) {
    scrollY > innerHeight / 3 ? setIsActive(true) : setIsActive(false);
  }

  useEffect(() => {
    const onScroll = () => scrolled(window.scrollY, window.innerHeight);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  });

  // if this just stops working use useEffect()`
  function returnToTop() {
    window.scrollTo({ top: 0, left: 0 });
  }

  return (
    <div
      onClick={returnToTop}
      className={isActive ? "top is-active" : "top"}
      title="Top"
    >
      <i
        className="ion ion-ios-arrow-up"
        style={{ color: "black" + "!important" }}
      ></i>
    </div>
  );
};

export default Top;
