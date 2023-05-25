const $input = document.querySelector("#password");
const $label = document.querySelector("#repassword");
const pwd = document.querySelector("#lock1");
const repwd = document.querySelector("#lock2");
const pwd_text = document.querySelector("#passwd");
const repwd_text = document.querySelector("#repasswd");
const text = document.createElement('p');

function PWD_CHECK(event){
    var reg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if(reg.test(event.target.value) === false){
        lock1.style.backgroundPosition = "25% 50%"
        text.textContent = '8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.'
        pwd_text.appendChild(text)
        text.style.color = "red"
        text.style.fontSize = "small"
    }else{
        lock1.style.backgroundPosition = " 52% 0"
    }
}
$input.addEventListener("change", PWD_CHECK);

//비교연산자인데 비교가 안 돼 왜

//function Repwd_CHECK(){
//    let pwdpwd = pwd_text.value;
//    let rerepwd = repwd_text.value;
//
//    if (pwdpwd === rerepwd){
//        lock2.style.backgroundPosition = "78% 0%"
//    } else {
//        lock2.style.backgroundPosition = "20% 0"
//    }
//}
//$label.addEventListener("change", Repwd_CHECK);