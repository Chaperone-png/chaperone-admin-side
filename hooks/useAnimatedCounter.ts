import { useEffect, useRef, useState } from "react";

type CounterKeys = "count1" | "count2";

const COUNTER_SETTINGS: {
  id: CounterKeys;
  start: number;
  end: number;
  duration: number;
}[] = [
  { id: "count1", start: 0, end: 2000, duration: 2 },
  { id: "count2", start: 2000, end: 4000, duration: 3 },
];

export const useAnimatedCounters = () => {
  const [counts, setCounts] = useState<Record<CounterKeys, number>>({
    count1: 0,
    count2: 50,
  });

  const countRefs = useRef<Record<CounterKeys, number>>({
    count1: 0,
    count2: 50,
  });

  // Function to animate one counter, then trigger the next
  const animateCounter = (
    id: CounterKeys,
    start: number,
    end: number,
    duration: number
  ): Promise<void> => {
    return new Promise((resolve) => {
      let current = start;
      const step = (end - start) / (duration * 60);

      const animate = () => {
        current += step;
        if (current < end) {
          const rounded = Math.round(current);
          countRefs.current[id] = rounded;
          setCounts((prev) => ({ ...prev, [id]: rounded }));
          requestAnimationFrame(animate);
        } else {
          countRefs.current[id] = end;
          setCounts((prev) => ({ ...prev, [id]: end }));
          resolve(); // Resolve when done
        }
      };

      requestAnimationFrame(animate);
    });
  };

  useEffect(() => {
    // Sequentially animate each counter
    const runSequentially = async () => {
      for (const { id, start, end, duration } of COUNTER_SETTINGS) {
        await animateCounter(id, start, end, duration);
      }
    };

    runSequentially();
  }, []);

  return counts;
};
