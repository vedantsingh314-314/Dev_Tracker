import React, { useState, useEffect, useRef } from 'react';

const Pomodoro = () => {
    // 1. State
    const [timeLeft, setTimeLeft] = useState(1500); 
    const [isRunning, setIsRunning] = useState(false);
    
    // 2. The Anti-Lag Sticky Note
    const expectedEndTimeRef = useRef(null);

    // 3. The Timer Engine (The part you will study later!)
    useEffect(() => {
        let intervalId;

        if (isRunning) {
            expectedEndTimeRef.current = Date.now() + (timeLeft * 1000);

            intervalId = setInterval(() => {
                const now = Date.now();
                const distance = expectedEndTimeRef.current - now; 

                if (distance <= 0) {
                    clearInterval(intervalId);
                    setTimeLeft(0);
                    setIsRunning(false);
                    const today= new Date().toISOString().split('T')[0];
                    const storedData=JSON.parse(localStorage.getItem('pomodoroData')) || {};
                    const currentCount = storedData[today] || 0; 
                    storedData[today] = currentCount + 1;
                    localStorage.setItem('pomodoroData', JSON.stringify(storedData));
                    alert("Pomodoro Complete! Take a break."); 
                } else {
                    setTimeLeft(Math.ceil(distance / 1000));
                }
            }, 100); 
        }

        return () => clearInterval(intervalId);
    }, [isRunning, timeLeft]); 

    // 4. Button Logic
    const toggleTimer = () => setIsRunning(!isRunning);
    const resetTimer = () => {
        setIsRunning(false);
        setTimeLeft(1500);
    };

    // 5. Time Math
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    // 6. UI
    return (
        <div className="pomodoro-container">
            <h2>Pomodoro Timer</h2>
            <div className="timer-display">
                {formattedTime}
            </div>
            <div className="timer-buttons">
                <button onClick={toggleTimer}>
                    {isRunning ? 'Pause' : 'Start'}
                </button>
                <button onClick={resetTimer}>
                    Reset
                </button>
            </div>
        </div>
    );
};

export default Pomodoro;