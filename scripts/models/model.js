const model = {
    viewsCallbackFunc: undefined,
    viewsCallbackArgs: [],
    currentPage: "home",
    isQuizMaster: false,
    inputQuizMasterPassword: "",
    quizMasterPassword: "a",
    nick: "James",
    countDownSeconds: 10,
    timeLeft: 10,
    countDownIntervalID: undefined,
    users: [
        {
            // User
            nick: "James",  // Nickname
            prevScore: 500, // Score from previous question answer.
            score: 500,     // Total score.
            answers: [0,2]  // list of answers (question option indexes).
        },
        {
            // User
            nick: "Emma",
            prevScore: 0,
            score: 0,
            answers: [2,3] // list of answers.
        },
        {
            // User
            nick: "Nickolas",
            prevScore: 500,
            score: 1000,
            answers: [0,1] // list of answers.
        },
        {
            // User
            nick: "Richard",
            prevScore: 500,
            score: 500,
            answers: [0,0] // list of answers.
        },
        {
            // User
            nick: "Ziggy",
            prevScore: 500,
            score: 1000,
            answers: [0,1] // list of answers.
        },
        {
            // User
            nick: "Ben",
            prevScore: 0,
            score: 0,
            answers: [2,2] // list of answers.
        },
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