import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";

function ScrollEvent() {
  const [btnToTop, setBtnToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", scrollTop);

    function scrollTop() {
      if (window.pageYOffset <= 1000) {
        setBtnToTop(false);
      }
      if (window.pageYOffset > 1000) {
        setBtnToTop(true);
      }
    }

    return () => window.removeEventListener("scroll", scrollTop);
  }, []);

  const topOfPage = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
