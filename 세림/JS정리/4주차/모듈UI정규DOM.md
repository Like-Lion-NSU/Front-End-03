## 모듈

- module <br>
코드의 재활용성을 높이고, 유지보수를 쉽게 할 수 있는 다양한 기법들이 사용되는데, 그 중 하나가 코드를 여러 개의 파일로 분리하는 것이다. <br>
효과
- 자주 사용되는 코드를 별도의 파일로 만들어 필요할 때마다 재활용 할 수 있다.
- 코드를 개선하면 이를 사용하고 있는 모든 애플리케이션의 동작이 개선된다.
- 코드 수정 시에 필요한 로직을 빠르게 찾을 수 있다.
- 필요한 로직만을 로드해서 메모리의 낭비를 줄일 수 있다.
- 한번 다운로드 된 모듈은 웹브라우저에 의해 저장돼서 동일한 로직을 로드할 때 시간과 네트워크 트래픽을 절약할 수 있다.

<br><br>

※순수한 자바스크립트엥서는 모듈이라는 개념이 분명하게 존재하진 않음. 하지만 구동되는 호스트 환경에 따라 서로 다른 모듈화 방법이 제공되고 있음.

<br>

### 호스트 환경

자바스크립트가 구동되는 환경 <br>
자바스크립트 문법을 통해 서버시스템을 제어(node.js)하거나 구글의 제품(google apps script)을 제어할 수 있다.

<br>

## UI와 API, 문서

### API

Application Programming Interface
- 프로그램이 동작하는 환경을 제어하기 위해 환경에서 제공되는 조작 장치
- 자바 스크립트에서는 JS자체의 API와 JS가 동작하는 호스트 환경의 API로 구분된다.

### 레퍼런스와 튜토리얼
프로그래밍을 공부하기 위한 자료
- 레퍼런스 reference
    - 명령어의 사전
- 튜토리얼 tutorial
    - 언어의 문법을 설명

