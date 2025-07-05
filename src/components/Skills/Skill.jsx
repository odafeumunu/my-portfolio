// Skill.js
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import "./Skill.scss"

const Skill = ({ skillName, percentage }) => {
  const pathRef = useRef(null);
  const [totalLength, setTotalLength] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const path = pathRef.current;
    if (path) {
      const length = path.getTotalLength();
      setTotalLength(length); // Set the total length of the circle
    }
  }, []);

  // Counter animation
  useEffect(() => {
    const target = percentage;
    const duration = 1;
    const steps = target;
    const stepTime = (duration * 1000) / steps;

    let current = 0;
    const interval = setInterval(() => {
      if (current < target) {
        current += 1;
        setCount(current);
      } else {
        clearInterval(interval);
      }
    }, stepTime);

    return () => clearInterval(interval);
  }, [percentage]);

  return (
    <div className="skill">
      <div className="skill-inner">
        <h4>{skillName}</h4>
        <span>{count}%</span> {/* Display the dynamic percentage */}
      </div>

      <motion.svg
        initial={{ strokeDashoffset: totalLength }}
        whileInView={{
          strokeDashoffset: totalLength - (totalLength * count) / 100,
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="200px"
        height="200px"
        viewBox="0 0 160 160">
        <defs>
          <linearGradient id="GradientColor">
            <stop offset="0%" stopColor="#7ace4c" />
            <stop offset="100%" stopColor="#017e9d" />
          </linearGradient>
        </defs>
        <circle
          cx="80"
          cy="80"
          r="70"
          strokeLinecap="round"
          stroke="url(#GradientColor)"
          fill="transparent"
          strokeWidth="10"
          ref={pathRef}
        />
      </motion.svg>
    </div>
  );
};


Skill.propTypes = {
  skillName: PropTypes.string.isRequired,
  percentage: PropTypes.string.isRequired,
};

export default Skill;
