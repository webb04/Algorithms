function quickSort(array) {
    if (array.length < 2) {
        return array;
    }

    let pivot = array.shift();
    let less = array.filter(item => item <= pivot);
    let greater = array.filter(item => item > pivot);

    return [...quickSort(less), pivot, ...quickSort(greater)];    
}

quickSort([10, 5, 2, 3]);