import type { Action } from '../../types/types';
import NextQuestionBtn from './NextQuestionBtn';
import Timer from './Timer';

interface FooterProps {
  remainingTime: number;
  answer: number | null;
  dispatch: React.ActionDispatch<[action: Action]>;
  index: number;
  questionsCount: number;
}

function Footer({
  remainingTime,
  answer,
  dispatch,
  index,
  questionsCount,
}: FooterProps) {
  return (
    <footer>
      <Timer
        remainingTime={remainingTime}
        dispatch={dispatch}></Timer>
      {answer !== null && (
        <NextQuestionBtn
          dispatch={dispatch}
          index={index}
          maxQuestions={questionsCount}
        />
      )}
    </footer>
  );
}

export default Footer;
