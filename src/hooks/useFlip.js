import React, { useState } from "react";

const useFlip = (val = true) => {
  const [state, setState] = useState(val);
  const flipCard = () => {
    setState((card) => !card);
  };

  return [state, flipCard];
};

export default useFlip;
