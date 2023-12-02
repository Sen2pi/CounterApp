import React, {useState} from "react";

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="container my-5">
      <div className="card text-center my-5">
        <h1>Depanne 2 Roues Compteur de Missions</h1>
        <div className="card-body">
          <div className="my-5">
            <h1>Depanneur 1</h1>
            <h2 className="my-5">{count}</h2>
            <button className="btn btn-success mx-3" onClick={() => setCount(count + 1)}>Increment +1</button>
            <button className="btn btn-danger mx-3" onClick={() => setCount(count - 1)} disabled={count === 0}>Decrement -1</button>
            <button className="btn btn-secondary mx-3" onClick={() => setCount(count - count)}>Reset</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
