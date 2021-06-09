const BAR_WIDTH = 8;
const BAR_SPACING = 10;

let barHeight = 10;
let graphWidth = 0;
let votesTotal = 0;

// let vboxWidth = 500; // 80
// let vboxHeight = 500; // 100

function renderResultsView() {
    let question = model.quiz.questions[model.quiz.currentQuestion];
    let svgInnerHtml = '';
    votes = [];
    
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

    let svgInnerHtml = '';
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
        // plugins: [{
        //     afterDraw: chart => {      
        //       var ctx = chart.chart.ctx; 
        //       var xAxis = chart.scales['x-axis-0'];
        //       var yAxis = chart.scales['y-axis-0'];
        //       xAxis.ticks.forEach((value, index) => {  
        //         var x = xAxis.getPixelForTick(index);      
        //         var image = new Image();
        //         image.src = images[index],
        //         ctx.drawImage(image, x - 12, yAxis.bottom + 10);
        //       });      
        //     }
        // }],
        data: {
            labels: question.options.map(
                function(obj) {
                    let retv = `${labelPrefaces[currentOptionLabelIndex]}: ${obj.contentText}`;
                    currentOptionLabelIndex++;

                    return retv;
                }),
            datasets: [{
                label: '# of Votes',
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
            }
        }
    });
    
      console.log("my-chart", myChart);

      document.getElementById("my-chart").appendChild(canvas);
    
    //   return myChart.canvas.outerHTML;
}

function createBar(number, barNo) {
    let x = barNo * (BAR_WIDTH + BAR_SPACING);

    let y; // = barHeight - number;
    let height = number;
    graphWidth += x;

    // calc pct:
    // if (number !== barHeight) {
    //     // height = (barHeight * 100 / number) + "%";
    //     height = Math.floor(((number / barHeight) * 100));
    //     // y = (barHeight - height);
    //     y = (votesTotal - height);
    // } else {
    //     height = barHeight;
    //     // y = 0;
    //     y =  (votesTotal - height);
    // }

    height = Math.floor(((number / barHeight) * 100));
    y =  (votesTotal - height);

    
    return `
            <rect id="bar${barNo}" width="${BAR_WIDTH}" height="${height}" x="${x}" y="${y}"></rect>
            <text class="bar-text" width="${BAR_WIDTH}" x="${x + (BAR_WIDTH/3)}" y="99%">${number}</text>
        `;
}

  // 