import type { Action, Question } from '../../types/types';

interface OptionsListProps {
  question: Question;
  answer: number | null;
  dispatch: React.ActionDispatch<[action: Action]>;
}

function OptionsList({ question, answer, dispatch }: OptionsListProps) {
  const hasAnswered = answer !== null;
  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          key={option}
          className={`btn btn-option ${index === answer ? 'answer' : ''}  ${hasAnswered ? (index === question.correctOption ? 'correct' : 'wrong') : ''}`}
          onClick={() => dispatch({ type: 'answer', payload: index })}
          disabled={hasAnswered}>
          {option}
        </button>
      ))}
    </div>
  );
}

export default OptionsList;
