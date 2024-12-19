import React from "react";
import * as m from "motion/react-client";

const page = () => {
  return (
    <m.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      className="w-24 h-24 bg-cyan-300 rounded-full ml-24 mt-24"
      transition={{
        duration: 0.4,
        type: "spring",
        visualDuration: 0.4,
        bounce: 55.0,
      }}
    ></m.div>
  );
};

export default page;
