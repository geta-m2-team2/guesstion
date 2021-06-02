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
        </div>
    `;
}

/**
 * Get the option content, computed according to contentType.
 * @param {Object} option Option to parse.
 * @returns {String} Computed option content string.
 */
function getOptionContent(option) {
    console.log("getOptionContent", option);
    if (option.contentType === "text") {
        return `<p>${option.content}</p>`;
    } else if (option.contentType === "image-url") {
        return "";
    } else {
        console.error("Unexpected option contentType!". option.contentType);
        return;
    }
}

/**
 * Get list of options.
 * @returns {String} Options HTML string.
 */
function getOptions() {
    let question = model.quiz.questions[model.quiz.currentQuestion];
    let optionsHTML = "";

    for (let option of question.options) {
        const hasImage = option.contentType === "image-url";
        let optionClasses = "question-option";

        // If option has image, append special class for specific styling.
        if (hasImage) optionClass += " question-option-image";

        optionsHTML += `
                            <div class="${optionClasses}" ${hasImage ? 'style="background-image: url(' + option.content + ')"': ""}>
                                ${getOptionContent(option)}
                            </div>
                        `;
    }

    return optionsHTML;
}
