"use client";

import { useEffect, useState } from "react";

export function CountdownTimer() {
  const [time, setTime] = useState({
    days: 6,
    hours: 23,
    minutes: 59,
    seconds: 59,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setTime((prev) => {
        let { days, hours, minutes, seconds } = prev;
        seconds -= 1;
        if (seconds < 0) {
          seconds = 59;
          minutes -= 1;
        }
        if (minutes < 0) {
          minutes = 59;
          hours -= 1;
        }
        if (hours < 0) {
          hours = 23;
          days -= 1;
        }
        if (days < 0) {
          return { days: 6, hours: 23, minutes: 59, seconds: 59 };
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");

  if (!mounted) {
    return (
      <span>
        NEXT BATCH STARTS IN: 06d : 23h : 59m : 59s
      </span>
    );
  }

  return (
    <span>
      NEXT BATCH STARTS IN: {pad(time.days)}d : {pad(time.hours)}h :{" "}
      {pad(time.minutes)}m : {pad(time.seconds)}s
    </span>
  );
}
