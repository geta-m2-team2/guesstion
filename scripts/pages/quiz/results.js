function renderResultsView() {
    return `
        <h1>Results</h1>
        ${model.isQuizMaster ? `<button onClick="goToPage('question')"><==</button>` : ""}
        ${model.isQuizMaster ? `<button onClick="goToPage('scoreboard')">==></button>` : ""}
    `;
}