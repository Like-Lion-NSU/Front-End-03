// let pwPattern = /[a-zA-Z0-9~!@#$%^&*()_+|<>?:{}]{8,16}/;

// function checkPw() {
//     var pwPattern = /[a-zA-Z0-9~!@#$%^&*()_+|<>?:{}]{8,16}/;
//     if(pw1.value === "") {
//         error[1].innerHTML = "필수 정보입니다.";
//         pwMsg.style.display = "block";
//         pwMsgArea.style.paddingRight = "40px";
//         pwImg1.src = "m_icon_pass.png";
//         error[1].style.display = "block";
//     } else if(!pwPattern.test(pw1.value)) {
//         error[1].innerHTML = "8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.";
//         pwMsg.innerHTML = "사용불가";
//         pwMsgArea.style.paddingRight = "93px";
//         error[1].style.display = "block";
//         pwMsg.style.color = "red";
//         pwMsg.style.display = "block";
//         pwImg1.src = "m_icon_not_use.png";
//     } else {
//         error[1].style.display = "none";
//         pwMsg.innerHTML = "안전";
//         pwMsgArea.style.paddingRight = "93px";
//         pwMsg.style.color = "#03c75a";
//         pwMsg.style.display = "block";
//         pwImg1.src = "m_icon_safe.png";
//     }
// }
const $input = document.querySelector('#pwd1');
const lock1 = document.querySelector('back_rock1')
const text = document.createElement('p')
const block_1 = document.querySelector("#toppwd")

function PWD_CHECK(event){
    var reg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if(reg.test(event.target.value)=== false){
       
        text.textContent='8~16자 영문 대 소문자,특수문자를 사용하세요.'
        block_1.appendChild(text)
        text.style.color='red'
        text.style.textAlign='left'
        text.style.marginLeft='15px'
        text.style.fontSize='10px'


    }else{
        text.remove()
        lock1.style.backgroudPosition="80% 0%"
        text.textContent='올바른 입력입니다.'
        block_1.appendChild(text)
        text.style.color='green'
    

    }
}

$input.addEventListener("change",PWD_CHECK);