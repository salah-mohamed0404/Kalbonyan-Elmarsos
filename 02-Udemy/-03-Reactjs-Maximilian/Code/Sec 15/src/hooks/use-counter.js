import { useEffect, useState } from "react";

const useCounter = function (sign = true) {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(prevCounter => (sign ? prevCounter + 1 : prevCounter - 1));
    }, 1000);

    return () => clearInterval(interval);
  }, [sign]);

  return counter;
};

export default useCounter;
