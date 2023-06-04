<!-- import logo from './logo.svg';    //SVG파일과 CSS파일을 불러와서 사용
import './App.css';       //loader는 여러가지 종류가 있음 (css, file 등)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}   //APP이라는 컴포넌트를 만드는 코드, html이 아닌 JSX

export default App; -->
//리액트를 불러와서 사용할 수 있게함 (import React from 'react';)
//모듈을 불러와서 사용하는 것은 원래 브라우저에 없는 기능 (Node.js에서 지원)
//브라우저에서도 사용하기 위해 번들러를 사용 (모듈들을 연결)

function APP() {    //JSX
  return(
    <div>
    Hello <b>react</b>
    </div>
  );
}

위 코드는 아래와 같이 변환된다.

function APP() {
  return React.createElement("div", null, "Hello", React.createElement("b", null, "react"));
}

생활코딩 리액트----------------------------------------------

### **리액트**

#### **리액트 라이브러리**
- 규모가 큰 자바스크립트 라이브러리로 사용자 인터페이스를 쉽게 구성할 수 있도록 도와줍니다.
> 단순한 js가 아닌 리액트를 위해 개발된 확장 문법을 사용한다.

#### **루트 컴포넌트 출력하기**
- 화면에 출력되는 요소를 컴포넌트라고 한다.
- 최상위에 배치하는 컴포넌트는 루트 컴포넌트라고 한다.
> 컴포넌트 생성하기
> > <컨포넌트 이름></컴포넌트 f이름>
> > - 출력시 ReactDOM.render()메소드 사용
> > > ReactDOM.render(컴포넌트, 컨테이너)

#### **JSX 기본 문법**
> <태그>{표현식}</태그>
   <태그 속성={표현식} />
> > 표현식에는 따옴표 사용금지

#### **클래스 컴포넌트**
- 클래스 컴포넌트: 클래스로 만드는 컴포넌트
> class 컴포넌트 이름 extends 
> React.Component {
>   render() {
>       return <h1>출력할 것</h1>
>      }
> }

- 함수 컨포넌트: 함수로 만드는 컴포넌트

- state와 setState
> // 상태 선언하기(생성자 위치)
this.state = { 속성: 값 }
// 상태 변경하기(이외의 위치)
this.setState({ 변경할 속성: 값})

#### **이벤트 연결하기**
- 컴포넌트에 이벤트를 연결할 때,
- 1. 메소드를 선언
- 2. 메소드에 this를 바인드
- 3. render() 메소드에서 출력하는 태그의 이벤트 속성에 메소드를 입력해 연결
> class App extends React.Component {
  constructor (props) {
     super(props)
     this.메소드 이름 = this.메소드 이름.bind(this)
  }

  render() {
    return <h1 이벤트 이름={this.메소드 이름}></h1>
  }

  메소드 이름(event) {
    // 이벤트가 호출될 때 실행할 코드
  }
}

#### **스타일 지정하기**
> render() {
  const style = { }
  return <h1 style={style}글자</h1>
}
----------------리다기------------------
#### **감싸인 요소**
- 컴포넌트에 여러 요소가 있다면 반드시 부모 요소 하나로 감싸야 한다.
> Virtual DOM에서 컴포넌트 변화 감지시 효율적으로 비교할 수 있도록 하나의 DOM 트리 구조로 이루어져야 한다는 규칙이 존재

- 꼭 div가 아니어도 Fragment 사용 가능

#### **자바스크립트 표현**
- JSX 내부에서 코드를  {}로 감싸면 된다.

#### **if문 대신 조건부 연산자**
JSX 내부의 자바스크립트 표현식에서는 if문 사용 불가, 따라서 외부에서 사전에 값을 설정 or {}안에 조건부 연산자 사용

### **props**

- props는 peoperties를 줄인표현으로 텀포넌트 속성을 설정할 때 사용하는 요소이다.
- props값은 해당 컴포넌트를 불러와 사용하는 부모 컴포넌트(현재는 App컴포넌트)에서 설정 가능
1. JSX 내부에서 props 렌더링
2. 컴포넌트를 사용할 때 props 값 지정하기
3. props 기본값 설정: defaultProps
> props 값을 지정하지 않았을 때 보여주는 기본값 설정
> > 컴포넌트 이름.defaultProps = {}
4. 태그 사이의 내용을 보여주는 children
> {태그 이름 or 컴포넌트 이름.children}

### **함수형 컴포넌트에서 useState 사용하기**

#### **배열 비구조화 할당**
> const array = [1, 2];
> const one = array[0];
> const two = array[1];
- 위 코드가 아래처럼 비구조화 할당 가능
> const array = [1, 2];
> const [one, two] = array;

#### **useState 사용하기**

- useState 함수의 인자에는 상태의 초깃값을 넣는다(객체가 아니어도 가능)
- 한 컴포넌트에서 여러 번 사용도 가능

4---------------------------------------------------------------------------------
### **이벤트 핸들링**

#### **리액트의 이벤트 시스템**

- 이벤트를 사용할 때 주의 사항
1. 이벤트 이름은 카멜 표기법으로 작성한다.
> ex) HTML의 onclick은 리액트에서는 onClick으로 작성해야 함
2. 이벤트에 실행할 자바스크립트 코드를 전달하는 것이 아니라, 함수 형태의 값을 전달한다.
> 이벤트 설정시 함수 형태의 객체를 전달
3. DOM 요소에만 이벤트 설정 가능
> div, button 등의 DOM 요소에는 이벤트 설정 가능, 하지만 직접 만든 컴포넌트에는 설정 불가
> > <MyComponent onClick={doSomething}/> 불가능
> > props를 컴포넌트 내부 DOM 이벤트로 설정은 가능
> > <div onClick={this.props.onClick}> { } </div>

5---------------------------------------------------------------------------------------
### **ref: DOM에 이름 달기**

#### **ref는 어떤 상황에서 사용해야 할까?**

- DOM을 꼭 직접적으로 건드려야 할 때 사용한다.

**DOM을 꼭 사용해야 하는 상황**
> - 특정 input에 포커스 주기
> - 스크롤 박스 조작하기
> - canvas 요소에 그림 그리기 등
> > 이를 위해 ref를 사용한다.

#### **ref 사용**

- 콜백 함수를 통한 ref 설정
> ref를 달고자 하는 요소에 ref라는 콜백 함수를 props로 전달
> > <input ref={(ref) => {this.input=ref}}/>

- createRef를 통한 ref 
> - 컴포넌트 내부에서 멤버 변수로 React.createRef()를 담아야 한다.
> - 그리고 해당 멤버 변수를 ref를 달고자 하는 요소에 ref props로 넣어주면 설정 끝
> input = React.createRef();
> > - 추후 ref를 설정해 준 DOM에 접근하려면 this.input.current를 조회하면 된다.
> > this.input.current.focus();

#### **컴포넌트에 ref 달기**

> <MyComponent 
>   ref={(ref) => {this.myComponent=ref}}
> />
> > MyComponent 내부의 메서드 및 멤버 변수에도 접근 가능

**컴포넌트에 메서드 생성**

- 자바스크립트로 스크롤바를 내릴 때는 DOM 노드가 가진 다음 값들을 사용한다.
> - scrollTop: 세로 스크롤바 위치(0~350)
> - scrollHeight: 스크롤이 있는 박스 안의 div 높이(650)
> - clientHeight: 스크롤이 있는 박스의 높이(300)