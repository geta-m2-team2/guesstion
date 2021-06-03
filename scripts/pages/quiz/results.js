const BAR_WIDTH = 8;
const BAR_SPACING = 10;

let barHeight = 10;
let graphWidth = 0;

// let vboxWidth = 500; // 80
// let vboxHeight = 500; // 100

function renderResultsView() {
    let question = model.quiz.questions[model.quiz.currentQuestion];
    let svgInnerHtml = '';
    votes = [];
    
    // Determine most votes to calculate the correct height
    for (let i = 0; i < question.options.length; i++) {
        if (question.options[i].votes > barHeight) barHeight = question.options[i].votes;
        console.log("bar height is now", barHeight)
    }

    for (let i = 0; i < question.options.length; i++) {
        // votes.push(option.votes);
        svgInnerHtml += createBar(question.options[i].votes, i);
    }

    // let vboxWidth = graphWidth; // 80
    // let vboxHeight = barHeight; // 100
    let vboxWidth = 100; // 80
    let vboxHeight = 100; // 100
    let vboxMinX = 0;
    let vboxMinY = 0;

    return `
        <h1>Results</h1>

        <svg id="chart" width="500px" height="500px" viewBox="${vboxMinX} ${vboxMinY} ${vboxWidth} ${vboxHeight}">
            ${svgInnerHtml}
        </svg>

        <div class="quizNavBody">
            ${model.isQuizMaster ? `<button class="backButton navButtons" onClick="goToPage('question')">‹</button>` : ""}
            ${model.isQuizMaster ? `<button class="lobbyButton navButtons" onClick="returnToLobby()">Return to Lobby</button>` : ""}
            ${model.isQuizMaster ? `<button class="forwardButton navButtons" onClick="goToPage('scoreboard')">›</button>` : ""}
        </div>
    `;
}

function createBar(number, barNo) {
    let x = barNo * (BAR_WIDTH + BAR_SPACING);
    // let height = number * 1;
    // let y = 0;
    // if (barHeight === number) {
    //     y = barHeight;
    // } else {
    //     y = height;
    // }

    // barHeight = 135 == 100%
    // bar2Height = 17 == ??? %

    // let height;
    
    // if (number !== barHeight) {
    //     // height = (barHeight * 100 / number) + "%";
    //     height = Math.floor(((number / barHeight) * 100)) + "%"
    // } else {
    //     height = "100%";
    // }


    let y; // = barHeight - number;
    let height = number;
    graphWidth += x;

    // calc pct:
    if (number !== barHeight) {
        // height = (barHeight * 100 / number) + "%";
        height = Math.floor(((number / barHeight) * 100));
        y = (barHeight - height);
    } else {
        height = barHeight;
        y = 0;
    }


    
    return `
            <rect id="bar${barNo}" width="${BAR_WIDTH}" height="${height}" x="${x}" y="${y}"></rect>
            <text class="bar-text" width="${BAR_WIDTH}" x="${x + (BAR_WIDTH/3)}" y="99%">${number}</text>
        `;
}

  // 