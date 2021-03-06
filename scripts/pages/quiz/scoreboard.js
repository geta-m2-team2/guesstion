function renderResultScoreboardView() {
    let isFinalQuestion = model.quiz.questions.length === model.quiz.currentQuestion + 1;

    return `
        <div class="quizNavBody">
            ${model.isQuizMaster ? `<button class="backButton navButtons" onClick="goToPage('results')">‹</button>` : ""}
            ${model.isQuizMaster ? `<button class="lobbyButton navButtons" onClick="returnToLobby()">Return to Lobby</button>` : ""}
            ${model.isQuizMaster ? `<button class="forwardButton navButtons" onClick="${isFinalQuestion ? "goToPage('scoreboard-final')" : "proceedToPage('question')"}">›</button>` : ""}
        </div>
        <h1>ScoreBoard</h1>
        <div id="scoreboard-container">
            ${generatePlayerScoreTable()}
        </div>
        <div class="featured-score">
            ${getFeaturedScore()}
        </div>
        
        
    `;
}

function sortByScore(userList) {
    return userList.sort(function(a, b) {
        return b.score - a.score;
    })
}

function determineDeltaChar(score, prevScore) {
    if (score - prevScore > 0) {
        return '▲';
    } else if (score - prevScore < 0) {
        return '▼';
    } else {
        return '-'
    }
}

/**
 * Generate player score table.
 * @returns {string} Generated HTML.
 */
 function generatePlayerScoreTable() {
    model.users.sort(function(a, b) {
        return b.score - a.score;
    });

    let tableHeadings = `
        <tr>
            <th class="nick-col uneditable">Name</th>
            <th class="score-col uneditable">Total Pts</th>
            <th class="score-delta-col uneditable">Gained Pts</th>
            <th class="score-delta-icon-col uneditable"></th>
        </tr>
    `;
    let tableBody = "";

    for (let i = 0; i < model.users.length; i++) {
        let scoreDelta = model.users[i].score - model.users[i].prevScore;
        tableBody += `
            <tr class="${scoreDelta > 0 ? "score-increased" : ""}">
                <td class="nick-col">
                    ${model.users[i].nick}
                </td>
                <td class="score-col">
                    ${model.users[i].score}
                </td>
                <td class="score-delta-col">
                    ${model.users[i].score - model.users[i].prevScore}
                </td>
                <td class="score-delta-icon-col">
                    ${scoreDelta > 0 ? "▲" : "-"}
                </td>
            </tr>
        `
    }

    return `
        <table class="scoreboard-table">
            <thead>
                ${tableHeadings}
            </thead>
            <tbody>
                ${tableBody}
            </tbody>
        </table>
    `;
}

function getFeaturedScore() {
    model.users.sort(function(a, b) {
        return b.score - a.score;
    });

    let highestRankedUser = model.users[0];
    let scoreDelta = highestRankedUser.score - highestRankedUser.prevScore;
    
    return `${highestRankedUser.nick} gained the most points, with an increase of ${scoreDelta} pts. this round!`
}