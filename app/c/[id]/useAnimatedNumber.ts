import { useState, useEffect } from "react";

export function useAnimatedNumber(targetNumber: number, duration = 6000) {
  const [animatedValue, setAnimatedValue] = useState(0);

  useEffect(() => {
    if (targetNumber <= 0) {
      setAnimatedValue(targetNumber);
      return;
    }

    let start = 0;
    const increment = targetNumber / (duration / 20);

    const timer = setInterval(() => {
      start += increment;
      if (start >= targetNumber) {
        start = targetNumber;
        clearInterval(timer);
      }
      setAnimatedValue(Math.floor(start));
    }, 20);

    return () => clearInterval(timer);
  }, [targetNumber, duration]);

  return animatedValue;
}
