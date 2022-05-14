function distinctArray(integers) {
    for (let i = 0; i < integers.length; i++) {
        let currentInteger = integers[i];
        for (let j = i + 1; j < integers.length; j++) {
            let nextInteger = integers[j];
            if (currentInteger === nextInteger) {
                integers.splice(j, 1);
                j--;
            }
        }
    }

    console.log(integers.join(' '));
}

distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
distinctArray([20, 8, 12, 13, 4, 4, 8, 5]);