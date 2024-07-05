function checkAnswer() {
    const answerInput = document.getElementById('answerInput').value;
    const result = document.getElementById('result');

    if (answerInput === "解答") {
        result.textContent = "おめでとう!";
    } else if (answerInput === "真実") {
        result.textContent = "完全解決!　ありがとう!";
    } else {
        result.textContent = "残念...";
    }
}
