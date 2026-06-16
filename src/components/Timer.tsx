import { useEffect } from 'react';
import type { Action } from '../../types/types';

interface TimerProps {
  dispatch: React.ActionDispatch<[action: Action]>;
  remainingTime: number;
}

function Timer({ dispatch, remainingTime }: TimerProps) {
  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;
  useEffect(() => {
    const timer = setInterval(() => {
      dispatch({ type: 'tick' });
    }, 1000);
    return () => clearInterval(timer);
  }, [dispatch]);

  return (
    <div className="timer">
      {minutes.toString().padStart(2, '0')}:
      {seconds.toString().padStart(2, '0')}
    </div>
  );
}

export default Timer;
