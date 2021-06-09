// Alt 1: Callback.
let appCallback;

function setCallback(callback) {
    appCallback = callback;
};

function updateViews() {
    console.log(appCallback)
    let renderedPage = renderCurrentPageView(setCallback); // Alt 1: Callback.
    console.log(appCallback)

    document.getElementById("app").innerHTML = `
        <div id="content">
            ${renderedPage}
        </div>
    `;

    // Alt 1: Callback.
    appCallback();
        // Unset callback.
    appCallback = undefined;

     // Alt 2: model attrib holding a func.
    model.viewsCallbackFunc = undefined;

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