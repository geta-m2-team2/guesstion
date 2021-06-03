function proceedToPage(page, forwards = true) {
    if (forwards) {
        // Go to next question (if not at end of list)
        if (model.quiz.questions.length > model.quiz.currentQuestion + 1) {
            model.quiz.currentQuestion += 1;
            goToPage(page);
        }
    } else {
        // Go to prev question (if not at start of list)
        if (model.quiz.currentQuestion !== 0) {
            model.quiz.currentQuestion -= 1;
            goToPage(page);
        }
    }
}