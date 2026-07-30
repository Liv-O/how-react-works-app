import OptionsList from './OptionsList';
import type { Action, Question } from '../../types/types.ts';

interface ActiveQuizProps {
  question: Question;
  answer: number | null;
  dispatch: React.ActionDispatch<[action: Action]>;
}

function ActiveQuiz({ question, answer, dispatch }: ActiveQuizProps) {
  return (
    <div className="active-quiz">
      <h2>{question.question}</h2>
      <OptionsList
        question={question}
        answer={answer}
        dispatch={dispatch}
      />
    </div>
  );
}

export default ActiveQuiz;
