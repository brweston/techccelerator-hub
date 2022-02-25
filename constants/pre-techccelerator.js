const videoUrl = "../../public/codevid.mov"

const sections = [
    {
        name: 'Introduction',
        subSections: [
            {
                name: "About this course",
                videoUrl: null,
            }
        ],
    },
    {
        name: "Setup",
        subSections: [
            {
                name: "Install Git",
                videoUrl,
            },
            {
                name: "Create project",
                videoUrl,

            },
            {
                name: "Upload to Github",
                videoUrl,

            },
        ]
    },
    {
        name: "HTML Tutorial",
        subSections: [
            {
                name: "What is HTML?",
                videoUrl,
            },
            {
                name: "Parts of an HTML file",
                videoUrl,
            },
            {
                name: "Important tags",
                videoUrl,
            },
            {
                name: "Properties of tags",
                videoUrl,
            },
            {
                name: "Add HTML to your game",
                videoUrl,
            },
        ]
    },
    {
        name: "CSS Tutorial",
        subSections: [
            {
                name: "What is CSS?",
                videoUrl,
            },
            {
                name: "Basic syntax",
                videoUrl,
            },
            {
                name: "Important styles",
                videoUrl,
            },
            {
                name: "The Box Method",
                videoUrl,
            },
            {
                name: "Dynamic styling",
                videoUrl,
            },
            {
                name: "Add CSS to your game",
                videoUrl,
            },
        ]
    },
    {
        name: "Javascript Tutorial",
        subSections: [
            {
                name: "What is Javascript?",
                videoUrl,
            },
            {
                name: "Variables",
                videoUrl,
            },
            {
                name: "Strings",
                videoUrl,
            },
            {
                name: "Arrays",
                videoUrl,
            },
            {
                name: "Objects",
                videoUrl,
            },
            {
                name: "Conditional statements",
                videoUrl,
            },
            {
                name: "Functions",
                videoUrl,
            },
            {
                name: "DOM functions",
                videoUrl,
            },
            {
                name: "Add JS to your game",
                videoUrl,
            },
        ]
    },
    {
        name: "Finish Project",
        subSections: [
            {
                name: "Upload to Github",
                videoUrl,
            },
        ]
    }
]
module.exports = { sections };