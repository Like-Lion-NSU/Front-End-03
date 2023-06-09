# **자바스크립트 요약**
------------------
### **표현식과 문장**

자바스크립트에서 값을 만들어내는 간단한 코드를 **표현식**이라고 한다.
하나 이상의 표현식이 모이면 **문장**이 된다.
자바스크립트에서 정해놓은 특별한 의미가 있는 단어를 **키워드**라고 한다.
**식별자**는 주로 변수명이나 함수명으로 사용된다.
> **주석**은 프로그램 코드를 설명할 때 쓰인다. 진행에는 영향을 주지 않는다.
> > // 형식으로 사용한다.

#### **출력** 
~경고창~에 출력하는 방법은 ~alert()함수~ 사용한다.
~콘솔~에 출력하는 방법은 ~console.log()메소드~를 사용한다.

### **자료와 변수**

프로그래밍에서 프로그램이 처리할 수 있는 모든 것을 **자료**라고 부른다.
이를 형태에 따라 나눠 놓은 것을 **자료형**이라고 한다.

다양한 종류의 자료형을 제공하는데 가장 기본적이고 많이 사용하는 것
+ 숫자
+ 문자열
+ 불 (boolean)

#### **문자열 자료형**
alert()함수 또는 console.log()메소드의 매개변수를 입력하는 것과 같은 문자들의 집합을 **문자열**이라고 한다.
자바스크립트에서는 문자가 하나든 여러 개든 모두 **문자열 자료형**이라고 한다.

> 함수와 메소드는 특정 기능을 동작시키도록 작성된 코드의 집합이다.

> **이스케이프 문자**는 아래와 같은 기능을 갖는다.
> > 1. \n: 줄바꿈
> > 2. \t: 탭
> > 3. 이스케이프 문자 x2 : 역슬래시 그 자체를 의미한다.

#### **문자열 연산자**

- "문자열 + 문자열" 에서 '+'는 **문자열 연결 연산자** 라고 불리운다.

- 문자열[숫자]
- - 자열 내부의 문자 하나를 선택할 때는 **문자 선택 연산자**를 사용한다.
- -  > 문자열 뒤에 대괄호를 입력하고 괄호 안에 선택할 문자의 위치를 숫자로 지정한다. 이때 위치를 나타내는 숫자를 **인덱스**라고 부른다.

문자열 내부의 문자 개수를 **문자열 길이**라고 표현한다. 
- length속성을 사용한다.

#### **숫자 자료형**
- 사칙 연산자를 사용가능(+, -, *, /)
- 나머지 연산자(%)로 나머지 연산도 가능

#### **불 자료형**

자바스크립트에서는 참과 거짓 값을 표현할 때 **불 자료형**을 사용한다.
true와 false 2가지로 나뉜다. 간단하게 2가지만 입력하면 불을 만들 수 있음

> 비교 연산자
> > === : 양쪽이 같다.
> > !== : 양쪽이 다르다.

__불부정 연산자__

1. 논리 부정 연산자 !는 참을 거짓으로, 거짓을 참으로 바꾼다.
2. 논리곱 연산자 &&는 양쪽 변의 모두 값이 true일때만 true로 결과를 내고 나머지는 다 false이다.
3. 논리합 연산자 ||는 양쪽 변의 값 중 하나만 true여도 true를 결과로 낸다.


#### **자료형 검사**

숫자, 문자열, 불 같은 자료형을 확인할 때는 typeof 연산자를 사용한다. (단항 연산자이다.)
===연산자와 !==연산자는 **값과 자료형**이 같은지를 비교한다.
==연산자와 !=연산자는 **값**이 같은지를 비교하는 연산자이다.


여기서 말하는 단항 연산자는 피연산자의 개수에 때라 **단항, 이항, 삼항연산자**로 나뉜다.

### 상수와 변수

상수는 '항상 같은 수'라는 의미를 가지고, 값에 이름을 한 번 붙이면 값을 수정할 수 없다.
변수는 '변할 수 있는 수'로 값을 수정할 수 있다.

상수를 만드는 과정을 선언이라고 표현하고, const 키워드로 선언한다.
변수를 만들 때는 let 키워드를 사용한다.

> 변수에 적용할 수 있는 연산자
> > += : 기존 변수의 값에 값을 더한다.
> > -= : 기존 변수의 값에 값을 뺀다.
> > *= : 기존 변수의 값에 값을 곱한다.
> > /= : 기존 변수의 값에 값을 나눈다.
> > %= : 기존 변수의 값에 나머지를 구한다.

**증강 연산자**

- 변수++ : 기존의 변수 값에 1을 더한다(후위).
- ++변수 : 기존의 변수 값에 1을 더한다(전위).
- 변수-- : 기존의 변수 값에 1을 뺀다(후위). 
- --변수 : 기존의 변수 값에 1을 뺀다(전위).

여기서 말하는 **전위**는 문장을 실행하기 전에 값을 더하는 것을 말한다.
반대로, 후위는 실행하고 나서 값을 더하는 것을 뜻한다.

#### undefined 자료형

상수와 변수를 사용하면 undefined 자료형을 확인할 수 있다.

1. 상수와 변수로 선언하지 않은 식별자
1. 값이 없는 변수

### 자료형 변환

#### 문자열 입력

- 문자열 자료형을 입력할 때 사용하는 함수는 prompt()이다. (메시지 문자열, 기본 입력 문자열)

- 문자열 외에 불 자료형도 값으로 입력받을 수 있다. 이때는 confirm()함수를 사용한다. (메시지 문자열)

- 다음 자료형을 숫자 자료형으로 변화낳ㄹ 때는 Number()함수를 사용한다.
> 다른 문자가 들어있어서 숫자로 변환할 수 없는 문자열의 경우 NaN이라는 값을 출력한다.

- 다른 자료형을 문자열 자료형으로 변환할 때는 String()함수를 사용한다.

- 다른 자료형을 불 자료ㅇ으로 변환할 때는 Boolean()함수를 사용한다.