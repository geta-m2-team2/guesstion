function renderResultScoreboardView() {
    let isFinalQuestion = model.quiz.questions.length === model.quiz.currentQuestion + 1;

    return `
        <h1>ScoreBoard</h1>
        <div class="quizNavBody">
            ${model.isQuizMaster ? `<button class="backButton navButtons" onClick="goToPage('results')">‹</button>` : ""}
            ${model.isQuizMaster ? `<button class="lobbyButton navButtons" onClick="returnToLobby()">Return to Lobby</button>` : ""}
            ${model.isQuizMaster ? `<button class="forwardButton navButtons" onClick="${isFinalQuestion ? "goToPage('scoreboard-final')" : "proceedToPage('question')"}">›</button>` : ""}
        </div>  
    `;
}