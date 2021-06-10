function renderFinalScoreboardView() {
    let isFinalQuestion = model.quiz.questions.length === model.quiz.currentQuestion + 1;

    let sortedUsers = model.users.sort(function(a, b) {
        return b.score - a.score;
    });

    return `
        <div id="rostrum-container">
            <h1>Rostrum</h1>
            <div class="rostrum-divs-container">
            <div class="rostrum-place2-container">
                    <div class="rostrum-above-nick">${sortedUsers[1].nick}</div>
                    <div class="rostrum-score">${sortedUsers[1].score}</div>
                    <div class="rostrum-place-signifier">2</div>
                    
            </div>
                <div class="rostrum-place1-container">
                    <div class="rostrum-above-nick">${sortedUsers[0].nick}</div>
                    <div class="rostrum-score">${sortedUsers[0].score}</div>
                    <div class="rostrum-place-signifier">1</div>
                </div>
                <div class="rostrum-place3-container">
                    <div class="rostrum-above-nick">${sortedUsers[2].nick}</div>
                    <div class="rostrum-score">${sortedUsers[1].score}</div>
                    <div class="rostrum-place-signifier">3</div>
                </div>
            </div>
        </div>
        
        <div class="quizNavBody">
            ${model.isQuizMaster ? `<button class="backButton navButtons" onClick="goToPage('results')">‹</button>` : ""}
            ${model.isQuizMaster ? `<button class="lobbyButton navButtons" onClick="returnToLobby()">Return to Lobby</button>` : ""}
            ${model.isQuizMaster ? `<button class="forwardButton navButtons" onClick="${isFinalQuestion ? "goToPage('scoreboard-final')" : "proceedToPage('question')"}">›</button>` : ""}
        </div>
    `;
}