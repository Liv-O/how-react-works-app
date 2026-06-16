export type Question = {
  question: string;
  options: string[];
  correctOption: number;
  points: number;
};

export type State = {
  questions: Question[];
  status: 'loading' | 'ready' | 'error' | 'active' | 'finished';
  index: number;
  points: number;
  answer: number | null;
  remainingTime: number;
};

export type Action =
  | { type: 'dataRecieved'; payload: Question[] }
  | { type: 'dataFailed' }
  | { type: 'start' }
  | { type: 'answer'; payload: number }
  | { type: 'nextQuestion' }
  | { type: 'finished' }
  | { type: 'restart' }
  | { type: 'tick' };
