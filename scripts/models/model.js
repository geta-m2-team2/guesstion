const model = {
    viewsCallbackFunc: undefined,
    viewsCallbackArgs: [],
    currentPage: "scoreboard",
    isQuizMaster: true,
    inputQuizMasterPassword: "",
    quizMasterPassword: "a",
    nick: "",
    users: [
        {
            // User
            nick: "James",
            prevScore: 700,
            score: 1000,
            answers: [
                {
                    contentText: "Et norsk IKT-selskap.",
                    contentImage: null
                },
                {
                    contentText: "Chell",
                    contentImage: null,
                }
            ] // list of answers.
        },
        {
            // User
            nick: "Emma",
            prevScore: 1500,
            score: 2000,
            answers: [
                {
                    contentText: "Et norsk IKT-selskap.",
                    contentImage: null
                }
            ] // list of answers.
        },
        {
            // User
            nick: "Nickolas",
            prevScore: 650,
            score: 950,
            answers: [
                {
                    contentText: "Et norsk IKT-selskap.",
                    contentImage: null
                }
            ] // list of answers.
        },
        {
            // User
            nick: "Richard",
            prevScore: 600,
            score: 600,
            answers: [
                {
                    contentText: "Et norsk IKT-selskap.",
                    contentImage: null
                }
            ] // list of answers.
        },
        {
            // User
            nick: "Ziggy",
            prevScore: 1000,
            score: 1500,
            answers: [
                {
                    contentText: "Et norsk IKT-selskap.",
                    contentImage: null
                }
            ] // list of answers.
        },
        {
            // User
            nick: "Ben",
            prevScore: 500,
            score: 500,
            answers: [
                {
                    contentText: "Et norsk IKT-selskap.",
                    contentImage: null
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
                    contentText: "Et norsk IKT-selskap.",
                    contentImage: null
                }
            }
        }
    ],
    quiz: {
            soundtrack: {
                contentType: "youtube-url",
                content: "https://www.youtube.com/watch?v=XwuxFtaaOW0",
            },
            currentQuestion: 0,
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
                            contentText: "Et norsk IKT-selskap.",
                            contentImage: null,
                            isCorrect: true,
                            votes: 5
                        },
                        {
                            // Option
                            contentText: "Picture of turnips",
                            contentImage: "https://puu.sh/HLDW2/60d0248ebc.jpg",
                            isCorrect: false,
                            votes: 10
                        },
                        {
                            // Option
                            contentText: "En butikkjede.",
                            contentImage: null,
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
                            contentText: "Alyx",
                            contentImage: null,
                            isCorrect: false,
                            votes:15
                        },
                        {
                            // Option
                            contentText: "Chell",
                            contentImage: null,
                            isCorrect: true,
                            votes: 5
                        },
                        {
                            // Option
                            contentText: "Gabe",
                            contentImage: null,
                            isCorrect: false,
                            votes: 25
                        }, // option
                        {
                            // Option
                            contentText: "GLaDOS",
                            contentImage: null,
                            isCorrect: false,
                            votes: 35
                        } // option
                    ] // options
                } // question
            ] // questions
        } // quiz
}; // model