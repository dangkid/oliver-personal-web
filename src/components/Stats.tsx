"use client";

import { useEffect, useState } from "react";

interface StatItem {
  number: number;
  label: string;
  suffix?: string;
}

const stats: StatItem[] = [
  { number: 4, label: "Proyectos", suffix: "" },
  { number: 6, label: "Escritos", suffix: "" },
  { number: 10, label: "Tecnologías", suffix: "+" },
  { number: 2, label: "Años ASIR", suffix: "" }
];

export default function Stats() {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isVisible) {
          setIsVisible(true);
          
          // Animar números
          stats.forEach((stat, index) => {
            const duration = 2000;
            const steps = 60;
            const increment = stat.number / steps;
            let current = 0;

            const timer = setInterval(() => {
              current += increment;
              if (current >= stat.number) {
                setCounts(prev => {
                  const newCounts = [...prev];
                  newCounts[index] = stat.number;
                  return newCounts;
                });
                clearInterval(timer);
              } else {
                setCounts(prev => {
                  const newCounts = [...prev];
                  newCounts[index] = Math.floor(current);
                  return newCounts;
                });
              }
            }, duration / steps);
          });
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('stats-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <div id="stats-section" className="grid grid-cols-2 lg:grid-cols-4 gap-1 bg-stone-300 dark:bg-stone-700">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-stone-50 dark:bg-stone-950 p-8 md:p-12 text-center group hover:bg-stone-900 dark:hover:bg-stone-100 transition-colors duration-500"
        >
          <div className="space-y-3 md:space-y-4">
            <div className="font-serif text-5xl md:text-6xl lg:text-7xl text-accent group-hover:text-stone-50 dark:group-hover:text-stone-900 transition-colors">
              {counts[index]}{stat.suffix}
            </div>
            <div className="h-px w-12 bg-accent mx-auto group-hover:w-full transition-all duration-500" />
            <p className="text-xs md:text-sm tracking-[0.2em] uppercase text-stone-600 dark:text-stone-400 group-hover:text-stone-300 dark:group-hover:text-stone-600 transition-colors">
              {stat.label}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
