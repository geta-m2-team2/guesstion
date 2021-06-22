function updateViews() {
    let renderedPage = renderCurrentPageView(); // Alt 1: Callback.

    document.getElementById("app").innerHTML = `
        <div id="content">
            ${renderedPage}
        </div>
    `;
    
    if (model.viewsCallbackFunc) {
        // Callback app.
        model.viewsCallbackFunc(...model.viewsCallbackArgs);
        // Unset callback.
        model.viewsCallbackFunc = undefined;
        model.viewsCallbackArgs = [];
    } 
    
    if (model.isQuizMaster === true) document.getElementById('bgm').style.display = "block";

    // FIXME: Temporary development manual page navigation
    document.getElementById("devel-nav").innerHTML = `   
      <label for="page-nav">[DEVEL] Goto page: </label>
      <select name="Page" id="page-nav" onChange="goToPage(this.value.toLowerCase())">
        <option value="Home" ${model.currentPage === "home" ? 'selected="selected"' : ""}>Home</option>
        <option value="Lobby" ${model.currentPage === "lobby" ? 'selected="selected"' : ""}>Lobby</option>
        <option value="Question" ${model.currentPage === "question" ? 'selected="selected"' : ""}>Question</option>
        <option value="Results" ${model.currentPage === "results" ? 'selected="selected"' : ""}>Results</option>
        <option value="Scoreboard" ${model.currentPage === "scoreboard" ? 'selected="selected"' : ""}>Scoreboard</option>
        <option value="scoreboard-final" ${model.currentPage === "scoreboard-final" ? 'selected="selected"' : ""}>Scoreboard (Final)</option>
    </select>

    <button onClick="stopCountdown()">Pause countdown</button>
    <button onClick="setMyInterval()">Resume countdown</button>

    ${generateSelectMenu("question-select",
                         Array.apply(null, Array(model.quiz.questions.length)).map(function (x, i) {
                             return {
                                 value: i,
                                 text: model.quiz.questions[i].title
                                };
                            }),
                         model.quiz.currentQuestion,
                         "gotoQuestionAndResetTimer",
                         "Question: "
                         )}
    `;
}

function gotoQuestion(questionIndexString) {
    model.quiz.currentQuestion = parseInt(questionIndexString);

    updateViews();
}

function gotoQuestionAndResetTimer(questionIndexString) {
    stopTimerAndResetCountdown();

    gotoQuestion(questionIndexString);
}

/**
 * Dynamically generate a select dropdown menu based on given criteria.
 * @param {String} id ID (selector).
 * @param {[{value: Number, text: String}]} options Array of options objects with value and text properties.
 * @param {*} selectProperty Property or variable to check option against for setting "selected".
 * @param {Function} onChange Function to call with arg this.value.toLowerCase().
 * @param {String} label Label for the dropdown menu.
 * @returns {String} Generated HTML.
 */
function generateSelectMenu(id, options, selectProperty, onChange, label="") {
    console.log("options", options)
    let optionsHTML = "";

    for (let option of options) {
        optionsHTML += `<option value="${option.value}" ${selectProperty === option.value ? 'selected="selected"' : ""}>${option.value}: ${option.text}</option>`;
    }

    return `
        <label for="${id}">${label}</label>
        <select id="${id}" class="my-select-menu" onChange="${onChange}(this.value.toLowerCase())">
            ${optionsHTML}
        </select>
    `;
}

function goToPage(pageName) {
    console.log("goToPage", pageName);
    model.currentPage = pageName;
    updateViews();
}

function renderErrorPageView(errorCode, page) {
    return `Error ${errorCode} when requesting page "${page}"`;
}

function renderCurrentPageView(callback) {
    switch(model.currentPage) {
        case "home":
            return renderHomePageView();
        case "lobby":
            return renderLobbyPageView();
        case "question":
            return renderQuestionView();
        case "results":
            return renderResultsView(callback);
        case "scoreboard":
            return renderResultScoreboardView();
        case "scoreboard-final":
            return renderFinalScoreboardView();
        default:
            return renderErrorPageView(404, model.currentPage);
      }
}

updateViews();

// Background music via YouTube embed in iframe:
document.getElementById('bgm').innerHTML = `
<iframe id="existing-iframe-example"
    width="192" height="108"
    src="https://www.youtube.com/embed/${model.bgmUrlId}?playlist=${model.bgmUrlId}&autoplay=1&loop=1"
    frameborder="0"
    style="border: solid 4px #37474F">
</iframe>
`;