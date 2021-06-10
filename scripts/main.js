const images = ['https://i.stack.imgur.com/2RAv2.png', 'https://i.stack.imgur.com/Tq5DA.png', 'https://i.stack.imgur.com/3KRtW.png', 'https://i.stack.imgur.com/iLyVi.png'];
function updateViews() {
    let renderedPage = renderCurrentPageView(); // Alt 1: Callback.

    document.getElementById("app").innerHTML = `
        <div id="content">
            ${renderedPage}
        </div>
    `;

    console.log("viewsCallbackFunc", model.viewsCallbackFunc);
    console.log("viewsCallbackArgs", model.viewsCallbackArgs);
    
    if (model.viewsCallbackFunc) {
        // Callback app.
        model.viewsCallbackFunc(...model.viewsCallbackArgs);
        // Unset callback.
        model.viewsCallbackFunc = undefined;
        model.viewsCallbackArgs = [];
    } 
    

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