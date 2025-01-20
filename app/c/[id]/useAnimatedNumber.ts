import React, { useState, useEffect } from "react";

/**
 * A custom hook that animates a number from 0 up to `targetNumber`.
 *
 * @param targetNumber The final number we want to animate to.
 * @param duration The total duration of the animation in milliseconds (default 6000).
 * @returns The animated number (integer).
 */
export function useAnimatedNumber(targetNumber: number, duration = 6000) {
  const [animatedValue, setAnimatedValue] = useState(0);

  useEffect(() => {
    // Edge case: if targetNumber is 0 or negative, skip the animation
    if (targetNumber <= 0) {
      setAnimatedValue(targetNumber);
      return;
    }

    let start = 0;
    // We'll increment by (targetNumber / (duration / 20)) every 20 ms
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
