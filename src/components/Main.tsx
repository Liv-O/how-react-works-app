import Loader from '../Loader';
import Error from '../Error';
import StartQuiz from './StartQuiz';
import ActiveQuiz from './ActiveQuiz';
import type { Action, Question } from '../../types/types.ts';
import Progress from './Progress.tsx';
import FinishedQuiz from './FinishedQuiz.tsx';

interface MainProps {
  questions: Question[];
  status: 'loading' | 'ready' | 'error' | 'active' | 'finished';
  index: number;
  points: number;
  answer: number | null;
  dispatch: React.ActionDispatch<[action: Action]>;
  children: React.ReactNode;
}

function Main({
  questions,
  status,
  index,
  points,
  answer,
  dispatch,
  children,
}: MainProps) {
  const questionsCount = questions.length;
  const maxPoints = questions.reduce((prev, cur) => prev + cur.points, 0);
  return (
    <main className="main">
      {status === 'loading' && <Loader />}
      {status === 'ready' && (
        <StartQuiz
          questionsCount={questionsCount}
          dispatch={dispatch}
        />
      )}
      {status === 'error' && <Error />}
      {status === 'active' && (
        <>
          <Progress
            questionsCount={questionsCount}
            index={index}
            points={points}
            maxPoints={maxPoints}
            answer={answer}
          />
          <ActiveQuiz
            question={questions[index]}
            dispatch={dispatch}
            answer={answer}
          />
        </>
      )}
      {status === 'finished' && (
        <FinishedQuiz
          points={points}
          maxPoints={maxPoints}
          dispatch={dispatch}
        />
      )}{' '}
      {children}
    </main>
  );
}

export default Main;
