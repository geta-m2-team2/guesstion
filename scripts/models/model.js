const model = {
    viewsCallbackFunc: undefined,
    viewsCallbackArgs: [],
    currentPage: "home",
    isQuizMaster: false, // Set true to always be QM (NB: applies to **everyone**).
    inputQuizMasterPassword: "",
    quizMasterPassword: "a", // FIXME: Probably change this.
    nick: "TESTER", // **YOUR** Nick.
    countDownSeconds: 25, // Time to reset timeLeft to on a new timer event.
    timeLeft: 25, // Time reminaing of current countdown timer event.
    countDownIntervalID: undefined, // Internal ID assigned by setInterval, stored here to keep track of running timers.
    bgmUrlId: "Bvw6ZxKtGRs", // Video ID of YouTube viceo (https://youtube.com/watch?v=<ID>).
    users: [
        {
            // User
            nick: "TESTER",  // Nickname
            prevScore: 0, // Score from previous question answer.
            score: 0,     // Total score.
            answers: []  // list of answers (question option indexes).
        },
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
                            contentImage: "https://geta-m2-team2.github.io/guesstion/sample/turnip.jpg",
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
                    imageUrl: "https://geta-m2-team2.github.io/guesstion/sample/portal.jpg",
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