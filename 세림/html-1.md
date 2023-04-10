## HTML  정리
------------------
###  HyperText Markup Language
&nbsp; &nbsp; : &nbsp; markup작업을 통해 태그로 텍스트에 이름 부여해주기

<br>

### HTML 속성 
&nbsp; &nbsp; 기본 구성

- 여는 태그 안에 <태그 속성이름="속성값">
- 속성을 추가할 때마다 한 칸 띄어쓰기

<br>

### HTML 주석
&nbsp; &nbsp; : &nbsp; 코드 작성은 되어있으나 브라우저에는 보이지 않게 함

<br>
&nbsp; &nbsp; 기본 구성

- < !-- 내용내용내용 -->
- 단축키 : ctrl + / 

<br>

### HTML 기본구조
 - 단축키

 <br>

### <.HEAD>

###### ~~(실제로 사용할때는 .을 빼고 사용하자)~~

- 브라우저 화면에는 안 보임
- 속성, 인코딩 등 설정과 관련된 항목을 집어넣음

<br>

### <.BODY>

- 브라우저에서 실제로 눈에 보여지는 곳

<br>

### 블록 요소 

&nbsp; &nbsp; : &nbsp; 면을 만들어 줄을 바꾼 것처럼 보이게 함

- <.hn> : 제목 지정
    - 숫자에 따라 사이즈가 달라짐 (최대 6까지 지정 가능)
    - 주로 h3 까지만 사용
    - 폰트 사이즈 조절 용도로 사용 X

######  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;n에는 1~6까지의 숫자가 들어감

- <.p> : 글/본문
- <.ol> : 순서가 있는 리스트
- <.ul> : 순서가 없는 리스트
- <.li> : 리스트 생성
- <.div> : 다양한 요소를 묶어 그룹화 시킴
    - 그룹화 한 것끼리 한꺼번에 동일한 효과 적용 가능
    - 보통 class를 부여해 css나 java에서 이용

<br>

### 인라인 요소

&nbsp; &nbsp; : &nbsp; 선을 만들어 줄을 바꾼 것처럼 보이게 함

- <.a> : 링크 걸기
    - ex) <.p><.a href="연결할 링크"> 내용내용 <./a><./p>
    - 새 창에서 열고 싶을 땐 <.a> 안에 target="_blank" 넣기
- <.span> : 텍스트 중 일부만 선택
    - 예를 들어 <.p> 안에 <.span> 을 넣고 효과를 줄 경우 전체가 아닌 <.span> 안에 있는 텍스트만 효과를 줄 수 있게 됨 
    - 보통 class를 부여해 css나 java에서 이용

<br>

### 기타

- <.br> : 줄바꿈 (=enter)
- HTML에서 실수로 전체적인 포맷이 꼬여 어디서부터 고쳐야 될 지 모를 때 

<br>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;마우스 우클릭 &nbsp;&nbsp; → &nbsp;&nbsp; format document