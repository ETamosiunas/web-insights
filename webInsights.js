let paths = [] ;

const findAllPaths = (currentPath, input) => {
   
    if (input.childElementCount != 0)
    {
        for(tag of input.childNodes){
            let path = [];

        for (v of currentPath)
            path.push(v)

        path.push(tag.tagName)
        findAllPaths(path, tag)
        } 
    }
    else {
        paths.push(currentPath)
    }
    return paths;
}

const findLongestPath = (input) => {
    let currentLongestPath = null
    let currentLongestPathLength = 0

    for (path of input)
        if(path.length > currentLongestPathLength){
            currentLongestPath = path
            currentLongestPathLength = path.length
        }
        
        return {
            'path' : currentLongestPath,
            'nodeCount' : currentLongestPathLength
        };  
    
}

const findAllUniqueTags = (input) =>{
    let tags = []
    for(tag of input.getElementsByTagName('*')){
        if(!tags.includes(tag.tagName))
            tags.push(tag.tagName);
    }
    return tags
}

const findTagUsageCount = (input) => {
    let tagCounts = new Map();
    for(tag of input.getElementsByTagName('*')){
        if(!tagCounts.has(tag.tagName))
            tagCounts.set(tag.tagName, 1);
        else {
            let newCount = tagCounts.get(tag.tagName) + 1
            tagCounts.set(tag.tagName, newCount)
        }
            
    }
    return tagCounts
}

const findMostUsedTag = (input) => {
    let mostUsed = null
    let maxCount = 0
    for (const [key, value] of input)
        if(value > maxCount){
            mostUsed = key
            maxCount = value
        }
    return {
        'tag' : tag,
        'timesUsed' : maxCount
    }; 
}

const findLongestPathWithTag = (input, tag) => {
    let currentLongestPath = null
    let currentLongestPathLength = 0

    for (const path of input)
        if(path.length > currentLongestPathLength & path.includes(tag.tagName)){
            currentLongestPath = path
            currentLongestPathLength = path.length
        }
    
    
    return {
        'tag' : tag,
        'path' : currentLongestPath
    };
}

exports.findLongestPathWithTag = findLongestPathWithTag;
exports.findMostUsedTag = findMostUsedTag;
exports.findTagUsageCount = findTagUsageCount;
exports.findAllUniqueTags = findAllUniqueTags;
exports.findAllPaths = findAllPaths;
exports.findLongestPath = findLongestPath;

