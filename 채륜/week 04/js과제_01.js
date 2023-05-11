/*  1번
    const height = prompt("키를 입력하세요.").split(" ");

    function answer(height) {
        for(let i = 0; i < height.length - 1; i++){
            if(height[i] > height[i + 1]){
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
        alert("1~9의 숫자를 입력해주세요")
    }
    else if(mul < 1){
        alert("1~9의 숫자를 입력해주세요")
    }
    else{
        function multi(mul){
            for(let i = 1; i < 10; i++){
                console.log(mul*i);
            }
        }
    }
*/

/*  3번 
    const array = prompt("투표해주세요.").split(" ");
    let result = {};
    let winner = "";

    for(let index in array){
        let val = array[index];
        result[val] = result[val] === undefined ? 1 : result[val] = result[val] + 1;
    }

    winner = Object.keys(result).reduce(function(a,b){
        return result[a] > result[b] ? a : b
    });

    console.log(`${winner}(이)가 총 ${result[winner]}표로 반장이 되었습니다.`);
*/

let count, total; 
const limit = prompt('제한무게');
const people = prompt('인원');
Math.random()

