const $input = document.querySelector("#pass")
const lock1 = document.querySelector("#lock_1")
const block_1 = document.querySelector("#PWD")
const text = document.createElement('p')
function PWD_CHECK(event){
    let reg = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if(reg.test(event.target.value) === false){
        lock1.style.backgroundPosition = "25% 50%"
        text.textContent = '8~16자, 특수문자를 1개 이상 포함하세요.'
        text.style.fontSize = '12px'
        text.style.textAlign = 'left'
        text.style.marginLeft = '8px'
        text.style.color = 'red'
        block_1.appendChild(text)
    } else {
        text.remove()
        lock1.style.backgroundPosition = "75% 0%"
        
    }
}
$input.addEventListener("change", PWD_CHECK)