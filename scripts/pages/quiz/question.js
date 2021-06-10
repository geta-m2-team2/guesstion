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

    me.answers[currentQuestion] = model.quiz.questions[currentQuestion].options[optionIndex];

    console.log("me modified", me);
}

/**
 * Get list of options.
 * @returns {String} Options HTML string.
 */
function getOptions(returnString = true) {
    let question = model.quiz.questions[model.quiz.currentQuestion];
    let options = [];

    let currentOptionIndex = 0;
    for (let option of question.options) {
        let optionClasses = "question-option";

        // If option has image, append special class for specific styling.
        if (option.contentImage) optionClasses += " question-option-image";

        options.push( `
                            <div class="${optionClasses}" ${option.contentImage ? 'style="background-image: url(' + option.contentImage + ')"': ""} onClick="pickOption(${currentOptionIndex})">
                                ${getTextOptionContent(option)}
                            </div>
                        `);
        
        currentOptionIndex++;
    }

    if (returnString) return options.join(" ")

    return options;
}

function countDownEnded() {
    clearInterval(model.countDownIntervalID);
    model.countDownIntervalID  = undefined;
    model.timeLeft = 25;
    
    goToPage('results');
}

function timer(){
    model.timeLeft -= 1;

    if (model.timeLeft <= 0) { 
        countDownEnded();
    }

    updateViews();
}