/**
 * @jest-environment jsdom
 */

const wevInsights = require('./webInsights')
const array = 
[
    ["LI", "UL", "DIV", "HTML"],
    ["P", "LI"],
    ["HTML", "DIV", "DIV", "P", "P"],
]
const element = document.createElement('HTML')
test ('Finds the longest path', () => {
    expect(wevInsights.findLongestPath(array).path).toStrictEqual(["HTML", "DIV", "DIV", "P", "P"])
    expect(wevInsights.findLongestPath(array).nodeCount).toStrictEqual(5)
})

test ('Finds the longest path containing node', () => {
    expect(wevInsights.findLongestPathWithTag(array, element ).path).toStrictEqual(["HTML", "DIV", "DIV", "P", "P"])
    
})