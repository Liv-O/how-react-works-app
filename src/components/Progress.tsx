interface ProgressProps {
  questionsCount: number;
  index: number;
  points: number;
  maxPoints: number;
  answer: number | null;
}

function Progress({
  questionsCount,
  index,
  points,
  maxPoints,
  answer,
}: ProgressProps) {
  return (
    <div className="progress">
      <progress
        max={questionsCount}
        value={index + Number(answer !== null)}></progress>
      <p>
        Question <strong>{index + 1}</strong> / {questionsCount}
      </p>
      <p>
        Points: <strong>{points}</strong> / {maxPoints}
      </p>
    </div>
  );
}

export default Progress;
