function triangleOf55Stars() {
    // console.log('*');
    // console.log('**');
    // console.log('***');
    // console.log('****');
    // console.log('*****');
    // console.log('******');
    // console.log('*******');
    // console.log('********');
    // console.log('*********');
    // console.log('**********');

    for(let i = 1; i <= 10; i++) {
        let print = '';
        for(let j = 1; j <= i; j++) {
            print += '*';
        }
        console.log(print);
    }
}

triangleOf55Stars();