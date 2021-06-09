function renderQuestionView() {
    let question = model.quiz.questions[model.quiz.currentQuestion];

    return `
    <div id="question-counter">Question ${model.quiz.currentQuestion + 1} / ${model.quiz.questions.length}</div>
        <div id="questionPageBody">
            <h1>${question.title}</h1>
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
    console.log("getOptionContent", option);
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

/**
 * Get list of options.
 * @returns {String} Options HTML string.
 */
function getOptions(returnString = true) {
    let question = model.quiz.questions[model.quiz.currentQuestion];
    let options = [];

    for (let option of question.options) {
        let optionClasses = "question-option";

        // If option has image, append special class for specific styling.
        if (option.contentImage) optionClasses += " question-option-image";

        options.push( `
                            <div class="${optionClasses}" ${option.contentImage ? 'style="background-image: url(' + option.contentImage + ')"': ""}>
                                ${getTextOptionContent(option)}
                            </div>
                        `);
    }

    if (returnString) return options.join(" ")

    return options;
}