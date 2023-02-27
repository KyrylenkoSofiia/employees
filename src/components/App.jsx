import './App.css';
import { useState } from 'react';

function App() {
  const [number, setNumber] = useState(5);

  const increment = function() {
    setNumber(number + 1);
  }
  return (
    <div className="App">
      <h1>Hello first React App</h1>
      <h3>{number}</h3>
      <button onClick={increment}>Click me to increment</button>
    </div>
  );
}

export default App;
