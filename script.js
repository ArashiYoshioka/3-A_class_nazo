function checkAnswer() {
    const answerInput = document.getElementById('answerInput').value;
    const result = document.getElementById('result');

    if (answerInput === "解答") {
        result.textContent = "https://arashiyoshioka.github.io/3-A-zaseki/";
    } else if (answerInput === "真相") {
        result.textContent = "完全解決!　ありがとう!";
    } else {
        result.textContent = "残念...";
    }
}
