import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';

function App () {
  const [amount, setAmount] = React.useState(null);
  const [index, setIndex] = React.useState(0);
  const [result, setResult] = React.useState(null);
  
  const onChange = (e) => {
    setAmount(e.target.value);
  };
  
  const onSelect = (e) => {
    setIndex(Number(e.target.value));
  };
  
  React.useEffect(() => {
    if (index === 0) {
      setResult(amount * 10);
    } else if (index === 1) {
      setResult(amount / 100);
    } else if (index === 2) {
      setResult(Math.round(amount / 2.54));
    }
  }, [amount, index]);
  
  return (
    <div>
      <input
        value={amount}
        id="cm"
        placeholder="cm"
        type="number"
        onChange={onChange}
      />
      CM = {result}
      <select value={index} onChange={onSelect}>
        <option value={0}>mm</option>
        <option value={1}>m</option>
        <option value={2}>inch</option>
      </select>
    </div>
  );
}

export default App;
