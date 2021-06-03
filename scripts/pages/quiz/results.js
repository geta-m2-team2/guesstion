function renderResultsView() {
    return `
        <h1>Results</h1>
        <div class="quizNavBody">
            ${model.isQuizMaster ? `<button class="backButton navButtons" onClick="goToPage('question')">‹</button>` : ""}
            ${model.isQuizMaster ? `<button class="lobbyButton navButtons" onClick="returnToLobby()">Return to Lobby</button>` : ""}
            ${model.isQuizMaster ? `<button class="forwardButton navButtons" onClick="goToPage('scoreboard')">›</button>` : ""}
        </div>
    `;
}