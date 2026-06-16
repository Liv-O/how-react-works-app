import type { Action } from '../../types/types';

interface FinishedQuizProps {
  points: number;
  maxPoints: number;
  dispatch: React.ActionDispatch<[action: Action]>;
}

function FinishedQuiz({ points, maxPoints, dispatch }: FinishedQuizProps) {
  const percentage = (points / maxPoints) * 100;
  return (
    <>
      <p className="result">
        You scored {points} out of {maxPoints} points ({Math.ceil(percentage)}%)
      </p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: 'restart' })}>
        Restart Quiz
      </button>
    </>
  );
}

export default FinishedQuiz;
