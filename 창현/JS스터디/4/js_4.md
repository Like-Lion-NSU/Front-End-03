# JS 스터디 4주차
## 7. 문서 객체 모델
<hr/>

### 7-1. 문서 객체 조작하기
#### 1. DOMContentLoaded 이벤트
> * 웹브라우저가 문서 객체를 모두 읽고 나서 실행하는 이벤트

#### 2. 문서 객체 가져오기
> * document.body : HTML문서의 body요소를 읽어들임
> * document.head : HTML문서의 head요소를 읽어들임
> * document.title : HTML문서의 title요소를 읽어들임
> * document.querySelector(선택자) : head또는 body내부의 요소하나에 접근
> * document.querySelectorAll(선택자) : head또는 body내부의 여러 요소에 접근
>   * '선택자'라고 쓴 괄호안에는 CSS선택자를 입력.
>   * 예시) 태그선택자, 클래스선택자, 아이디선택자
>   * querySelectorAll 같은경우 이를 활용하기 위해 Foreach()를 통해 접근

#### 3. 글자 조작하기
> * 문서 객체.textContent : 입력된 문자열을 그대로 넣음
> * 문서 객체.innerHTML : 입력된 문자열을 HTML형식으로 넣음

#### 4.속성 조작하기
> * 문서 객체.setAttribute(속성 이름,값) : 특성 속성에 값을 지정
> * 문서 객체.getAttribute(속성 이름) : 특정 속성을 추출
> * '객체.속성이름=값' 을 통해 조작가능

#### 5. 스타일 조작하기
> * style속성을 사용
> * 문서 객체.style.속성(JS표기법)
> * 문서 객체.style.['속성'(JS표기법)]
> * 문서 객체.style.['속성'(CSS표기법)]
> * JS표기법
>   * '-'기호를 제거하고 '-'기호 뒤의 알페벳을 대문자로 변경
>   * background-color -> backgroundColor

#### 6. 문서 객체 생성하기
> * document.createElement(문서 객체 이름) 
>   * 문서 객체를 생성하고 문서 객체가 바로 배치되는건 아님
>   * 문서를 어떤 문서 아래에 추가할지를 지정해줘야함
> * 부모 객체.appendChild(자식객체) : 어떤 부모 객체 아래에 자식 객체를 추가

#### 7. 문서 객체 이동하기
> * '부모객체.appendChild(자식객체)'를 통해 다른 문서 객체에 추가하면 문서 객체가 이동

#### 8. 문서 객체 제거하기
> * 부모 객체.removeChild(자식객체) : 문서 객체를 제거
> *  문서 객체.parentNode.removeChild(문서 객체) : 부모 객체와 이미 연결된 문서 객체의 경우 parentNode속성으로 부모 객체에 접근 가능하여부모객체에 접근하여 문서 객체를 삭제할 수 있음

#### 9. 이벤트 설정하기
> * 문서 객체 생성 및 클릭,마우스를 위에 올려두는 것을 '**이벤트** 가 발생한다' 라고 함
> * **문서 객체.addEventListener('이벤트 이름', 콜백 함수)** : 이벤트가 발생할때 실행할 함수
> * addEventListener함수에서'( )'안의 콜백함수를 **이벤트리스너** 또는 **이벤트핸들러**라고함
> * **문서 객체.removeEventListener('이벤트 이름',콜백 함수)** : 이벤트를 제거
<hr/>

### 7-2. 이벤트 활용
#### 1. 이벤트 모델
> * addEventListener() 
>   * 표준 이벤트 모델
>   ```
>   document.body.addEventListener('keyup',()=>{
>    
>   })
>   ```
>   * 고전 이벤트 모델: on으로 시작하는 속성에 함수를 할당
>   ```
>   document.body.onkeyup=(event) => {
>    
>   }
>   ```
>   * 인라인 이벤트 모델
>   ```
>   <body onkeyup="listener(event)">
>   </body>
>   ```
#### 2. 키보드 이벤트
> * keydown : 키가 눌릴때 실행, 꾹누르고 있을때, 입력될때 실행
> * keypress : 키가 입력되었을때 실행
> * keyup : 키보드에서 키가 떨어질 때 실행
> * 키보드 이벤트의 속성
>   * code : 입력한키
>   * keyCode : 입력한 키를 나타내는 숫자
>   * altKey : Alt키를 눌렀는지
>   * ctrlKey : Ctrl키를 눌렀는지
>   * shiftKey : Shift키를 눌렀는지

#### 3. 이벤트 발생 객체
> * 이벤트를 발생시킨 객체에 접근하는 법
>   * event.currentTarget 속성을 사용
>   * this 키워드를 사용 

#### 4. 글자 입력 양식 이벤트
> * 조기리턴 : 중간에 예외가 발생했을 때 return 키워드를 사용하여 이후의 코드를 실행시키지 않음
> * 정규표현식
> * change이벤트  
>   * 글자를 입력할때 focus상태에서 글자를 입력하고 선택을 해제할대 blur상태로 바뀌는 데 이때 change 이벤트가 발생. 
>   * 글자를 입력할때는 change이벤트가 발생하지 않음
> * 드롭다운 목록
>   * option[index] : option 태그가 출력
>   * multiple : select태그에 multiple속성을 주면 중복 선택이 가능
> * 체크 박스 & 라디오버튼
>   * checked : 체크박스의 체크 상태를 확인

#### 5. 기본 이벤트 막기
> * preventDefault() : 기본이벤트제거
>   * 링크 클릭시 이동, 제출버튼클릭시 이동. 이미지 우클릭시 컨텍스트메뉴 출력 등
>   * 이를 통해 이미지 불펌 방지를 구현가능

#### localStorage객체
> * 웹브라우저에 데이터 저장
> * **localStorage.getItem(키)** : 저장된값 추출
> * **localStorage.setItem(키, 값)** : 값 저장
> * **localStorage.removeItem(키)** : 특정 키 제거
> * **localStorage.clear()** : 저장된값 모두 제거 