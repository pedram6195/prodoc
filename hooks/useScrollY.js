import { useEffect, useState } from "react";

const useScrollY = () => {
  const [scrollY, setScrollY] = useState(window.scrollY);

  const listener = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);

  return scrollY;
};

export default useScrollY;
