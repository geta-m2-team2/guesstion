function renderHomePageView() {
    return `
        <div id="homePageBody">
            <h1>Guesstion!</h1>
            <h4>Quiz Master code</h4>
            <div class="quiz-master-login">
                <input type="text" class="home-input" placeholder="Password..." onInput="model.inputQuizMasterPassword = this.value">
                <button onClick="loginQuizMaster()"}>Create Quiz</button>
            </div>
            <h4>Nickname</h4>
            <input type="text" class="home-input" placeholder="Nickname..." value="${model.nick}" onInput="model.nick = this.value">
            <button onClick="joinGame()">Join</button>
        </div>
    `;
}

function loginQuizMaster() {
    if (model.inputQuizMasterPassword === model.quizMasterPassword) {
        model.isQuizMaster = true;
        
        createGame();
    } else {
        alert("Invalid password!");
    }

}

function joinGame()
{
    model.users.push(
        {
            nick: model.nick,
            score: 0,
            answers: []
        }
    )

    if (model.nick !== "") {
        goToPage("lobby"); 
    } else {
        alert("Nickname is required to join game!");
    }
}

function createGame() {
    goToPage("lobby");
}