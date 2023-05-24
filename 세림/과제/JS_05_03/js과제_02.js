const $blue = document.querySelector('#blue');
const $result = document.querySelector('#result');

// 시간 재는데 필요한 변수 선언
let startTime; 
let endTime;

const records = []; // 평균값을 내기 위한 배열 선언

$blue.addEventListener('click', (event) => { //태그에 입력한 클래스가 았는지 확인하고 true or false로 반환하는 것
    if (event.target.classList.contains('test')) { //$blue에서 test클래스 확인
        $blue.classList.remove('test'); // $blue에서 test클래스 제거
        $blue.classList.add('ready'); // $blue에서 ready클래스 추가
        $blue.textContent = '초록색이 되면 클릭하세요'; // 텍스트 추가

        timeoutId = setTimeout(function () {
            startTime = new Date (); // 시작하는 시간 기록
            $blue.classList.replace('ready', 'now'); // ready클래스 제거, now클래스 추가
            $blue.textContent = '클릭하세요'; // 텍스트 추가
            }, Math.floor(Math.random() * 1000) + 2000); // 2000 ~ 3000(2 ~ 3sec) 사이 시간 랜덤 출력
    
    } else if (event.target.classList.contains('ready')) { //$blue에서 ready클래스 확인
        clearTimeout(timeoutId); // 시간 초기화
        $blue.classList.replace('ready', 'test'); // ready지우고 test 추가
        $blue.textContent = '너무 성급하시군요';

    } else if (event.target.classList.contains('now')) { // now클래스 확인
        endTime = new Date (); // 끝나는 시간 설정

        const current = endTime - startTime; // 걸린시간을 current로 저장
        records.push(current); // records에다가 current값을 저장함

        let sum = (records.reduce((a, c) => { // 평균값 구하기
            return a + c;
        }, 0) / records.length);

        const average = sum; // 평균값 = sum

            // const average = records.reduce((a, c) => a + c) / records.length; ===  줄여서쓰기 ((누적값, 초깃값) => 바뀌는 누적값, 초깃값) / 배열길이(평균을 구하기 위해)    reduce : 평균 구하는 메서드
            // startTime = null;   //<- 변수값 초기화, 굳이 안 해도 되지만 혹시 모를 상황을 미연에 방지하기 위해 입력하는 게 좋음
            // endTime = null;     //<- 변수값 초기화, 굳이 안 해도 되지만 혹시 모를 상황을 미연에 방지하기 위해 입력하는 게 좋음
        $result.textContent = `현재 ${current}ms, 평균 : ${average}ms`; // 현재 속도와 평균 반응속도의 값 출력
        
        
        //반복실행을 위해 초기 설정과 똑같이 설정해주기
        $blue.classList.remove('now'); 
        $blue.classList.add('test');
        $blue.textContent = '클릭해서 시작하세요';
    }
});
