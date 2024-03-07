function App() {
  const comments = [
    { id: 1, text: "Comment 1" },
    { id: 2, text: "Comment 2" },
    { id: 3, text: "Comment 3" },
  ];
  return (
    <>
      <h1>Hello From the app component</h1>
      <h2>Hello again</h2>
      <ul>
        <div className="comments">
          {comments.map((comment, index) => (
            <li key={index}>{comment.text}</li>
          ))}
        </div>
      </ul>
    </>
  );
}

export default App;
