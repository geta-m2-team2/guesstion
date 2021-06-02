function renderHomePageView() {
    return `
        <div id="homePageBody">
            <h1>Guesstion!</h1>
            <h4>Room code</h4>
            <input type="text" class="homeInput" placeholder="Room code">
            <h4>Nickname</h4>
            <input type="text" class="homeInput" placeholder="Nickname">
            <br><br>
            <button>Join</button>
        </div>
    `;
}
