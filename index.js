
const jsdom = require("jsdom");
const { JSDOM } = jsdom;


const axios = require("axios");
const webInsights = require ('./webInsights');

const URL = process.argv.length < 3 ?
    //"https://web.ics.purdue.edu/~gchopra/class/public/pages/webdesign/05_simple.html"
    "https://gitlab.com/revel-systems-public/challenge-2-webpage-analysis"
    //"https://www.npmjs.com/package/jsdom"  
    : process.argv[2];  

    axios.get(URL).then(res => {
    let dom = new JSDOM(res.data).window.document;
    let paths = webInsights.findAllPaths([dom.firstElementChild.tagName], dom.firstElementChild)
    let uniqueTags = webInsights.findAllUniqueTags(dom)
    let tagUsageMap = webInsights.findTagUsageCount(dom)
    let mostUsedTag = webInsights.findMostUsedTag(tagUsageMap)
    let longestPath = webInsights.findLongestPath(paths)
    let longestPathWithTag = webInsights.findLongestPathWithTag(paths, mostUsedTag.tag)

    console.log("List of unique tags: " + uniqueTags)
    console.log ("Most used tag is " + mostUsedTag.tag.tagName + " used " + mostUsedTag.timesUsed + " times")
    console.log ("The longest path of "+ longestPath.nodeCount + " nodes is "+ longestPath.path)
    console.log ("The longest path with tag " + longestPathWithTag.tag.tagName +  " is "+ longestPathWithTag.path)
    }).catch(function (error) {
        console.log(error);
    })







