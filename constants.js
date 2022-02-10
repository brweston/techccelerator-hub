const videoUrl = "../../codevid.mov"

const generateBackLink = (subSectionInfo, sections, sectionInfo) => {
    var s = sectionInfo.subSections
    var i = s.indexOf(subSectionInfo)
    var ss = sections.indexOf(sectionInfo)
    var backLink = "/" + sectionInfo.key + "/" + i.toString()
    if (i === 0) {
        if (ss === 0) {
            backLink = "/"
        }
        else {
            var lastSection = sections[ss - 1]
            backLink = "/" + lastSection.key + "/" + (lastSection.subSections.length).toString()
        }
    }
    return backLink
}

const generateNextLink = (subSectionInfo, sections, sectionInfo) => {
    var s = sectionInfo.subSections
    var i = s.indexOf(subSectionInfo)
    var ss = sections.indexOf(sectionInfo)
    var nextLink = "/" + sectionInfo.key + "/" + (i + 2).toString()
    if (i === s.length - 1) {
        if (ss === sections.length - 1) {
            nextLink = "/"
        }
        else {
            var nextSection = sections[ss + 1]
            nextLink = "/" + nextSection.key + "/1"
        }
    }
    return nextLink
}

const sections = [
    {
        key: "setup",
        name: "Setup",
        link: "/setup/1",
        done: true,
        subSections: [
            {
                name: "Install Git",
                link: "/setup/1",
                back: "/",
                next:"/setup/2",
                done: true,
                videoUrl,
                questions: null
            },
            {
                name: "Create project",
                link: "/setup/2",
                back: "/setup/1",
                next:"/setup/3",
                done: true,
                videoUrl,
                questions: null
            },
            {
                name: "Upload to Github",
                link: "/setup/3",
                back: "/setup/2",
                next:"/learn-html/1",
                done: true,
                videoUrl,
                questions: null
            },
        ]
    },
    {
        key: "learn-html",
        name: "HTML Tutorial",
        link: "/learn-html/1",
        done: false,
        subSections: [
            {
                name: "What is HTML?",
                link: "/learn-html/1",
                back: "/setup/3",
                next:"/learn-html/2",
                done: true,
                videoUrl,
                questions: null
            },
            {
                name: "Parts of an HTML file",
                link: "/learn-html/2",
                back: "/learn-html/1",
                next:"/learn-html/3",
                done: false,
                videoUrl,
                questions: null
            },
            {
                name: "Important tags",
                link: "/learn-html/3",
                back: "/learn-html/2",
                next:"/learn-html/4",
                done: false,
                videoUrl,
                questions: null
            },
            {
                name: "Properties of tags",
                link: "/learn-html/4",
                back: "/learn-html/3",
                next:"/learn-html/5",
                done: false,
                videoUrl,
                questions: null
            },
            {
                name: "Add HTML to your game",
                link: "/learn-html/5",
                back: "/learn-html/4",
                next:"/learn-css/1",
                done: false,
                videoUrl,
                questions: null
            },
        ]
    },
    {
        key: "learn-css",
        name: "CSS Tutorial",
        link: "/learn-css/1",
        done: false,
        subSections: [
            {
                name: "What is CSS?",
                link: "/learn-css/1",
                back: "/learn-html/5",
                next:"/learn-css/2",
                done: false,
                videoUrl,
                questions: null
            },
            {
                name: "Basic syntax",
                link: "/learn-css/2",
                back: "/learn-css/1",
                next:"/learn-css/3",
                done: false,
                videoUrl,
                questions: null
            },
            {
                name: "Important styles",
                link: "/learn-css/3",
                back: "/learn-css/2",
                next:"/learn-css/4",
                done: false,
                videoUrl,
                questions: null
            },
            {
                name: "The Box Method",
                link: "/learn-css/4",
                back: "/learn-css/3",
                next:"/learn-css/5",
                done: false,
                videoUrl,
                questions: null
            },
            {
                name: "Dynamic styling",
                link: "/learn-css/5",
                back: "/learn-css/4",
                next:"/learn-css/6",
                done: false,
                videoUrl,
                questions: null
            },
            {
                name: "Add CSS to your game",
                link: "/learn-css/6",
                back: "/learn-css/5",
                next:"/learn-js/1",
                done: false,
                videoUrl,
                questions: null
            },
        ]
    },
    {
        key: "learn-js",
        name: "Javascript Tutorial",
        link: "/learn-js/1",
        done: false,
        subSections: [
            {
                name: "What is Javascript?",
                link: "/learn-js/1",
                back: "/learn-css/6",
                next:"/learn-js/2",
                done: false,
                videoUrl,
                questions: null
            },
            {
                name: "Variables",
                link: "/learn-js/2",
                back: "/learn-js/1",
                next:"/learn-js/3",
                done: false,
                videoUrl,
                questions: null
            },
            {
                name: "Strings",
                link: "/learn-js/3",
                back: "/learn-js/2",
                next:"/learn-js/4",
                done: false,
                videoUrl,
                questions: null
            },
            {
                name: "Arrays",
                link: "/learn-js/4",
                back: "/learn-js/3",
                next:"/learn-js/5",
                done: false,
                videoUrl,
                questions: null
            },
            {
                name: "Objects",
                link: "/learn-js/5",
                back: "/learn-js/4",
                next:"/learn-js/6",
                done: false,
                videoUrl,
                questions: null
            },
            {
                name: "Conditional statements",
                link: "/learn-js/6",
                back: "/learn-js/5",
                next:"/learn-js/7",
                done: false,
                videoUrl,
                questions: null
            },
            {
                name: "Functions",
                link: "/learn-js/7",
                back: "/learn-js/6",
                next:"/learn-js/8",
                done: false,
                videoUrl,
                questions: null
            },
            {
                name: "DOM functions",
                link: "/learn-js/8",
                back: "/learn-js/7",
                next:"/learn-js/9",
                done: false,
                videoUrl,
                questions: null
            },
            {
                name: "Add JS to your game",
                link: "/learn-js/9",
                back: "/learn-js/8",
                next:"/finish/1",
                done: false,
                videoUrl,
                questions: null
            },
        ]
    },
    {
        key: "finish",
        name: "Finish Project",
        link: "/finish/1",
        done: false,
        subSections: [
            {
                name: "Upload to Github",
                link: "/finish/1",
                back: "/learn-js/9",
                next:"/",
                done: false,
                videoUrl,
                questions: null
            },
        ]
    }
]
module.exports = { sections, generateBackLink, generateNextLink };