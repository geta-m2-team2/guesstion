function renderLobbyPageView() {
    return `
        <h1>Quiz Lobby</h1>
        <h2>Participants</h2>
        <div class="participants-container">
            ${printParticipantList()}
        </div>
        <br><br>
        <button>Launch quiz</button> <p>FIXME: Add "If QM" logic!</p>
    `;
}

function printParticipantList() {
    let a = "";

    for (let nick of getParticipantsNicks()) {
        a += `<div class="participant-nick"><h3>${nick}</h3></div>`
    }

    // return getParticipantsNicks().join(" ");

    return a;
}