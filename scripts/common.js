function getParticipants() {
    return model.users;
}

function getParticipantsNicks() {
    let nicks = [];

    for (let user of getParticipants()) {
        nicks.push(user.nick);
    }

    console.log("nicks", nicks);

    return nicks;
}