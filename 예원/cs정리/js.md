# ch.1

## 1-1 실행방법과 실습환경

<br></br>

```html
<script>
    alert('hello world')
<script>
```

<br>
- 코드 script는 웹브라우저에게 지금부터는 자바스크립트 코드이기 때문에  자바스크립트의 문법에 따라서 해석해서 실행하라고 알려주는 태그이다.

- alert('Hello world')는 경고창에 Hello world라는 문구를 출력하라는 일종의 명령이다.
  <br></br>

---

## 1-2 출력 = 콘솔 사용법 = 개발자 도구

<br></br>

- 콘솔은 크롬의 검사 부분에 들어가서 사용할 수 있다.

- 자바스크립트 코드에서 에러가 발생한 경우 가장 우선적으로 살펴야 할 곳이다.

```html
<script>
    console.log ('hello world')
<script>
```

- 경고창 대신 콘솔 창에 hello world를 출력한다.
- console은 구현 단계에서 실제로 실행하는 것보다 간편하게 값을 확인하기 위해 사용된다.

- 관호 안에 들어가 있는 것을 매개변수라고 함
  <br></br>

---

<br></br>

## 1-3 주석

- 코드의 가독성을 높여주기 위한 설명을 추가하는 방법

         한 줄 주석은 // 다음에 작성

         여러 줄 주석은 /**/사이에 작성

         단축키 ctrl+/ 를 사용하면 그 줄의 모든 내용이 주석이 됨

## <br></br>

---

## 1-4 줄바꿈과 여백

<br></br>

- 줄바꿈

       ; (세미클론)은 명령어가 끝났음을 명시하는 기호

- 여백

         가독성을 높이기 위해 tab과 shift + tab 사용하여 여백을 만든다

---

## 2-1 수의 표현

- 자바스크립트에서는 큰따옴표나 작은따옴표가 붙지 않은 숫자는 숫자로 인식한다.

```html
<script>
    alert(1)   // 정수
    alert(1.1) // 실수
    alert(1+1)  // 2 출력
    alert(2*8)  // 16출력
    alert(6/2)  // 3 출력
<script>
```

---

<br></br>

## 2-2 수의 연산

```html
<script>
    Math.pow(3,2);       // 9,   3의 2승
    Math.round(10.6);    // 11,  10.6을 반올림
    Math.ceil(10.2);     // 11,  10.2를 올림
    Math.floor(10.6);    // 10,  10.6을 내림
    Math.sqrt(9);        // 3,   3의 제곱근
    Math.random();       // 0부터 1.0 사이의 랜덤한 숫자
<script>
```

## <br></br>

## 2-3 문자

<br></br>

- "" , '' 중의 하나로 감싸야 문자가 된다
  <br></br>

          INput = alert(typeof '1')
          Output =  string (문자열)


          Input = alert(typeof 1)
          Output =  number (숫자 )


          * 만약 문자열 안에 따옴표를 넣고 싶다면

          INput = alert('egoing's java script')
          Output = unexpected identifie // 문법 오류


          INput = alert('egoing\'s javascript')

           = 역슬래시 사용
           = 뒤에 있는 내용은 그냥 정보로써의 해석

---

<br></br>

## 2-4 문자 연산

    문자와 문자를 더할 때   =    alert("coding"+"every");

    문자와 문자 사이를 띄어쓰고 싶을 떄     =    alert("coding"+"  "+"every")

    문자의 길이를 구할 떄 문자 뒤에 .length를 사용한다.   =   alert("coding every".length)

---

<br></br>

## 3-1 변수

- 변수는 var로 선언한다.
- 현재는 var보다 let를 사용한다.
- 변수의 이름은 $, \_, 혹은 특수 문자를 제외한 모든 문자로 시작할 수 있다.

```html
<script>
    var a = 1;
    alert(a+1); //출력 2


    var first = 'coding';
    alert(first = "everything")  // coding everything
<script>
```

---

<br></br>

## 3-2 변수의 효용

- 변하지 않는 값과 변할 수 있는 값을 구분
- 코드의 길이를 줄이고 수정해야하는 양을 줄인다.

  ***

  <br></br>

## 기본 자료형

<br></br>

- 자료(data) : 프로그래밍에서 프로그램이 처리할 수 있는 모든 것
  <br></br>

- 자료형 : 자료 형태에 따라 나눠 놓은 것

  - 숫자 (number)
  - 문자열 (string)
  - 불 (boolen)

<br></br>

- 문자열 자료형
  - 문자열 : 문자들의 결합
  - 문자열 자료형

<br></br>

- 이스케이프 문자 (/) + 따옴표 앞에 특수한 기능을 수행

       + /n : 줄바꿈을 의미합니다.
       + /t : 탭을 의미합니다.
       + 역 슬래시 : 그 자체를 의미한다.

  <br></br>

- ex ) 안녕하세요
  - a[0] = 안
  - a[1] = 녕

## <br></br>

---

- 비교 연산자

## <br></br>

<br></br>

## 4-1 연산자

- 어떠한 작업을 컴퓨터에게 지시하기 위한 기호

       + : 더하기 연산자
       - : 빼기 연산자
       * : 곱하기 연산자
       / : 나누기 연산자

- true or false 값을 보여준다.

## 4-2 비교(1)

    === 양쪽이 같다.
    !== 양쪽이 다르다.
    > 오른쪽이 더 크다.
    < 왼쪽이 더 크다.

```html
<script>
  alert(1 == 2); //false
  alert(1 == 1); //true
  alert("one" == "two"); //false
  alert("one" == "one"); //true

  //===사용하기
  alert(1 == "1"); //true
  alert(1 === "1"); //false
</script>
```

## <br><br>

## 4-3 (비교)

- 일치 연산자로 === 좌항과 우항이 '정확'하게 같을 때 true 다르면 false가 된다.

       alert(1=='1');      // false
       alert(1==='1');     //true

<br><br>

- == + 좌항과 우항을 비교해서 서로 값이 같다면 true 다르다면 false가 된다. + 1을 true로 간주, 1이 아닌 수들을 false로 간주
  <br><br>
- ===
  - 일치 연산자로 === 좌항과 우항이 '정확'하게 같을 때 true 다르면 false가 된다.
  - 1과 true는 다름, '1'과는 다름

## <br><br>

## 4-4 부정과 부등호

- !=
  - !는 부정을 의미한다.
  - '!=' 같지 않다.

```html
<script>
  alert(1 != 2); //true
  alert(1 != 1); //false
  alert("one" != "two"); //true
  alert("one" != "one"); //false
</script>
```

- !==

  - '!=='는 '!='와 '=='의 관계와 같다.

- >
