혼공자 10장 문제풀이
1. 3번
2. 2번
3. 1번

4.
class App extends React.component {
    constructor(props) {
        super(props)
        this.state = {seconds: 0}
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange (event) {
        if(event.target.checked) {
            this.timerId = setInterval(() => {
                this.setState({
                    seconds: this.state.seconds +1
                })
            }, 1000)
        } else {
            clearInterval(this.timerId)
        }
    }

    render() {
        return <div>
        <input type="checkbox" onChange={this.hadleChange} />
        <span>타이머 활성화</span>
        <h1>{this.state.seconds}초</h1>
        </div>
    }
}

const container = document.getElementById('root')
ReactDOM.render(<App/>, container)

5.
    function App() {
        const [amount, setAmount] = React.useState();
        const [index, setIndex] = React.useState(0);
        const [result, setResult] = React.useState(0);
        const onChange = (e) => {
            setAmount(e.target.value)
        }
        const onSelect = (e) => {
            setIndex(e.target.value);
        };
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
                    <option value=0>mm</option>
                    <option value=1>m</option>
                    <option value=2>inch</option>
                </select>
                {index === "0" ? result === amount*10}
                {index === "1" ? result === amount/100}
                {index === "2" ? result === Math.rount(amount/2.54)}
            </div>

        )
    }

6.
  function App () {
  const [sum, setSum] = React.useState(0);
  const onChange = (e) => {
      setSum(e.target.value);
  };
  return (
      <div>
          <p><h1>글자 수: {sum.length}</h1></p>
          <input
              value={sum}
              placeholder="글자를 입력하세요"
              type="text"
              onChange={onChange}>
          </input>
      </div>
  )
}

--------------------------------------------------------------

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
되는 코드