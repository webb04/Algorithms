function merge(left, right) {
    var result = []
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            result.push(left.shift())
        } else {
            result.push(right.shift())
        }
    }
    return result.concat(left).concat(right)
}
      
function mergeSort(list) {
    if (list.length < 2) {
        return list
    }
        
    var midpoint = list.length / 2
    var left = list.slice(0, midpoint)
    var right = list.slice(midpoint)
        
    return merge(mergeSort(left), mergeSort(right))
}