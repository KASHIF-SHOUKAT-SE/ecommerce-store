import { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetHours?: number;
}

interface TimeBoxProps {
  value: number;
  label: string;
}

interface TimeLeftState {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const TimeBox = ({ value, label }: TimeBoxProps) => (
  <div className="flex flex-col items-start">
    <span className="text-[12px] font-medium text-black mb-1">{label}</span>
    <span className="text-2xl md:text-3xl font-bold tracking-wider text-black">
      {String(value ?? 0).padStart(2, '0')}
    </span>
  </div>
);

const CountdownTimer = ({ targetHours = 23 }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeftState>({
    days: 3,
    hours: targetHours,
    minutes: 19,
    seconds: 56,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let nextSeconds = prev.seconds - 1;
        let nextMinutes = prev.minutes;
        let nextHours = prev.hours;
        let nextDays = prev.days;

        if (nextSeconds < 0) {
          nextSeconds = 59;
          nextMinutes -= 1;
        }

        if (nextMinutes < 0) {
          nextMinutes = 59;
          nextHours -= 1;
        }

        if (nextHours < 0) {
          nextHours = 23;
          nextDays -= 1;
        }

        if (nextDays < 0) {
          return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        return {
          days: nextDays,
          hours: nextHours,
          minutes: nextMinutes,
          seconds: nextSeconds,
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center gap-3 md:gap-4">
      <TimeBox value={timeLeft.days} label="Days" />
      <span className="text-[#E07575] text-2xl md:text-3xl font-bold pt-4">:</span>

      <TimeBox value={timeLeft.hours} label="Hours" />
      <span className="text-[#E07575] text-2xl md:text-3xl font-bold pt-4">:</span>

      <TimeBox value={timeLeft.minutes} label="Minutes" />
      <span className="text-[#E07575] text-2xl md:text-3xl font-bold pt-4">:</span>

      <TimeBox value={timeLeft.seconds} label="Seconds" />
    </div>
  );
};

export default CountdownTimer;
