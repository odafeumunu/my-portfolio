import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

const CounterOnScroll = ({ numb, project }) => {
  const [count, setCount] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null); // Create a reference to the element

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true); // Start counting when in view
          } else {
            setIsInView(false); // Optionally reset the counter when out of view
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    const currentRef = ref.current; // Store ref.current in a local variable

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        // Use the local variable in the cleanup
        observer.disconnect();
      }
    };
  }, []);

  // Handle counter animation when `isInView` is true
  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(numb, 10); // Convert numb to a number
      const duration = 2; // Duration of the animation in seconds
      const increment = end / (duration * 60); // Calculate increment for each frame

      const interval = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          sessionStorage.setItem(`counter-${project}`, "true"); // Mark as counted in sessionStorage
          clearInterval(interval); // Stop the animation once the end value is reached
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60); // Update every frame (60fps)

      // Clean up the interval when the component unmounts or when the scroll visibility changes
      return () => clearInterval(interval);
    } else {
      setCount(0); // Reset count if out of view (optional)
    }
  }, [isInView, numb, project]);

  return (
    <div ref={ref} className="row-txt">
      <h3>
        {Math.floor(count)}
        <sup>+</sup>
      </h3>
      <p>{project}</p>
    </div>
  );
};

CounterOnScroll.propTypes = {
  numb: PropTypes.string.isRequired,
  project: PropTypes.string.isRequired,
};

export default CounterOnScroll;
