function renderResultScoreboardView() {
    let isFinalQuestion = model.quiz.questions.length === model.quiz.currentQuestion + 1;

    return `
        <h1>ScoreBoard</h1>
        ${model.isQuizMaster ? `<button onClick="goToPage('results')"><==</button>` : ""}
        ${model.isQuizMaster ? `<button onClick="${isFinalQuestion ? "goToPage('scoreboard-final')" : "proceedToPage('question')"}">==></button>` : ""}
    `;
}