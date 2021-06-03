const model = {
    currentPage: "results",
    isQuizMaster: true,
    inputQuizMasterPassword: "",
    quizMasterPassword: "a",
    nick: "",
    users: [
        {
            // User
            nick: "James",
            score: 0,
            answers: [
                {
                    contentType: "text",
                    content: "Et norsk IKT-selskap.",
                }
            ] // list of answers.
        },
        {
            // User
            nick: "Emma",
            score: 0,
            answers: [
                {
                    contentType: "text",
                    content: "Et norsk IKT-selskap.",
                }
            ] // list of answers.
        },
        {
            // User
            nick: "Nickolas",
            score: 0,
            answers: [
                {
                    contentType: "text",
                    content: "Et norsk IKT-selskap.",
                }
            ] // list of answers.
        },
        {
            // User
            nick: "Richard",
            score: 0,
            answers: [
                {
                    contentType: "text",
                    content: "Et norsk IKT-selskap.",
                }
            ] // list of answers.
        },
        {
            // User
            nick: "Ziggy",
            score: 0,
            answers: [
                {
                    contentType: "text",
                    content: "Et norsk IKT-selskap.",
                }
            ] // list of answers.
        },
        {
            // User
            nick: "Ben",
            score: 0,
            answers: [
                {
                    contentType: "text",
                    content: "Et norsk IKT-selskap.",
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
                option: {
                    contentType: "text",
                    content: "Et norsk IKT-selskap.",
                }
            }
        }
    ],
    quiz: {
            soundtrack: {
                contentType: "youtube-url",
                content: "https://www.youtube.com/watch?v=XwuxFtaaOW0",
            },
            currentQuestion: 1,
            questions: [
                {
                    // Question
                    title: "Norsk Data",
                    description: "Hva var Norsk Data?",
                    imageUrl: null,
                    scoreMultiplier: 1,
                    options: [
                        {
                            // Option
                            contentType: "text",
                            content: "Et norsk IKT-selskap.",
                            isCorrect: true,
                            votes: 5
                        },
                        {
                            // Option
                            contentType: "image-url",
                            content: "https://puu.sh/HLDW2/60d0248ebc.jpg",
                            isCorrect: false,
                            votes: 10
                        },
                        {
                            // Option
                            contentType: "text",
                            content: "En butikkjede.",
                            isCorrect: false,
                            votes: 3
                        } // option
                    ] // options
                }, // question
                {
                    // Question
                    title: "Portal",
                    description: "Hva heter karakteren du spiller i Portal 2",
                    imageUrl: "https://puu.sh/HLDHF/57622c6603.jpg",
                    scoreMultiplier: 1,
                    options: [
                        {
                            // Option
                            contentType: "text",
                            content: "Alyx",
                            isCorrect: false,
                            votes:45
                        },
                        {
                            // Option
                            contentType: "text",
                            content: "Chell",
                            isCorrect: true,
                            votes: 5
                        },
                        {
                            // Option
                            contentType: "text",
                            content: "Gabe",
                            isCorrect: false,
                            votes: 75
                        }, // option
                        {
                            // Option
                            contentType: "text",
                            content: "GLaDOS",
                            isCorrect: false,
                            votes: 135
                        } // option
                    ] // options
                } // question
            ] // questions
        } // quiz
}; // model