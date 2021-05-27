const model = {
    currentPage: 0,
    currentQuiz: null,
    isQuizMaster: false,
    nick: "user1",
    users: [
        {
            // User
            nick: null,
            score: 0,
            answers: [
                {
                    contentType: "text",
                    content: "Et norsk IT-selskap.",
                }
            ] // list of answers.
        },
    ],
    userAnswers: [
        {
            "user1": {
                questionNo: 0,
                question: "Hva var Norsk Data?",
                answerNo: 0,
                option = {
                    contentType: "text",
                    content: "Et norsk IT-selskap.",
                }
            }
        }
    ],
    quizzes: [
        {
            soundtrack: {
                contentType: "youtube-url",
                content: "https://www.youtube.com/watch?v=XwuxFtaaOW0",
            },
            questions: [
                {
                    // Question
                    title: "Hva var Norsk Data?",
                    scoreMultiplier: 1,
                    options: [
                        {
                            // Option
                            contentType: "text",
                            content: "Et norsk IT-selskap.",
                            isCorrect: true
                        },
                        {
                            // Option
                            contentType: "image-url",
                            content: "https://en.wikipedia.org/wiki/Turnip#/media/File:Turnip_2622027.jpg",
                            isCorrect: false,
                        },
                        {
                            // Option
                            contentType: "text",
                            content: "En butikkjede.",
                            isCorrect: false,
                        } // option
                    ] // options
                } // question
            ] // questions
        } // quiz
    ], // quizzes
}; // model