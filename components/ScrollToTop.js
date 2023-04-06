import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowUp } from "@fortawesome/free-solid-svg-icons";
import { classNames } from "../utils/classNames";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-10 right-10 z-10 sm:bottom-20 sm:right-20">
  
      <FontAwesomeIcon
        icon={faCircleArrowUp}
        size="2xl"
        onClick={scrollToTop}
        className={classNames(
          isVisible ? "opacity-80" : "opacity-0",
          "inline-flex items-center rounded-full text-secondary_1 shadow-sm transition-opacity hover:text-secondary_2 focus:text-secondary_2 focus:outline-none focus:ring-2 focus:ring-offset-2"
        )}
        aria-hidden="true"
      />
      {/* </button> */}
    </div>
  );
};
