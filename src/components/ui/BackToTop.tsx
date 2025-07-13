import { useEffect, useState } from "react";

import { ArrowUp } from "lucide-react";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top on click
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-orange-400 shadow-lg hover:bg-orange-700  text-black hover:text-white transition"
      aria-label="Back to top"
    >
      <ArrowUp className="size-5" />
    </button>
  );
};

export default BackToTop;
