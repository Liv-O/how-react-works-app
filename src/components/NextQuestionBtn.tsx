import type { Action } from '../../types/types';

interface NextQuestionProps {
  dispatch: React.ActionDispatch<[action: Action]>;
  index: number;
  maxQuestions: number;
}

function NextQuestionBtn({ dispatch, index, maxQuestions }: NextQuestionProps) {
  if (index >= maxQuestions - 1) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: 'finished' })}>
        Finish Quiz
      </button>
    );
  }
  return (
    <button
      className="btn btn-ui"
      onClick={() => dispatch({ type: 'nextQuestion' })}>
      Next Question
    </button>
  );
}

export default NextQuestionBtn;
