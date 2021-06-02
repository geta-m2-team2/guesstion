function renderLobbyPageView() {
    return `
        <div id="lobbyPageBody">
            <h1>Quiz Lobby</h1>
            <h2>Participants</h2>
            <div class="participants-container">
                ${printParticipantList()}
            </div>
            <br><br>
            <button>Launch quiz</button> <p>FIXME: Add "If QM" logic!</p>
        </div>
    `;
}

/**
 * Get list of participants.
 * @returns {String} HTML string of participants.
 */
function printParticipantList() {
    let a = "";

    for (let nick of getParticipantsNicks()) {
        a += `<div class="participant-nick"><h3>${nick}</h3></div>`
    }

    // return getParticipantsNicks().join(" ");

    return a;
}