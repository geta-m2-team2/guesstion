function updateViews() {
    document.getElementById("app").innerHTML = `
        <div id="content">
            ${renderCurrentPageView()}
        </div>
    `;

    // FIXME: Temporary development manual page navigation
    document.getElementById("devel-nav").innerHTML = `   
      <label for="page-nav">[DEVEL] Goto page: </label>
      <select name="Page" id="page-nav" onChange="goToPage(this.value.toLowerCase())">
        <option value="Home" ${model.currentPage === "home" ? 'selected="selected"' : ""}>Home</option>
        <option value="Lobby" ${model.currentPage === "lobby" ? 'selected="selected"' : ""}>Lobby</option>
        <option value="Question" ${model.currentPage === "question" ? 'selected="selected"' : ""}>Question</option>
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

function renderCurrentPageView() {
    switch(model.currentPage) {
        case "home":
            return renderHomePageView();
        case "lobby":
            return renderLobbyPageView();
        case "question":
            return renderQuestionView();
        default:
            return renderErrorPageView(404, model.currentPage);
      }
}

updateViews();