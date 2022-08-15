import './App.css';

function App({inc = Function.prototype, dec = Function.prototype, count}) {
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={dec}>dec</button>
      <button onClick={inc}>inc</button>
    </div>
  );
}

export default App;
