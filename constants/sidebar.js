//s and ss start at 0 here
const getBackKey = (pageKey, sections, s, ss) => {
    let bs = s + 1
    let bss = ss + 1
    if (ss === 0) {
        if (s > 0) {
            bs -= 1
            bss = sections[bs].subSections.length
        }
    }
    else {
        bss -= 1
    }
    return '/' + pageKey + '/' + bs + '/' + bss
}
//s and ss start at 0 here
const getNextKey = (pageKey, sections, s, ss) => {
    let ns = s + 1
    let nss = ss + 1
    if (ss === sections[s].subSections.length - 1) {
        if (s < sections.length - 1) {
            ns += 1
            nss = 1
        }
    }
    else {
        nss += 1
    }
    return '/' + pageKey + '/' + ns + '/' + nss
}

module.exports = { getBackKey, getNextKey }