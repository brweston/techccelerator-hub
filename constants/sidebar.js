//s and ss start at 0 here
const getBackKey = (pageKey, sections, s, ss) => {
    let bs = s
    let bss = ss - 1
    //assume logic in ejs that if ss and s = 0 then nav btn disabled and getBackKey will not be called
    if (ss === 0) {
        bs -= 1
        bss = sections[bs].subSections.length - 1
    }
    return '/' + pageKey + '/' + (bs + 1).toString() + '/' + (bss + 1).toString()
}
//s and ss start at 0 here
const getNextKey = (pageKey, sections, s, ss) => {
    let ns = s
    let nss = ss + 1
    //assume logic in ejs that if last s and last ss then nav btn disabled and getNextKey will not be called
    if (ss === sections[s].subSections.length - 1) {
        ns += 1
        nss = 0
    }
    return '/' + pageKey + '/' + (ns + 1).toString() + '/' + (nss + 1).toString()
}

module.exports = { getBackKey, getNextKey }