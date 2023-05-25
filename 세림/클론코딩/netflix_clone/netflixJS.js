const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Select tab content item (content item이 선택됐을 때)
function selectItem(e) {
    removeBorder();
    removeShow();
    // Add border to current tab (선택된 탭에 테두리 추가)
    // tab border이라는 클래스 추가
    this.classList.add('tab-border');
    // Grab content item from DOM
    // 클릭한 항목에 올바른 내용이 선택되게하는 것 
    // 중복되는 건 그냥 따로 뺌 (content얘기)
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    // Add show class (show 클래스 추가)
    tabContentItem.classList.add('show');
}

// 선을 없애기 위한 함수
function removeBorder() {
    // 선택할 때마다 선 삭제를 반복해야함 -> foreach 사용 
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

// 선택한 항목에 대한 내용이 나오게끔 하는 거
function removeShow() {
    tabContentItems.forEach(item => item.classList.remove('show'));
}

// Listen for tab click (tabItems를 클릭했을 때)
tabItems.forEach(item => item.addEventListener('click', selectItem));
