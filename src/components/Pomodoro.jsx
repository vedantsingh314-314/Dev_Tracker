import { useEffect, useState } from "react";

export default function Pomodoro() {
  const SESSION_TIME = 25 * 60;
  const BREAK_TIME = 5 * 60;

  const [time, setTime] = useState(SESSION_TIME);
  const [isRunning, setIsRunning] = useState(false);
  const [isSession, setIsSession] = useState(true);

  useEffect(() => {
    let timer;

    if (isRunning) {
      timer = setInterval(() => {
        setTime((prev) => {
          if (prev === 0) {
            const nextMode = !isSession;
            setIsSession(nextMode);
            return nextMode ? SESSION_TIME : BREAK_TIME;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isRunning, isSession]);

  const formatTime = (t) => {
    const min = Math.floor(t / 60);
    const sec = t % 60;
    return `${min.toString().padStart(2, "0")}:${sec
      .toString()
      .padStart(2, "0")}`;
  };

  const handleReset = () => {
    setIsRunning(false);
    setIsSession(true);
    setTime(SESSION_TIME);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl text-center w-80">
        
        <h1 className="text-2xl font-bold mb-4 tracking-wide">
          {isSession ? "Focus Time" : "Break Time"}
        </h1>

        <div className="text-6xl font-mono mb-6">
          {formatTime(time)}
        </div>

        <div className="flex justify-center gap-4">
          <button
            onClick={() => setIsRunning(!isRunning)}
            className="px-4 py-2 bg-green-500 hover:bg-green-600 rounded-lg transition"
          >
            {isRunning ? "Pause" : "Start"}
          </button>

          <button
            onClick={handleReset}
            className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg transition"
          >
            Reset
          </button>
        </div>

        <p className="mt-4 text-sm text-gray-400">
          {isSession ? "Stay focused." : "Take a breath."}
        </p>
      </div>
    </div>
  );
}