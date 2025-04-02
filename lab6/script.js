var count = 1; // 設定計數器

function addfunction() {
    var btn = document.createElement("BUTTON");
    btn.innerHTML = `CLICK ME (${count})`;  // 修正模板字串的寫法
    btn.setAttribute("id", "btn_" + count);
    btn.setAttribute("class", "btn btn-outline-danger");
    document.body.appendChild(btn);
    console.log(`Added: btn_${count}`);
    count++;
}

function delfunction() {
    if (count > 1) {  // 避免 count 為 1 時減到 0
        count--;
        var btn = document.getElementById("btn_" + count);
        if (btn) {  // 確保按鈕存在再刪除
            document.body.removeChild(btn);
            console.log(`Deleted: btn_${count}`);
        }
    }
}
