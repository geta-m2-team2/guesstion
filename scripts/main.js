function updateViews() {
    document.getElementById("app").innerHTML = `
        <div id="content">
            ${renderCurrentPageView()}
        </div>
    `;
}

function renderErrorPageView(errorCode) {
    return "FIXME: Implement renderErrorPageView!";
}

function renderCurrentPageView() {
    switch(model.currentPage) {
        case "home":
            return renderHomePageView();
        case "lobby":
            return renderLobbyPageView();
        default:
            return renderErrorPageView(404);
      }
}

updateViews();