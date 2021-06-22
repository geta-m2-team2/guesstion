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

function gotoQuestion(questionIndexString) {
    model.quiz.currentQuestion = parseInt(questionIndexString);

    updateViews();
}

function gotoQuestionAndResetTimer(questionIndexString) {
    stopTimerAndResetCountdown();

    gotoQuestion(questionIndexString);
}

/**
 * Dynamically generate a select dropdown menu based on given criteria.
 * @param {String} id ID (selector).
 * @param {[{value: Number, text: String}]} options Array of options objects with value and text properties.
 * @param {*} selectProperty Property or variable to check option against for setting "selected".
 * @param {Function} onChange Function to call with arg this.value.toLowerCase().
 * @param {String} label Label for the dropdown menu.
 * @returns {String} Generated HTML.
 */
function generateSelectMenu(id, options, selectProperty, onChange, label="") {
    console.log("options", options)
    let optionsHTML = "";

    for (let option of options) {
        optionsHTML += `<option value="${option.value}" ${selectProperty === option.value ? 'selected="selected"' : ""}>${option.value}: ${option.text}</option>`;
    }

    return `
        <label for="${id}">${label}</label>
        <select id="${id}" class="my-select-menu" onChange="${onChange}(this.value.toLowerCase())">
            ${optionsHTML}
        </select>
    `;
}

function goToPage(pageName) {
    console.log("goToPage", pageName);
    model.currentPage = pageName;
    updateViews();
}

function stopCountdown() {
    clearInterval(model.countDownIntervalID);
    model.countDownIntervalID  = undefined;
}

function stopTimerAndResetCountdown() {
    stopCountdown();
    model.timeLeft = model.countDownSeconds;
}

function countDownEnded() {
    stopTimerAndResetCountdown();

    goToPage('results');
}

function timer(){
    model.timeLeft -= 1;

    if (model.timeLeft <= 0) {
        countDownEnded();
    }

    updateCountdownView();
}

function setMyInterval() {
    model.countDownIntervalID = setInterval(timer, 1000)
}