### 자바스크립트 API
-----
- [ECMA script](https://www.ecma-international.org/publications-and-standards/standards/ecma-262/)
- [생활코딩 자바스크립트 사전](https://opentutorials.org/course/50)
- [자바스크립트 레퍼런스(MDN)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference)


### 호스트 환경 API
----
- [웹브라우저 API](https://developer.mozilla.org/en-US/docs/Web/API)
- [node.js](https://nodejs.org/ko/docs)
- [google apps script](https://developers.google.com/apps-script/api/concepts?hl=ko)
<br>

## 정규표현식

regular expression <br>
- 문자열에서 특정한 문자를 찾아내는 도구

- 수십 줄이 필요한 작업을 한 줄로 끝낼 수 있음

### 생성

1. 컴파일 compile
    - 검출하고자 하는 패턴을 만드는 일
2. 실행 execution


### 정규표현식 리터럴

```java script
let pattern = /a/;
```
찾고자 하는 것을 슬래시 안에 넣어서 찾는 것



### 정규표현식 객체 생성자

```java script
let pattern = new RegExp('a');
```
new RegExp뒤에 괄호와 작은 따옴표 사이에 찾고자 하는 것을 넣어 찾는 것

/a/  =  new RegExp('a')

<br>

## DOM

Document Object Model <br>
- 모든 요소와 요소의 어트리뷰트, 텍스트를 각각의 객체로 만들고 이들 객체를 부자 관계를 표현할 수 있는 트리 구조로 구성
    - 자바스크립트를 통해 동적으로 변경
    - 변경된 DOM은 렌더링에 반영
    - 플랫폼/프로그래밍 언어 중립

1. HTML 문서에 대한 모델 구성
    - 브라우저는 HTML 문서를 로드한 후 해당 문서에 대한 모델을 메모리에 생성
    - 모델은 객체의 트리로 구성되는데 이것을 DOM tree라고 함

2. HTML 문서 내의 각 요소에 접근 / 수정
    - DOM은 모델 내의 각 객체에 접근하고 수정할 수 있는 프로퍼티와 메소드를 제공
    - DOM이 수정되면 브라우저를 통해 사용자가 보게 될 내용 또한 변경

### DOM API
웹 문서의 동적 변경을 위해 DOM은 프로그래밍 언어가 자신에 접근하고 수정할 수 있는 방법을 제공
- 일반적으로 프로퍼티와 메소드를 갖는 자바스크립트 객체로 제공
- 동적으로 웹페이지를 변경하기 위한 유일한 방법은 메모리 상에 존재하는 DOM을 변경하는 것

### DOM Tree
- 브라우저가 HTML 문서를 로드한 후 파싱하여 생성하는 모델
- 모든 요소, 어트리뷰트, 텍스트는 하나의 객체이며 Document 객체의 자식
- 총 네 개의 노드로 구성
    1. 문서 노드(Document Node)
        - 트리의 최상위에 존재
        - 요소, 어트리뷰트, 텍스트 노드에 접근하려면 문서 노드를 통해야 함
        - DOM tree에 접근하기 위한 시작점
    
    2. 요소 노드(Element Node)
        - =HTML 요소 : 중첩에 의해 부자 관계를 가지며 이 부자 관계를 통해 정보를 구조화, 즉 요소 문서의 구조를 서술한다고 말 할 수 있음
        - 어트리뷰트, 텍스트 노드에 접근하려면 먼저 요소 노드를 찾아 접근해야 함
        - 모든 요소 노드는 요소별 특성을 표현하기 위해 HTMLElement 객체를 상속한 객체로 구성

    3. 어트리뷰트 노드(Attribute Node)
            - HTML 요소의 어트리뷰트를 표현
            - 해당 어트리뷰트가 지정된 요소의 자식이 아니라 해당 요소의 일부로 표현
            - 해당 요소 노드를 찾아 접근하면 어트리뷰트를 참조, 수정 가능

    4. 텍스트 노드(Text Node)
        - HTML 요소의 텍스트를 표현
        - 텍스트 노드는 요소 노드의 자식이며 자신의 자식 노드를 가질 수 없음
        - DOM tree의 최종단

- 개발자도구(F12)의 Elements --> Properties 선택하면 확인 가능 (크롬)

### DOM Query
1. 하나의 요소 선택 <br>
    1-1. document.getElementById(id) 
    - id 어트리뷰트 값으로 요소 노드를 한 개 선택. 복수가 선택된 경우, 첫번째 요소만 반환
    - Return: HTMLElement를 상속받은 객체
    - 모든 브라우저에서 동작<br> 

    1-2. document.querySelector(cssSelector) <br>
    - CSS 셀렉터를 사용하여 요소 노드를 한 개 선택, 복수개가 선택된 경우, 첫번째 요소만 반환
    - Return: HTMLElement를 상속받은 객체
    - IE8 이상의 브라우저에서 동작 <br><br>


2. 여러 개의 요소 선택<br>
    2-1. document.getElementsByClassName(class)
    - class 어트리뷰트 값으로 요소 노드를 모두 선택
    - 공백으로 구분하여 여러 개의 class를 지정
    - Return: HTMLCollection (live)
    - IE9 이상의 브라우저에서 동작 <br>

    2-2. document.getElementsByTagName(tagName)
    - 태그명으로 요소 노드를 모두 선택
    - Return: HTMLCollection (live)
    - 모든 브라우저에서 동작<br>

    2-3. document.querySelectorAll(selector)
    - 지정된 CSS 선택자를 사용하여 요소 노드를 모두 선택
    - Return: NodeList (non-live)
    - IE8 이상의 브라우저에서 동작 <br><br><br>

### DOM Traversing
1. parentNode
    - 부모 노드를 탐색
    - Return: HTMLElement를 상속받은 객체
    - 모든 브라우저에서 동작

2. firstChild, lastChild(firstElementChild, lastElementChild)
    - 자식 노드를 탐색
    - Return: HTMLElement를 상속받은 객체
    - IE9 이상의 브라우저에서 동작

3. hasChildNodes()
    - 자식 노드가 있는지 확인하고 Boolean 값을 반환
    - Return: Boolean 값
    - 모든 브라우저에서 동작
4. childNodes
    - 자식 노드의 컬렉션을 반환 - 텍스트 요소를 포함한 모든 자식 요소를 반환
    - Return: NodeList (non-live)
    - 모든 브라우저에서 동작
5. children
    - 자식 노드의 컬렉션을 반환 - Element type 요소만을 반환
    - Return: HTMLCollection (live)
    - IE9 이상의 브라우저에서 동작