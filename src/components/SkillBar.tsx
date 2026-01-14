"use client";

import { useEffect, useState } from "react";

interface SkillBarProps {
  skill: string;
  percentage: number;
  delay?: number;
}

export default function SkillBar({ skill, percentage, delay = 0 }: SkillBarProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [currentPercentage, setCurrentPercentage] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (isVisible && currentPercentage < percentage) {
      const interval = setInterval(() => {
        setCurrentPercentage(prev => {
          if (prev >= percentage) {
            clearInterval(interval);
            return percentage;
          }
          return prev + 1;
        });
      }, 20);

      return () => clearInterval(interval);
    }
  }, [isVisible, percentage, currentPercentage]);

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-mono text-stone-700 dark:text-stone-300">{skill}</span>
        <span className="text-xs text-stone-500 dark:text-stone-500">{currentPercentage}%</span>
      </div>
      <div className="h-2 bg-stone-200 dark:bg-stone-800 overflow-hidden">
        <div
          className="h-full bg-accent transition-all duration-1000 ease-out"
          style={{ width: `${currentPercentage}%` }}
        />
      </div>
    </div>
  );
}
