const sections = [
    {
        key: "learn-js",
        name: "Learn Web Dev",
        link: "/learn-js/1",
        done: true,
        subSections: [
            {
                name: "What is Javascript?",
                link: "/learn-js/1",
                back: "/",
                next: "/learn-js/2",
                done: true,
                videoUrl: "../../movie.mp4",
                questions: [
                    {
                        title: "What is the name of this song?",
                        options: [
                            "Option 0",
                            "Option 1",
                            "Option 2 (correct)",
                            "Option 3",
                        ],
                        correct: 2,
                    }
                ]
            },
            {name: "Basic syntax", link: "/learn-js/2", back: "/learn-js/1", next: "/learn-js/3", done: true, videoUrl: null, questions: null},
            {name: "DOM Elements", link: "/learn-js/3", back: "/learn-js/2", next: "/build-game/1", done: true, videoUrl: null, questions: null},
        ],
    },
    {
        key: "build-game",
        name: "BUild your game!",
        link: "/build-game/1",
        done: false,
        subSections: [
            {name: "Add Movement", link: "/build-game/1", back: "/learn-js/3", next: "/build-game/2", done: true, videoUrl: null, questions: null},
            {name: "Game Rules", link: "/build-game/2", back: "/build-game/1", next: "/build-game/3", done: false, videoUrl: null, questions: null},
            {name: "Upload to Github", link: "/build-game/3", back: "/build-game/2", next: "/test-knowledge/1", done: false, videoUrl: null, questions: null},
        ]
    },
    {
        key: "test-knowledge",
        name: "Test your knowledge",
        link: "/test-knowledge/1",
        done: false,
        subSections: [
            {name: "Section 1", link: "/test-knowledge/1", back: "/build-game/3", next: "/", done: false, videoUrl: null, questions: null},
        ]
    }
]
module.exports = { sections: sections };