const videoUrl = "../../public/codevid.mov"

const sections = [
    {
        name: 'Introduction',
        subSections: [
            {
                name: "About this course",
                videoUrl,
            }
        ],
    },
    {
        name: "Setup",
        subSections: [
            {
                name: "Install Git",
                videoUrl: "https://www.youtube.com/embed/Yyc0dMxZHtQ",
            },
            {
                name: "Install VSCode",
                videoUrl: "https://www.youtube.com/embed/fsyBPUHGIbw",
            },
            {
                name: "Setup project",
                videoUrl: "https://www.youtube.com/embed/Z_0msfwxhMc",

            },
            {
                name: "Upload to Github",
                videoUrl: "https://www.youtube.com/embed/6hL2_of2rlY",
            },
        ]
    },
    {
        name: "HTML Tutorial",
        subSections: [
            {
                name: "Basics of HTML",
                videoUrl: "https://www.youtube.com/embed/bQ0vZOfKTCw",
            },
            {
                name: "HTML tags",
                videoUrl,
            },
            {
                name: "Add HTML to your website",
                videoUrl: "https://www.youtube.com/embed/KoinJib3etc",
            },
        ]
    },
    {
        name: "CSS Tutorial",
        subSections: [
            {
                name: "Basics of CSS",
                videoUrl,
            },
            {
                name: "Important styles",
                videoUrl,
            },
            {
                name: "Advanced styling",
                videoUrl,
            },
            {
                name: "Add CSS to your website",
                videoUrl: "https://www.youtube.com/embed/mANvR0eBsdA",
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
                name: "Conditionals",
                videoUrl,
            },
            {
                name: "Functions",
                videoUrl,
            },
            {
                name: "Modifying the DOM",
                videoUrl,
            },
            {
                name: "Add JS to your website",
                videoUrl: "https://www.youtube.com/embed/PgOVA9lPEM4",
            },
        ]
    },
    {
        name: "Finish Project",
        subSections: [
            {
                name: "Upload to Github",
                videoUrl: "https://www.youtube.com/embed/y5Pvil3GSgI",
            },
            {
                name: "Final reminders",
                videoUrl,
            },
        ]
    }
]
module.exports = { sections };