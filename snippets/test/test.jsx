/**
* This component allows users to smoothly scroll back to the top of the page when clicked.
* It includes functionality to detect the scroll position and dynamically adjust its visibility
* and animation based on the user's scroll behavior.
* The component utilizes React's useState and useEffect hooks for state management and event handling,
* along with the FontAwesome Icon component (FaChevronUp).
* Please note that this component requires Tailwind CSS for styling and Tailwind CSS Animate library for animation effects.
*/
import { useState, useEffect } from 'react';
import { FaChevronUp } from 'react-icons/fa';

const ScrollToTop = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollUp}
      className={`${scrollY > 500
        ? 'visible animate-in fade-in slide-in-from-bottom duration-500'
        : 'invisible animate-out fade-out slide-out-to-bottom duration-500 pointer-events-none'
      } rounded-full p-3 fixed bottom-5 right-5 lg:bottom-10 lg:right-10 duration-500 bg-primary hover:bg-primary-hover text-white`}
    >
      <FaChevronUp />
    </button>
  );
};

export default ScrollToTop;