function split(wholeArray) {

    let midpoint = Math.floor(wholeArray.length / 2);

    let firstHalf = wholeArray.slice(0, midpoint);
    let secondHalf = wholeArray.slice(midpoint);

    return [firstHalf, secondHalf];
}

function mergeSort(array) {
    if (array.length < 2) {
        return array;
    } else {
        let arrays = split(array);
        return merge(mergeSort(arrays[0]), mergeSort(arrays[1]));
    }
}

function merge(array1, array2) {
    let newArr = [];

    while (array1.length && array2.length) {

        if (array1[0] <= array2[0]) {
            newArr.push(array1.shift());
        } else {
            newArr.push(array2.shift());
        }
    }

    while (array2.length) {
        newArr.push(array2.shift());
    }

    while (array1.length) {
        newArr.push(array1.shift());
    }

    return newArr;
}