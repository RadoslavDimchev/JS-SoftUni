function echoType(param) {
    let type = typeof param;
    console.log(type);
    console.log(type == 'string' || type == 'number' ? param : 'Parameter is not suitable for printing');
}

echoType('Hello, JavaScript!');
echoType(18);
echoType(null);