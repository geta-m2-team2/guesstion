const BAR_WIDTH = 8;
const BAR_SPACING = 10;

let barHeight = 10;
let graphWidth = 0;
let votesTotal = 0;

// let vboxWidth = 500; // 80
// let vboxHeight = 500; // 100

function renderResultsView(callback) {
    let question = model.quiz.questions[model.quiz.currentQuestion];
    let svgInnerHtml = '';
    votes = [];

    // Alt 1: Callback.
    if (callback) callback(createBarChart);
    
    // Alt 2: model attrib holding a func.
    model.viewsCallbackFunc = createBarChart;
    
    for (let i = 0; i < question.options.length; i++) {
        // Determine most votes to calculate the correct height
        if (question.options[i].votes > barHeight) barHeight = question.options[i].votes;
        console.log("bar height is now", barHeight)

        // Get most votes
        votesTotal += question.options[i].votes;

    }

    for (let i = 0; i < question.options.length; i++) {
        // votes.push(option.votes);
        svgInnerHtml += createBar(question.options[i].votes, i);
    }

    // let vboxWidth = graphWidth; // 80
    // let vboxHeight = barHeight; // 100
    let vboxWidth = graphWidth; // 80
    let vboxHeight = votesTotal; // 100
    let vboxMinX = 0;
    let vboxMinY = 0;

    return `
      <div id="results-container">
          <h1>Results</h1>

          <div id="my-chart"></div>

          <div class="quiz-nav-container">
              ${model.isQuizMaster ? `<button class="backButton navButtons" onClick="goToPage('question')">‹</button>` : ""}
              ${model.isQuizMaster ? `<button class="lobbyButton navButtons" onClick="returnToLobby()">Return to Lobby</button>` : ""}
              ${model.isQuizMaster ? `<button class="forwardButton navButtons" onClick="goToPage('scoreboard')">›</button>` : ""}
          </div>
      </div>
    `;
}

// const labels = Utils.months({count: 7});
// const data = {
//   labels: labels,
//   datasets: [{
//     label: 'My First Dataset',
//     data: [65, 59, 80, 81, 56, 55, 40],
//     backgroundColor: [
//       'rgba(255, 99, 132, 0.2)',
//       'rgba(255, 159, 64, 0.2)',
//       'rgba(255, 205, 86, 0.2)',
//       'rgba(75, 192, 192, 0.2)',
//       'rgba(54, 162, 235, 0.2)',
//       'rgba(153, 102, 255, 0.2)',
//       'rgba(201, 203, 207, 0.2)'
//     ],
//     borderColor: [
//       'rgb(255, 99, 132)',
//       'rgb(255, 159, 64)',
//       'rgb(255, 205, 86)',
//       'rgb(75, 192, 192)',
//       'rgb(54, 162, 235)',
//       'rgb(153, 102, 255)',
//       'rgb(201, 203, 207)'
//     ],
//     borderWidth: 1
//   }]
// };

// const config = {
//     type: 'line',
//     data,
//     options: {}
//   };

function createBarChart() {
    let canvas = document.createElement('canvas');

    canvas.classList.add("styled-chart");

    let ctx = canvas.getContext("2d");

    let myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green'],
            datasets: [{
                label: '# of Votes',
                data: [12, 55, 3, 5],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
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