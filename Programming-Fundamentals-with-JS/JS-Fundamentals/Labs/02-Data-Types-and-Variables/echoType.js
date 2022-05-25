function echoType(parameter) {
    let type = typeof(parameter);
    console.log(type);

    if (type === 'string' || type === 'number') {
        console.log(parameter);
    } else {
        console.log('Parameter is not suitable for printing');
    }
}

echoType('Hello, JavaScript!');
echoType(18);
echoType(null);