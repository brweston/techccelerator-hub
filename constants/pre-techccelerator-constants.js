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

const sectionKeys = ['intro', 'setup', 'learn-html', 'learn-css', 'learn-js', 'finish']

const sections = [
    {
        key: 'intro',
        name: 'Introduction',
        subSections: [
            {
                key: 'about',
                name: "About this course",
                videoUrl: null,
            }
        ],
    },
    {
        key: "setup",
        name: "Setup",
        subSections: [
            {
                key: 'install-git',
                name: "Install Git",
                videoUrl,
            },
            {
                key: 'create-project',
                name: "Create project",
                videoUrl,

            },
            {
                key: 'upload-gh',
                name: "Upload to Github",
                videoUrl,

            },
        ]
    },
    {
        key: "learn-html",
        name: "HTML Tutorial",
        subSections: [
            {
                key: 'what-is-html',
                name: "What is HTML?",
                videoUrl,
            },
            {
                key: 'html-file',
                name: "Parts of an HTML file",
                videoUrl,
            },
            {
                key: 'imp-tags',
                name: "Important tags",
                videoUrl,
            },
            {
                key: 'tag-props',
                name: "Properties of tags",
                videoUrl,
            },
            {
                key: 'add-html',
                name: "Add HTML to your game",
                videoUrl,
            },
        ]
    },
    {
        key: "learn-css",
        name: "CSS Tutorial",
        subSections: [
            {
                key: 'what-is-css',
                name: "What is CSS?",
                videoUrl,
            },
            {
                key: 'basic-syntax',
                name: "Basic syntax",
                videoUrl,
            },
            {
                key: 'imp-styles',
                name: "Important styles",
                videoUrl,
            },
            {
                key: 'box-method',
                name: "The Box Method",
                videoUrl,
            },
            {
                key: 'dynamic-styles',
                name: "Dynamic styling",
                videoUrl,
            },
            {
                key: 'add-css',
                name: "Add CSS to your game",
                videoUrl,
            },
        ]
    },
    {
        key: "learn-js",
        name: "Javascript Tutorial",
        subSections: [
            {
                key: 'what-is-js',
                name: "What is Javascript?",
                videoUrl,
            },
            {
                key: 'js-vars',
                name: "Variables",
                videoUrl,
            },
            {
                key: 'js-strs',
                name: "Strings",
                videoUrl,
            },
            {
                key: 'js-arrs',
                name: "Arrays",
                videoUrl,
            },
            {
                key: 'js-objs',
                name: "Objects",
                videoUrl,
            },
            {
                key: 'js-condts',
                name: "Conditional statements",
                videoUrl,
            },
            {
                key: 'js-funcs',
                name: "Functions",
                videoUrl,
            },
            {
                key: 'dom-funcs',
                name: "DOM functions",
                videoUrl,
            },
            {
                key: 'add-js',
                name: "Add JS to your game",
                videoUrl,
            },
        ]
    },
    {
        key: "finish",
        name: "Finish Project",
        subSections: [
            {
                key: 'upload-gh-final',
                name: "Upload to Github",
                videoUrl,
            },
        ]
    }
]
module.exports = { sections, generateBackLink, generateNextLink, sectionKeys };