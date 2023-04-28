# week 2 조건문

### 1-1 조건문이란?
  - 조건문 = 주어진 조건에 따라 어플리케이션 다르게 작동
  - 문법 
      ```html
      <script>
        if(true) {
          alert('1')
          alert('1')
          alert('1')
          alert('1')    
        }
                alert('1')
        </script>
      ```
      
      
     
## else

- if 만으로는 좀 더 복잡한 상황을 처리하는데 부족하다.

- 1 번 
    ```html
      <script>
        if(true) {
          alert('1')  
        }
            alert('2')
        </script>
      
      ouput alert=1 

    

    
      <script>
         if(true) {
          alert('1')  
        }
            alert('2')
        </script>
      ```
      output alert = 2

      * 만약 참이라면 if의 구간이 실행되지만 false일 떄는 작동하지 안흔다 


## else if
else if을 이용하면 조건문을 좀 더 풍부하게 할 수 있다. 
- p1
    ```html 
    <script>
        if(false){
            alert('1')
        } ;
        esle if (true){
            alert('2')
        } ;
        else if(ftrue){
            alert('3')
        } ;
        else{
            alert('4')
        };
        </script>
    ```
        outpout   alert = 2
        이미 작동된 js는 다음 줄에서도 작동하지 않는다. 


## 변수와 비교연산자 

- promprt = 어떠한 값을 사용자로부터 받을 수 있는 기능을 가진 



## 논리 연산자

- && = and
     + 좌항과 우항이 모두 참일 경우에만 참이 된다.
     + true && true = true
     + true && false = false
     + false && true = 실행 안됨
     + false && false = 실행 안됨
- || = or
      + true || true = true
      + true || false = true 
      + false || true = true
      + flase || false = false 
      
 - ! 
      + '!'는 부정의 의미로, Boolean의 값을 역전시킴 
      + true를 false로 false를 true로 만듬 
      + not 연산자라고 부른다. 
      
      
  ---   
      
 ## 6.반복문

### 1-1 while

- while (boolean데이터 타입) {
  반복해서 실행할 코드
  }

  - 저장되지 않은 작업이 있다면 모두 정리한 후에 이 명령을 실행해야함
  - 웹브라우저는 무한반복을 허용하지 않기 때문에 어느 정도 시간이 지나면 스크립트 종료여부를 물어볼 것이다.

- while 의 조건
  - true일때 실행
  - false일때 아무런 결과도 출력되지 않음

### 1-2 반복조건

- 반복 조건이 없으면 멈추지 않고 무한대로 실행됨

### 1-3 For

- for(초기화; 반복조건; 반복이 될때마다 실행되는 코드){
  반복해서 실행할 코드
  }
- i++ : 후위 연산
- ++i : 전위 연산

## 1-5 반복문의 제어

- break
  - 반복작업을 중간에 중단시키고플때
  - if(i === 5){
    break
    }
- continue
  - 실행을 중단하되 반복을 지속하게 하여면
  - if(i === 5){
    countinue;
    }

## 1-6 반복문 중첩

- 문자열 + 숫자 = 문자열 + 문자열이 됨
-

