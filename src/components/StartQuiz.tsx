import type { Action } from '../../types/types';

function StartQuiz({
  questionsCount,
  dispatch,
}: {
  questionsCount: number;
  dispatch: React.ActionDispatch<[action: Action]>;
}) {
  return (
    <div className="start">
      <h2>Welcome to the React Quiz!</h2>
      <h3>{questionsCount} questions to test your React knowledge!</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: 'start' })}>
        Start Quiz
      </button>
    </div>
  );
}

export default StartQuiz;
