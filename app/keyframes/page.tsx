import React from "react";
import * as m from "motion/react-client";

const page = () => {
  return (
    <m.div
      className="w-24 h-24 bg-cyan-300 rounded-md mt-24 ml-24"
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 180, 180, 0],
        borderRadius: ["0%", "0%", "50%", "50%", "0%"],
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 1,
      }}
    />
  );
};

export default page;
