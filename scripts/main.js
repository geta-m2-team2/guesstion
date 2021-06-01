function updateViews() {
    document.getElementById("app").innerHTML = `
        <div id="content">
            ${renderCurrentPageView()}
        </div>
    `;
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
        default:
            return renderErrorPageView(404, model.currentPage);
      }
}

updateViews();