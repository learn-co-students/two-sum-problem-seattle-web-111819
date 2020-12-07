function bruteForceTwoSum (array, sum) {
    let result = []
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j <array.length; j++ ) {
            if (array[i] + array[j] === sum) result.push([array[i],array[j]])
        }
    }
    return result
}

function binarySearchTwoSum (array, sum) {

}

function binaryMatch (array, sum) {

}

function hashTwoSum (array, sum) {
    let hash = {}
    let result = []
    for (let i = 0; i < array.length; i++) {
        if (hash[sum - array[i]]) result.push([sum - array[i], array[i]])
        hash[array[i]] = i
    }
    return result
}
