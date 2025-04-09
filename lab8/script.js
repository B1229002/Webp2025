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

// 錯誤次數計數器
let wrongCount = 0;

// 當頁面載入時，隨機產生 0 到 2 個字母的字串
window.onload = function () {
    container.textContent = getRandomString(0, 2);
};

// 監聽鍵盤事件
document.addEventListener("keyup", function (event) {
    let currentText = container.textContent;

    // 檢查是否打對字
    if (currentText.length > 0 && event.key === currentText[0]) {
        container.textContent = currentText.slice(1);
        wrongCount = 0; // 打對就歸零
    } else {
        wrongCount++; // 打錯一次
    }

    // 每次都加 1～3 個字母
    container.textContent += getRandomString(1, 3);

    // 如果連錯三次，就額外加 6 個字母
    if (wrongCount >= 3) {
        let totalLetters = 0;
        while (totalLetters < 6) {
            let str = getRandomString(1, 3);
            if (totalLetters + str.length > 6) {
                str = str.slice(0, 6 - totalLetters); // 裁切剛好剩下的字母數
            }
            container.textContent += str;
            totalLetters += str.length;
        }

        wrongCount = 0; // 重設錯誤次數
    }
});
