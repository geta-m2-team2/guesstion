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
        case 0:
            return renderHomePageView();
        case 1:
            return renderLobbyPageView();
        default:
            return renderErrorPageView(404);
      }
}

updateViews();