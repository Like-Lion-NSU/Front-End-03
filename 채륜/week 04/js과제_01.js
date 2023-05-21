/*  1번
    const height = prompt("키를 입력하세요.").split(" "); //공백 구분

    function answer(height) {
        for(let i = 0; i < height.length; i++){ //배열은 0부터 시작 
            if(height[i] > height[i + 1]){  //현 위치의 숫자보다 이후가 작다면 no, 크다면 yes
                return "NO";
            }   else {
                return "YES"
            }
        }
    }
*/

/*  2번
    let mul = prompt("숫자를 입력해주세요. (1~9)");

    if(mul > 9){
        alert("1~9의 숫자를 입력해주세요")  //경고창 생성
    }
    else if(mul < 1){
        alert("1~9의 숫자를 입력해주세요")  //경고창 생성
    }
    else{
        function multi(mul){
            for(let i = 1; i < 10; i++){
                console.log(mul*i); //구구단 생성
            }
        }
    }
*/

/*  3번 
    const array = prompt("투표해주세요.").split(" ");
    let result = {};
    let winner = "";

    for(let index in array){    //모든 순서를 볼 때까지
        let val = array[index]; //val을 배열의 순서로 등록
        result[val] = result[val] === undefined ? 1 : result[val] = result[val] + 1;    //못찾으면 1, 찾으면 넘어감
    }

    winner = Object.keys(result).reduce(function(a,b){  //
        return result[a] > result[b] ? a : b    //a가 b보다 크면 a값을 리턴, 아니면 b값을 리턴
    });

    console.log(`${winner}(이)가 총 ${result[winner]}표로 반장이 되었습니다.`);
*/

/*  4번
    let count = 0;
    let total = 0;
    const limit = prompt('제한무게를 입력해 주세요: ');
    const people = prompt('탑승할 인원을 입력해주세요: ');

    let peokg = [];
    for(let i = 0; i < people; i++){
        peokg.push(Math.floor(Math.random() * 101)); // 랜덤으로 숫자 생성 (1~100까지의 무게)
        console.log(`${peokg[i]}`); // 랜덤으로 생성한 무게 출력 
    }
    for(let i = 0; i < people; i++){
        if(total < limit){ // 제한 인원 확인
        total += peokg[i];
        count++; // 인원 체크
        } 
    }
    console.log(`탑승제한: ${count}`)
*/

//  5번
    // let code = prompt('숫자를 입력해주세요');    
    // console.log(code.toString(2));   문자열로 만들어주는 메소드

