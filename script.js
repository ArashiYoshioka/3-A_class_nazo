function checkAnswer() {
    const answerInput = document.getElementById('answerInput').value;
    const result = document.getElementById('result');

    if (answerInput === "解答") {
        result.textContent = "おめでとう!https://cdn2.me-qr.com/pdf/fe806c32-5751-41be-a219-666c20e29b4f.pdf";
    } else if (answerInput === "真実") {
        result.textContent = "完全解決!　ありがとう!";
    } else {
        result.textContent = "残念...";
    }
}
