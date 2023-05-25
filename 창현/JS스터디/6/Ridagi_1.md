# JS 스터디 6주차
## 리다기 1번째 주 
<hr/>

### 2.4 JSX문법
#### 2.4.1 감싸인 요소
> * 컴포넌트 내부는 하나의 요소로 감싸주어야함
> * div로 감싼 형태
>   ```
>   <div>
>     <h1>리액트 안녕!</h1>  
>     <h1>잘 작동하니?</h1>
>   </div>
>   ```
> * Fragment를 통해 꼭div를 사용안해도됌.
> * 코드 상단에 "import React, {Fragment} from 'react';"를 통해 Fragment라는 컴포넌트를 추가
>   ```
>   <>
>     <h1>리액트 안녕!</h1>  
>     <h1>잘 작동하니?</h1>
>   </>
>   ```

#### 2.4.2 자바스크립트 표현
> * 자바스크립트표현식을 작성하려면 jSX 내부에서 {}로 감싸면됨.
>   ```
>   function App() {
>       const name = ‘리액트‘;
>       return (
>       <>
>           〈h1〉{name} 안녕!〈/hl〉
>           〈h2>잘 작동하니?<〔/h2〉
>       </>
>       )；
>   }
>   ```


#### 2.4.3 If문 대신 조건부 연산자
> * JSX내부에서는 if문을 사용할 수 없음.
> * 조건부 연산자, 즉 삼항 연산자 사용.
>   ```
>   function App() {
>       const name = * 리액트, ；
>       return (
>           <div>
>           {name === ' 리액트, ? (
>               〈h1>리액트입니다.</h1>
>               ): (
>               <h2>리액트가 아닙니다.</h2>
>               )}
>           </div>
>       )
>   }
>   ```

#### 2.4.4 AND 연산자(&&)를 사용한 조건부 렌더링
> * 조건에 따른 렌더링
> * null을 렌더링하면 아무것도 보여주지않음.
>   ```
>   function App() {
>       const name = ‘뤼왝트';
>       return <div>{name === '리액트, &&〈hi〉리액트입니다.〈/h1>}〈/div〉；
>   }
>   ```
> * 위코드는 아무것도 안나옴 

#### 2.4.5 undefined를 렌더링하지않기
> * undefined를 반환하여 렌더링을 하면 오류가 발생.
> * 내부에서는 반환가능

#### 2.4.6 인라인스타일링
> * 스타일을 적용할 때는 문자열 형태를 넣는 것이 아니라 객체 형태로 넣어주어야함
> * 카멜표기법으로 작성
> * background-color 는 backgroundColor
> * 스타일 객체를 미리 선언하고 싶을때 div의 style값으로 지정
>   ```
>   function App() {
>       const name = ' 리액트, ；
>       return (
>           <div
>           style={{
>           backgroundcolor： 'black',
>           color： 'aqua'
>           }}
>           >
>           {name}
>           <div>
>       );
>   }
>   ```

#### 2.4.7 class 대신 className
> * HTML에서 CSS 클래스를 사용할때 class라는 속성을 설정, JSX에서는 class가 아닌 className으로 설정
>   ```
>   function App() {
>       const name = ' 리액트';
>       return <div className="react”>{name}</div>；
>   }
>   ```
> * class를 사용해도 적용은 되지만 개발자도구에서 경고발생.

#### 2.4.8 꼭닫아야하는 태그 
> * 태그사이에 별도의 내용이 들어가지 않는 경우 ***self-closing*** 태그를 사용.
> * 태그를 선언하면서 동시에 닫을 수 있음

#### 2.4.9 주석
> * 일반적인 자바스크립트와 주석을 작성할때는 다름.
> * {/* ``` */}와 같은 형식으로 작성
> * 태그 내부에서는 //를사용
<hr/>

### 3.3 props
#### 3.3.1 JSX 내부에서 props렌더링
> * props 값은 컴포넌트 함수의 파라미터로 받아와서 사용
>   ```
>   const MyComponent = props => {
>       return〈div〉안녕하세요, 제 이름은 {props.name}입니다.〈/div〉；
>   }；
>   ```

#### 3.3.2 컴포넌트를 사용할 때 props 값 지정하기
> * App 컴포넌트에서 MyComponent의 props값을 지정
>   ```
>   const App =()=>{
>   return 〈MyComponent name="React" />；
>   }；
>   ```

#### 3.3.3 props 기본값 설정: defaultProps
> * props값을 따로 지정하지 않았을 때 보여 줄 기본값을 설정하는 defaultProps
> * 
