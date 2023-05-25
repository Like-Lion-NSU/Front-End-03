# JS 스터디 5주차
## 10. 리액트
<hr/>

### 10-1. 리액트의 기본
#### 1. 리액트 라이브러리 사용 준비
> * 우리는 리액트 설치.. ㅎㅎ
> * '바벨'이라는 라이브러리 사용. 
> * 다음 코드와 같이 script태그가 바벨을 적용하겠다고 선언
>    ```
>   <script type="text"></script>
>   ```

#### 2. 루트 컴포넌트 출력하기.
> * 리액트 : 사용자 인터페이스를 쉽게 구성할 수 있게 도와주는 라이브러리
> * 컴포넌트 : 리액트에서 화면에 출력되는 요소
> * 루트 컴포넌트 : 가장 최상위에 배치하는 컴포넌트   
> * 컴포넌트 생성하기
>   ```
>   <컴포넌트 이름></컴포넌트 f이름>
>   ```
> * 컴포넌트 출력하기
>   ```
>   ReactDom.render(컴포넌트, 컨테이너)
>   ```
> * JSX : 자바스크립트 코드 내부에 HTML 코드를 사용
> * 바벨REPL 도구를 사용하여 확인.

#### 3. JSX 기본 문법
> * 표현식 출력하기
>   ```
>   <태그>{표현식}</태그>
>   <태그 속성={표현식} />
>   ```

#### 4. 클래스 컴포넌트
> * 클래스 컴포넌트 : 클래스로 만드는 컴포넌트
>   ```
>   class 컴포넌트 이름 extends React.Component{
>    render(){
>     return <태그> 출력할 내용 </태그>
>    } 
>   }
>   ```
> * 함수 컴포넌트 : 함수로 만드는 컴포넌트
> * 'this.props.속성' 을 통해 사용자 임의로 속성을 지정하고 값을 전달 할 수 있음

#### 5. 컴포넌트의 기본적인 속성과 매소드
> * 클래스의 메소드 오버라이드
>   ```
>   Class App extends React.Component{
>    constructor(pops){
>       super(props)
>       생성자 코드
>    } 
>
>    render(){
>       출력할 코드
>    }
>   
>    componentDidMount(){
>       컴포넌트가 화면에 출력될 때 호출
>    }
>   
>    componentWillUnmount(){
>       컴포넌트가 화면에 제거될 때 호출
>    }
>   } 
>   ```
>
> * state속성
>   * 출력할 값을 저장
>   * state 속성값을 변경할때는 ***setState()메소드*** 사용
>   ```
>   this.state = { 속성 : 값}
>   this.setState({ 변경할속성 : 값})
>   ```

#### 6. 이벤트 연결하기
> 1. 메소드 선언
> 2. 메소드에 this를 바인드
> 3. render() 메소드에서 출력하는 태그의 이벤트 속성에 메소드를 입력해서 이벤트를 연결
>       ```
>       Class App extends React.Component{
>        constructor(pops){
>         super(props)
>         this.메소드이름= this.메소드이름.bind(this)
>        } 
>
>        render(){
>           return <태그 이벤트이름={this.메소드이름}></태그>
>        }
>
>        메소드 이름(event){
>           이벤트가 호출될 때 실행할 코드
>        }
>       }
>       ```

#### 7. 스타일 지정하기
> * style 속성에 객체를 지정
>   ```
>   render() {
>    const style ={ }
>    return <태그 style={style}>글자</태그>
>   } 
>   ```
> * 숫자를 입력할때 단위를 입력하지 않아도 됨

#### 8. 컴포넌트 배열
> * 컴포넌트를 요소로 갖는 배열을 사용해서 한번에 여러개의 컴포넌트 출력
<hr/>

### 10-2. 리액트와 데이터
> * 컴포넌트끼리의 커뮤니케이션
#### 1. 여러개의 컴포넌트 사용하기
> * APP컴포넌트와 Item 컴포넌트의 사용
>    ```
>    class 클래스A extend React.component{
>       render(){
>           return 클래스 B
>       }
>    }
>      
>    class 클래스B exten React.component{
>       render(){
>           return 코드
>       }
>    }
>    ```
> * 부모 컴포넌트에서 자식 컴포넌트로 어떤 데이터를 전달할 때는 속성(this.props) 사용

#### 2.부모에게 자식의 state 속성 변경하기
> * 컴포넌트에 변경이 발생했을 때 호출되는 메소드
>   ```
>   componentDidUpdate(preProps){
>       if(preProps.value !== this.props.value){
>           this.setState({
>               value: this.props.value
>           })
>       } 
>   }
>   ```

#### 3. 자식에서 부모의 state 속성 변경하기 
> * 메소드 사용
> * 어려움..