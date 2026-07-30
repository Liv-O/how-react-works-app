import { useEffect, useReducer } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import type { Action, State } from '../types/types';
import Footer from './components/Footer';

const SECONDS_PER_QUESTION = 20;

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'dataRecieved':
      return { ...state, questions: action.payload, status: 'ready' };
    case 'dataFailed':
      return { ...state, questions: [], status: 'error' };
    case 'start':
      return {
        ...state,
        status: 'active',
        index: 0,
        remainingTime: state.questions.length * SECONDS_PER_QUESTION,
      };
    case 'answer': {
      const question = state.questions.at(state.index);

      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question?.correctOption
            ? state.points + question.points
            : state.points,
      };
    }
    case 'nextQuestion':
      return { ...state, index: state.index + 1, answer: null };
    case 'finished':
      return { ...state, status: 'finished', index: 0, answer: null };
    case 'restart':
      return { ...initialState, questions: state.questions, status: 'ready' };
    case 'tick': {
      return {
        ...state,
        remainingTime: state.remainingTime - 1,
        status: state.remainingTime === 0 ? 'finished' : state.status,
      };
    }
    default:
      throw new Error('Unknown action type');
  }
}

const initialState: State = {
  questions: [],
  status: 'loading',
  index: 0,
  answer: null,
  points: 0,
  remainingTime: 0,
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { questions, status, index, points, answer, remainingTime } = state;

  useEffect(() => {
    fetch('/questions.json')
      .then((response) => response.json())
      .then((data) =>
        dispatch({ type: 'dataRecieved', payload: data.questions }),
      )
      .catch((error) => {
        console.error('Error fetching questions:', error);
        dispatch({ type: 'dataFailed' });
      });
  }, []);

  return (
    <div className="app">
      <Header></Header>
      <Main
        questions={questions}
        status={status}
        index={index}
        dispatch={dispatch}
        points={points}
        answer={answer}>
        {status === 'active' && (
          <Footer
            remainingTime={remainingTime}
            answer={answer}
            dispatch={dispatch}
            index={index}
            questionsCount={questions.length}></Footer>
        )}
      </Main>
    </div>
  );
}

export default App;
