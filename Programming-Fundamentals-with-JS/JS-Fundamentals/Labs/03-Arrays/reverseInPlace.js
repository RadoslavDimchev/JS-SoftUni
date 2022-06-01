function reverseInPlace(arr) {
    let k = arr.length - 1;

    for (let i = 0; i < arr.length / 2; i++, k--) {
        let temp = arr[i];
        arr[i] = arr[k];
        arr[k] = temp;
    }

    console.log(arr.join(' '));
}

reverseInPlace(['a', 'b', 'c', 'd', 'e']);
reverseInPlace(['abc', 'def', 'hig', 'klm', 'nop']);
reverseInPlace(['33', '123', '0', 'dd']);