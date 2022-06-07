function rotateArray(arr) {
    let arrToModify = [];

    for (let element of arr) {
        arrToModify.push(element);
    }

    let rotations = Number(arrToModify.pop());

    for (let index = 0; index < rotations; index++) {
        let lastElement = arrToModify.pop();
        arrToModify.unshift(lastElement);
    }

    console.log(arrToModify.join(' '));
}

rotateArray(['1', '2', '3', '4', '2']);
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);