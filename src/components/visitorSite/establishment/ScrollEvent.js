import React, { useState } from "react";
import Button from "react-bootstrap/Button";

function ScrollEvent() {
  const [btnToTop, setBtnToTop] = useState(false);

  const backToTop = () => {
    if (window.pageYOffset <= 1000) {
      setBtnToTop(false);
    }
    if (window.pageYOffset > 1000) {
      setBtnToTop(true);
    }
  };

  const topOfPage = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", backToTop);

  return (
    <Button
      onClick={topOfPage}
      className={btnToTop ? "showToTopBtn" : "hideToTopBtn"}
    >
      &uArr;
    </Button>
  );
}

export default ScrollEvent;
