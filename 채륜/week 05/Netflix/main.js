const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item'); //쿼리셀렉터로 클래스 가져오기

// Select tab content item
function selectItem(e) {
    removeBorder();                    
    removeShow();
    // Add border to current tab
    this.classList.add('tab-border');
    // Grab content item from DOM
    const tabContentItems = document.querySelector(`#${this.id}-content`);
    // Add show class
    tabContentItems.classList.add('show')
}

function removeBorder() {   //제거하는 함수
    tabItems.forEach(item => item.classList.remove('tab-border'))
}

function removeShow() { //제거하는 함수
    tabContentItems.forEach(item => item.classList.remove('show'))
}

// Listen for tab click
tabItems.forEach(item => item.addEventListener('click', selectItem));