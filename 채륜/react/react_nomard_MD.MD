노마드 코더------------------------------------------------------------------------------
### **State**

#### 1

- state는 기본적으로 데이터가 저장되는 곳
> - JS: span.innerText = `Total click: ${counter}`;
> - REACT: Total click: {counter}

- render()에서 실행되는 것을 바뀔 때마다 업데이트 시키려면, UI를 업데이트 해야한다. (컴포넌트가 한 번 실행되기 때문)
> 해결: 업데이트가 이루어지는 함수 내부에 render()를 사용하면 된다.
> > render()하는 함수를 생성하는 것이 편의성이 좋다.

- 리액트는 태그 요소들을 다 바꾸는 것이 아닌 바뀐 부분만 업데이트
> 데이터가 바뀔 때마다 render() 해줘야 하는 것 잊지 않기!

---------------------------------------------------------
#### 2

- React가 가진 re렌더링
> React.useState()는 데이터의 초깃값과 그걸 바꿔주는 함수가 나옴 [초깃값, function]

> const counter = [1, 2, 3]
> const i = counter[0]
> const j = counter[1]

- 위 형식은 아래와 같음

> const counter = [1, 2, 3]
> const [i, j] = counter

---------------------------------------------------------
#### 3

- 렌더링을 하는 함수를 업데이트가 필요할 때마다 호출하면 무거워짐
- useState에서 제공하는 배열[초깃값, 함수]에서 함수를 이용해 리렌더링을 진행
> ex. [counter, setCounter(그냥 함수 이름)] = React.useState(0)
> const onClick = () => { setCounter(counter +1);}; 형식으로 업데이트 가능

---------------------------------------------------------
#### 4

- modifier(여기서는 setCounter) 함수로 state를 바꿀때, 컴포넌트 전체가 새로운 값을 가진채로  재생성 
- return도 마찬가지
- state가 바뀌면, React가 컴포넌트를 refresh

---------------------------------------------------------
#### 5

- state를 바꾸는 2가지 방법
> 1. setCounter를 설정해 새로운 값을 넣기
> 2. 이전 값을 이용해서 현재 값을 계산해 내는 것 (이쪽이 더 안전)
> > setCounter((current) => current + 1); (함수를 전달하기)
> > 언제나 현재 state값을 얻도록 도와줌

---------------------------------------------------------
#### 6

- label은 누가 이 글씨를 누르면 그 옆input이 선택됨
> for은 id와 연결
> > React에서는 for 사용 불가 - htmlFor로 사용
> > 마찬가지로 class도 불가능 - className으로 사용해야함

--------------------------------------------------------
#### 7

- disabled: 변경 못하게 막음
- Math.round() 소수점을 없앰

--------------------------------------------------------
#### 8

- useState() 괄호 안에는 기본값 설정
- current는 매개변수 이름일 뿐, 변경 가능 

--------------------------------------------------------
#### 9


function MinutesToHours() {
    const [amount, setAmount] = React.useState()
    const [flipped, setflippes] = React.useState(false);
    const onChange = (event) => {
        setAmount(event.target.value);
    };
    const reset = () => setAmount(0);
    const onFlip = () => {
        reset();
        setFlipped((current) => !current);
    }
    return (
        <div>
            <div>
                <label htmlFor="minutes">Minutes</label>
                <input 
                  value={flipped ? amount * 60 : amount} 
                  id="minutes"
                  placeholder="Minutes" 
                  type="number"
                  onChange={onChange}
                  disabled={flipped} 
                />
            </div>
            <div>
                <label htmlFor="hours">Hours</label>
                <input 
                    value={flipped ? amount : Math.round(amount/60)} 
                    id="hours"
                    placeholder="Hours" 
                    type="number"
                    disabled={!flipped}
                />
            </div>
            <button onClick={reset}>Reset</button>
            <button onClick={onFlipped}>{flipped ? "Turn back" : "flipped"}</button>
        </div>
    );
}

function KmToMiles() {
    const [amount, setAmount] = React.useState()
    const [flipped, setFlippes] = React.useState(false);
    const onChange = (event) => {
        setAmount(event.target.value);
    };
    const reset = () => setAmount(0);
    const onFlip = () => {
        reset();
        setFlippes((current) => !current);
    }
    return (
        <div>
            <div>
                <label htmlFor="Km">Km</label>
                <input 
                    value={flipped ? Math.round(amount/1.609) : amount} 
                    id="Km"
                    placeholder="Km" 
                    type="number"
                    disabled={flipped}
                />
            </div>
            <div>
                <label htmlFor="Miles">Miles</label>
                <input 
                  value={flipped ? amount : amount * 1.609} 
                  id="Miles"
                  placeholder="Miles" 
                  type="number"
                  onChange={onChange}
                  disabled={!flipped} 
                />
            </div>
            <button onClick={reset}>Reset</button>
            <button onClick={onFlipped}>{flipped ? "Turn back" : "flipped"}</button>
        </div>
    );
}

function App() {
    const [index, setIndex] = React.useState("xx")
    const onSelect = (event) => {
        setIndex(event.target.value);
    };
    return (
        <div>
            <h1>Super Converter</h1>
            <select value={index} onChange={onSelect}>
                <option value="xx">Select your units</option>
                <option value="0">Minutes & Hours</option>
                <option value="1">Km & Miles</option>
            </select>
            <hr />
            {index === "xx" ? "Please select your units" : null}
            {index === "0" ? <MinutesToHours /> : null}
            {index === "1" ? <KmToMiles /> : null}
            <MinutesToHours />
            <KmToMiles />
        </div>
    );
}

노마드 코더------------------------------------------------------------------------------

### **Props**
#### 1

- Props는 부모 컴포넌트로부터 자식 컴포넌트에 데이터를 보낼 수 있게 해주는 방법이다.
- 컴포넌트는 함수와 같다 (JSX를 반환하는)
- 모든 컴포넌트는 ()를 통해 인자를 받는데, 이 인자를 props라 한다.
> <Btn banana="Continue" />와 같은 경우에는 Btn({banana: "save change"})와 마찬가지다.
> > Btn이라는 함수에 banana라는 인자를 보내는 것 (여기에서 banana의 이름은 뭐든 될 수 있다. tex, dq, foor 등..) 하지만 React에서 정해준 text와 같은 값만 변환이 됨

- function (props)에서 banana를 받으려면 props.banana를 써야하는데 더 빠르게 하려면 function({banana}) 를 쓰면 된다.

---------------------------------------------------------------------------------------
#### 2

- props가 변했다는 말은, state가 변했었다는 말

---------------------------------------------------------------------------------------
#### 3

- propType
> Btn.propType = {
    text: PropTypes.string.isRequired,
    fontSize: PropTypes.number,
};

---------------------------------------------------------------------------------------
#### 4

- prop을 전달할 때의 이름과 받아서 사용할 때의 이름은 동일해야함
- PropType은 Btn이 어떤 prop들을 받는지 검사하는 게 가능하게끔 도와줌


function Btn({text, onClick}) { //여기서의 onClick은 props일뿐 이벤트 리스너가 아님
    
    return (
        <button
            onClick={onClick}       //이벤트 리스너 onClick을 props onClick로 반응
        >
        {text}
        </button>
    )
}

function App() {
    const [value, setValue] = React.useState("Save Changes");
    const changeValue = () => setValue("Revert Changes");
    return (
        <div>
            <Btn text={value} onClick={changeValue} /> // 여기서의 onClick은 Btn으로 들어가는 무언가, 절대 이벤트 리스너가 아님. (따라서 따로 넣어줘야함)
        </div>
    )
}

