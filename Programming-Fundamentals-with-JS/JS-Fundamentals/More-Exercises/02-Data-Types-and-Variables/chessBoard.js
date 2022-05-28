function chessBoard(size) {
    let print = '';
    let currentColor = '';

    print += '<div class="chessboard">\n';

    for (let row = 1; row <= size; row++) {
        print += '  <div>\n';

        if (row % 2 !== 0) {
            currentColor = 'black';
        } else {
            currentColor = 'white';
        }

        for (let col = 0; col < size; col++) {
            print += `    <span class="${currentColor}"></span>\n`;

            if (currentColor === 'black') {
                currentColor = 'white';
            } else {
                currentColor = 'black';
            }
        }

        print += '  </div>\n';
    }

    print += '</div>';

    console.log(print);
}

chessBoard(7);