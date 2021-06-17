function renderResultsView() {
    let question = model.quiz.questions[model.quiz.currentQuestion];
    
    // Alt 2: model attrib holding a func.
    model.viewsCallbackFunc = createBarChart;

    return `
      <div id="results-container">
          <h1>Results #${model.quiz.currentQuestion+1}/${model.quiz.questions.length}: ${question.title}</h1>

          <div id="my-chart"></div>

          <div class="quiz-nav-container">
              ${model.isQuizMaster ? `<button class="backButton navButtons" onClick="goToPage('question')">‹</button>` : ""}
              ${model.isQuizMaster ? `<button class="lobbyButton navButtons" onClick="returnToLobby()">Return to Lobby</button>` : ""}
              ${model.isQuizMaster ? `<button class="forwardButton navButtons" onClick="goToPage('scoreboard')">›</button>` : ""}
          </div>
      </div>
    `;
}

function createBarChart(votes) {
    let question = model.quiz.questions[model.quiz.currentQuestion];

    votes = [];

    for (let option of question.options) {
        votes.push(option.votes);
    }

    let labelPrefaces = ['A', 'B', 'C', 'D'];
    let currentOptionLabelIndex = 0;

    let canvas = document.createElement('canvas');

    canvas.classList.add("styled-chart");

    let ctx = canvas.getContext("2d");

    let myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: question.options.map(
                function(obj) {
                    let symbol = "";
                    question.options[currentOptionLabelIndex].isCorrect === true ? symbol = '✅' : symbol = "❌";
                    let retv = `${symbol} ${labelPrefaces[currentOptionLabelIndex]}: ${obj.contentText}`;
                    currentOptionLabelIndex++;

                    return retv;
                }),
            datasets: [{
                label:"Votes",
                data: votes,
                backgroundColor: [
                    '#66bf39',
                    'rgb(223, 69, 69)',
                    '#1368ce',
                    '#ffa602'
                ],
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                legend: {
                    display: false,
                }
            }
        },
    });

      document.getElementById("my-chart").appendChild(canvas);
}