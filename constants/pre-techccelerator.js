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
                name: "Setup Github Auth",
                videoUrl,
            },
            {
                name: "Install VSCode",
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
                name: "Basics of HTML",
                videoUrl,
            },
            {
                name: "HTML tags",
                videoUrl,
            },
            {
                name: "Add HTML to your website",
                videoUrl,
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
            {
                name: "Final reminders",
                videoUrl,
            },
        ]
    }
]
module.exports = { sections };