import { useState } from "react";

export default function App() {
  const questions = [
    {
      id: 1,
      question: "What is 2 + 2?",
      options: ["3", "4", "5"],
      correctAnswer: "4",
    },
    {
      id: 2,
      question: "What is the capital of France?",
      options: ["London", "Paris", "Berlin"],
      correctAnswer: "Paris",
    },
    {
      id: 3,
      question: 'Who wrote "To Kill a Mockingbird"?',
      options: ["Harper Lee", "J.K. Rowling", "Stephen King"],
      correctAnswer: "Harper Lee",
    },
  ];
  const [ans, setAns] = useState([]);
  const answerChange = (ans) => {
    setAns((pans) => [...pans, ans]);
  };
  const [score, setScore] = useState(0);
  const [count, setCount] = useState(1);
  const display = (ques) => {
    let options = ques.options.map((c) => (
      <li key={c}>
        <input
          onChange={(e) => answerChange(e.target.value)}
          type="radio"
          name={ques.id}
          value={c}
        />
        {c}
      </li>
    ));
    return (
      <div>
        <h2>Question {count}</h2>
        <p>{ques.question}</p>
        <ul>{options}</ul>
      </div>
    );
  };
  return (
    <main>
      <h1>Quiz App</h1>
      {count <= questions.length ? (
        <>
          {display(questions[count - 1])}
          <button
            onClick={() => {
              setScore(
                ans[count - 1] == questions[count - 1].correctAnswer
                  ? score + 1
                  : score
              );
              setCount(count + 1);
            }}
          >
            Next
          </button>
        </>
      ) : (
        <>
          <h2>Quiz Result</h2>
          <p>
            Your Score: {score}/{questions.length}
          </p>
        </>
      )}
    </main>
  );
}
