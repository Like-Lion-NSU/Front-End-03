# WEEK 4

## 7-1

### 1.

    2번

### 2.

     1. H1 , #HEADER
     2. SPAN , .ACTIVE
     3. #NAME-INPUT , INPUT

### 3.

    4번

    1. innerText = 불필요한 공백을 제외하고 글자값을 가져옴
    2. textContent = 모두 가져옴
    3. innerHTML = innerText와 다르게 전체 값을 가지고 온다.
    4. htmlCOntent = 아무런 의미 없는 글자

### 4.

    1. borgerRadius
    2. fontFamily
    3. lineHeight
    4. boxSizing

---

## 7-2

### 1.

    a-3 / b-2 / c-1

### 2.

    3번

### 3.

    a-2 / b-1 / c-3 / d-4

### 4.

    1번

### 5.

    2번 3번

### 6.

    회원가입 창
     = isEmail 로 이메일 확인
     = checked 로 성별과 회원가입 동의 받기
     = select 로 생년월일 선택

---

## 8-1

### 1.

    1번 = 구문오류

    2번 = 타입에러
    3번 = 타입에러
    4번 = undefined

### 2.

    3번

    try / catch / finally 순으로 작성한다.

### 3. (어려운디...)

    1번 3번


    구문으로 처리할 수 없는 건 = 구문 오류 ,

---

    try - catch -finally
    try {
    /*
      프로그램에서 사용하는 일반적인 코드를 입력합니다.
      코드를 실행 중 에러가 나면 그 자리에서 중단되고 catch문으로 이동합니다.
      오류가 없다면 try 안의 구문을 모두 실행합니다.
    */
    } catch(Exception e) {
    /*
      try에서 오류가 나면 catch안의 내용을 실행합니다.
      try에 오류가 없다면 catch는 실행하지 않습니다.
    */

     try문법에서 catch와 finally는 둘 중 하나는 생략이 가능하지만, 둘 다 생략은 불가능합니다.
    }

---

## 8-2

### 1.

    4번

### 2.

    1번
    3번?

### 3.

    try 구문입니다.
    catch 구문입니다.
    finally 구문입니다.


    **throw**문은 사용자 정의 예외를 발생(throw)할 수 있습니다. 예외가 발생하면 현재 함수의 실행이 중지되고 (throw 이후의 명령문은 실행되지 않습니다.), 제어 흐름은 콜스택의 첫 번째 catch 블록으로 전달됩니다. 호출자 함수 사이에 catch 블록이 없으면 프로그램이 종료됩니다.

---

## 9-1

### 1.

    2번

### 2.

    - 병원 정보 어플
        - 병원정보
            - 전화번호
            - 이름
            - 위치
        - 의료진 정보
            - 전공
            - 경험
            - 이름
            - 대학
        - 약국 정보
            - 위치
            - 가격
            - 약국 번호

### 3.

     1. 병원 정보는 전공, 전화번호 ,이름 , 위치가 있다. 하지만 맛집 정보 어플리케이션에서는 전공 같은 것은 크게 중요하지 않다.

### 4.

    1. 원하는 병원의 위치와 이름을 선택한 후 편한 날짜와 시간대를 골라 예약하는 기능을 넣을 수 있다.
    2. 후에 마이페이지에서 예약 정보를 확인할 수 있어야함

---

## 9-2

### 1.

    2번

### 2.

    2번

### 3.

    1번

### 4.

    4번

### 5.

    4번

### 6.

    Parent.test()메소드
    ChildA.test()메소드
    ChildB.test()메소드
    Parent.test()메소드
