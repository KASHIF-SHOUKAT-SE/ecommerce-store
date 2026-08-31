import { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetHours?: number;
}

const CountdownTimer = ({ targetHours = 23 }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: targetHours,
    minutes: 19,
    seconds: 56,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) {
          seconds = 59;
          minutes--;
        }
        if (minutes < 0) {
          minutes = 59;
          hours--;
        }
        if (hours < 0) {
          hours = 23;
          days--;
        }
        if (days < 0) {
          days = 0;
          hours = 0;
          minutes = 0;
          seconds = 0;
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeBox = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center text-lg md:text-xl font-bold text-gray-900 shadow-sm">
        {String(value).padStart(2, '0')}
      </div>
      <span className="text-xs text-gray-500 mt-1">{label}</span>
    </div>
  );

  return (
    <div className="flex items-center gap-3">
      <TimeBox value={timeLeft.days} label="Days" />
      <span className="text-red-500 text-xl font-bold">:</span>
      <TimeBox value={timeLeft.hours} label="Hours" />
      <span className="text-red-500 text-xl font-bold">:</span>
      <TimeBox value={timeLeft.minutes} label="Minutes" />
      <span className="text-red-500 text-xl font-bold">:</span>
      <TimeBox value={timeLeft.seconds} label="Seconds" />
    </div>
  );
};

export default CountdownTimer;


// import { useState, useEffect } from 'react';

// interface CountdownTimerProps {
//   targetHours?: number;
// }

// const CountdownTimer = ({ targetHours = 23 }: CountdownTimerProps) => {
//   const [timeLeft, setTimeLeft] = useState({
//     days: 3,
//     hours: targetHours,
//     minutes: 19,
//     seconds: 56,
//   });

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft((prev) => {
//         let { days, hours, minutes, seconds } = prev;
//         seconds--;
//         if (seconds < 0) {
//           seconds = 59;
//           minutes--;
//         }
//         if (minutes < 0) {
//           minutes = 59;
//           hours--;
//         }
//         if (hours < 0) {
//           hours = 23;
//           days--;
//         }
//         if (days < 0) {
//           days = 0;
//           hours = 0;
//           minutes = 0;
//           seconds = 0;
//         }
//         return { days, hours, minutes, seconds };
//       });
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   const TimeBox = ({ value, label }: { value: number; label: string }) => (
//     <div className="flex flex-col items-center">
//       <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center text-lg md:text-xl font-bold text-gray-900 shadow-sm">
//         {String(value).padStart(2, '0')}
//       </div>
//       <span className="text-xs text-gray-500 mt-1">{label}</span>
//     </div>
//   );

//   return (
//     <div className="flex items-center gap-3">
//       <TimeBox value={timeLeft.days} label="Days" />
//       <span className="text-red-500 text-xl font-bold">:</span>
//       <TimeBox value={timeLeft.hours} label="Hours" />
//       <span className="text-red-500 text-xl font-bold">:</span>
//       <TimeBox value={timeLeft.minutes} label="Minutes" />
//       <span className="text-red-500 text-xl font-bold">:</span>
//       <TimeBox value={timeLeft.seconds} label="Seconds" />
//     </div>
//   );
// };

// export default CountdownTimer;