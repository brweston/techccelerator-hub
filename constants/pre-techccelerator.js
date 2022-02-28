const videoUrl = "../../public/codevid.mov"
const baseUrl = "https://www.youtube.com/embed/"

const sections = [
    {
        name: 'Introduction',
        subSections: [
            {
                name: "About this course",
                videoUrl: baseUrl + "gAbK8h5Qw2o",
            }
        ],
    },
    {
        name: "Setup",
        subSections: [
            {
                name: "Install Git",
                videoUrl: baseUrl + "Yyc0dMxZHtQ",
            },
            {
                name: "Install VSCode",
                videoUrl: baseUrl + "fsyBPUHGIbw",
            },
            {
                name: "Setup project",
                videoUrl: baseUrl + "Z_0msfwxhMc",

            },
            {
                name: "Upload to Github",
                videoUrl: baseUrl + "6hL2_of2rlY",
            },
        ]
    },
    {
        name: "HTML Tutorial",
        subSections: [
            {
                name: "Basics of HTML",
                videoUrl: baseUrl + "bQ0vZOfKTCw",
            },
            {
                name: "Add HTML to your website",
                videoUrl: baseUrl + "KoinJib3etc",
            },
        ]
    },
    {
        name: "CSS Tutorial",
        subSections: [
            {
                name: "Basics of CSS",
                videoUrl: baseUrl + "-J5sLN4Oi58",
            },
            {
                name: "Advanced styling",
                videoUrl: baseUrl + "-dcIcF2SSHw",
            },
            {
                name: "Add CSS to your website",
                videoUrl: baseUrl + "mANvR0eBsdA",
            },
        ]
    },
    {
        name: "Javascript Tutorial",
        subSections: [
            {
                name: "Basics",
                videoUrl: baseUrl + "cyVox3tU7Wk",
            },
            {
                name: "Variables",
                videoUrl: baseUrl + "1tKk7qZQhqw",
            },
            {
                name: "Comparisons",
                videoUrl: baseUrl + "HXdGCogtH38"
            },
            {
                name: "Conditionals",
                videoUrl: baseUrl + "CsXvAmRrqiU",
            },
            {
                name: "Loops",
                videoUrl: baseUrl + "4aFr9j5EOzE",
            },
            {
                name: "Arrays",
                videoUrl: baseUrl + "izVS-2uMurA",
            },
            {
                name: "Functions",
                videoUrl: baseUrl + "acEy9C7-p7g",
            },
            {
                name: "Javascript Objects",
                videoUrl: baseUrl + "Gj58fx2C5MU"
            },
            {
                name: "Modifying the DOM",
                videoUrl: baseUrl + "6GJg3i715lQ",
            },
            {
                name: "Add JS to your website",
                videoUrl: baseUrl + "PgOVA9lPEM4",
            },
        ]
    },
    {
        name: "Finish Project",
        subSections: [
            {
                name: "Upload to Github",
                videoUrl: baseUrl + "y5Pvil3GSgI",
            },
        ]
    }
]
module.exports = { sections };