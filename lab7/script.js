// 取得 container 元素
const container = document.getElementById("container");

// 產生隨機字串的函式
function getRandomString(min, max) {
    const length = Math.floor(Math.random() * (max - min + 1)) + min;
    let result = "";
    for (let i = 0; i < length; i++) {
        result += String.fromCharCode(97 + Math.floor(Math.random() * 26)); // 產生 a-z 字母
    }
    return result;
}

// 當頁面載入時，隨機產生 0 到 2 個字母的字串
window.onload = function () {
    container.textContent = getRandomString(0, 2);
};

// 監聽鍵盤事件
document.addEventListener("keyup", function (event) {
    let currentText = container.textContent;

    // 如果輸入的字母等於字串的第一個字母，就移除該字母
    if (currentText.length > 0 && event.key === currentText[0]) {
        container.textContent = currentText.slice(1);
    }

    // 隨機產生 1 到 3 個新字母，並加到字串後面
    container.textContent += getRandomString(1, 3);
});
