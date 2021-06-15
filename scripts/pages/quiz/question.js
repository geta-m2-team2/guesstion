function setMyInterval() {
    model.countDownIntervalID = setInterval(timer, 1000)
}

function renderQuestionView() {
    let question = model.quiz.questions[model.quiz.currentQuestion];

    if (!model.countDownIntervalID) model.viewsCallbackFunc = setMyInterval;

    return `
    <div id="question-counter">Question ${model.quiz.currentQuestion + 1} / ${model.quiz.questions.length}</div>
        <div id="questionPageBody">
            <h1>${question.title}</h1>
            ${model.timeLeft} secs
            <div id="question-description">
                ${ question.description ? `<p>${question.description}</p>` :  "" }
            </div>
            <div id="question-image-container">
                ${ question.imageUrl ? `<img id="question-image" src="${question.imageUrl}">` :  "" }
            </div>
            <div id="question-timer-container"></div>
            <div id="options-container">${getOptions()}</div>
            <div class="quizNavBody">
                ${model.isQuizMaster ? `<button class="backButton navButtons" onClick="proceedToPage('results', false)">‹</button>` : ""}
                ${model.isQuizMaster ? `<button class="lobbyButton navButtons" onClick="returnToLobby()">Return to Lobby</button>` : ""}
                ${model.isQuizMaster ? `<button class="forwardButton navButtons" onClick="goToPage('results')">›</button>` : ""}
            </div>
        </div>
    `;
}

/**
 * Get the option content, computed according to contentType.
 * @param {Object} option Option to parse.
 * @returns {String} Computed option content string.
 */
function getTextOptionContent(option) {
    // console.log("getOptionContent", option);
    if (!option.contentText) {
        console.error("Missing contentText for option!". option);
        return;
    } else if (option.contentImage) {
        return "";
    } else if (option.contentText) {
        return `<p>${option.contentText}</p>`;
    } else {
        console.error("Unexpected option attribs!". option);
        return;
    }
}

function pickOption(optionIndex) {
    let currentQuestion = model.quiz.currentQuestion;
    console.log("pickOption", event);
    let me = model.users.find(user => user.nick === model.nick);
    console.log("me", me);

    me.answers[currentQuestion] = optionIndex;

    console.log("me modified", me);
}

/**
 * Get list of options.
 * @returns {String} Options HTML string.
 */
function getOptions(returnString = true) {
    let question = model.quiz.questions[model.quiz.currentQuestion];

    let me = model.users.find(user => user.nick === model.nick);

    if (!me) {
        // Stop any running timer to avoid re-running this error for every second.
        if (model.countDownIntervalID) stopCountdown();
        
        // Display error.
        console.error(`me is undefined! Likely cause: nick '${model.nick}' is not in user list.`);
        alert(`FATAL ERROR: Nick '${model.nick}' is not in userlist!`);

        // Bail!
        return;
    }
    
    // If your user has not answered and is not QM.
    console.log("me.answers", me.answers);
    console.log("model.quiz.currentQuestion", model.quiz.currentQuestion);
    let userHasLockedInAnswer = false;
    if (me.answers.length-1 >= model.quiz.currentQuestion && model.isQuizMaster === false) userHasLockedInAnswer = true;
    console.log("userHasLockedInAnswer", userHasLockedInAnswer);
    
    // if (userHasLockedInAnswer) {}

    let options = [];

    let currentOptionIndex = 0;
    for (let option of question.options) {
        let onCLickString = userHasLockedInAnswer === true ? "" : `onClick="pickOption(${currentOptionIndex})"`;
        let optionClasses = "question-option";

        if (userHasLockedInAnswer) {
            optionClasses += " question-option-not-clickable";
            if (me.answers[model.quiz.currentQuestion] === currentOptionIndex) optionClasses += " question-option-picked";
        } else {
            // If option has image, append special class for specific styling.
            if (option.contentImage) optionClasses += " question-option-image-clickable";
            optionClasses += " question-option-clickable"
        }

        options.push( `
                            <div class="${optionClasses}" ${option.contentImage ? 'style="background-image: url(' + option.contentImage + ')"': ""} ${onCLickString}>
                                ${getTextOptionContent(option)}
                            </div>
                        `);
        
        currentOptionIndex++;
    }

    if (returnString) return options.join(" ")

    return options;
}

function stopCountdown() {
    clearInterval(model.countDownIntervalID);
    model.countDownIntervalID  = undefined;
}

function countDownEnded() {
    stopCountdown();
    model.timeLeft = model.countDownSeconds;
    
    goToPage('results');
}

function timer(){
    model.timeLeft -= 1;

    if (model.timeLeft <= 0) { 
        countDownEnded();
    }

    updateViews();
}