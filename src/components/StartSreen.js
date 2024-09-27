function StartSreen({ numQuestions, dispatch }) {
  return (
    <div>
      <h2>Welcome to The React Quiz!</h2>
      <h3>{numQuestions} Questions to test your React Mastery</h3>
      <button className="btn " onClick={() => dispatch({ type: "start" })}>
        Let's Start
      </button>
    </div>
  );
}

export default StartSreen;
