import { useEffect, useState } from "react";

const ScrollTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 220);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      className={`scroll-top-btn ${visible ? "scroll-top-btn--visible" : ""}`}
      onClick={scrollToTop}
      aria-label="Volver arriba"
    >
      <i className="fas fa-arrow-up" aria-hidden="true" />
    </button>
  );
};

export default ScrollTopButton;
