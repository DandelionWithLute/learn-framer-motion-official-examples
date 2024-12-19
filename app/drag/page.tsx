"use client";
import React, { useRef } from "react";
import * as motion from "motion/react-client";

const page = () => {
  const constraintsRef = useRef < HTMLDivElement > (null);

  return (
    <div>
      <motion.div ref={constraintsRef} style={constraints}>
        <motion.div
          drag
          dragConstraints={constraintsRef}
          style={box}
          className="bg-cyan-300"
        />
      </motion.div>
    </div>
  );
};

export default page;

const constraints = {
  width: "full",
  height: "100vh",
  backgroundColor: "black",
  borderRadius: 10,
};

const box = {
  width: 100,
  height: 100,
  backgroundColor: "red",
  borderRadius: 10,
};
