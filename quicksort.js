function quickSort(array) {
    if (array.length < 2) {
        return array;
    } else {
        let arrays = split(array);
        return quick(quickSort(arrays[0]), quickSort(arrays[1]));
    }
}

function split(array) {
    let midpoint = Math.floor(array.length / 2);

    let left = array.slice(0, midpoint);
    let right = array.slice(midpoint);

    return [left, right]
}

function quick(array) {
    let result = [];
    let left = [];
    let right = [];
    let pivot = array[Math.floor(array.length / 2)];

    for (let i = 0; i < array.length; i++) { 
        let num = array[i];
        if (num < pivot) {
            left.push(array.shift());
        } else {
            right.push(array.shift());
        }
    }

    while (left.length) {
        result.push(left.shift());
    }

    while (right.length) {
        result.push(right.shift());
    }

    return result;
}