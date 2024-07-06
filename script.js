function checkAnswer() {
    const answerInput = document.getElementById('answerInput').value;
    const result = document.getElementById('result');

    if (answerInput === "解答") {
        result.innerHTML = '<a href="https://arashiyoshioka.github.io/3-A-zaseki/" target="_blank">座席表　（７月５日～）</a>';
    } else if (answerInput === "真実") {
        result.textContent = "完全解決!　ありがとうございます!";
    } else {
        result.textContent = "残念...";
    }
}
