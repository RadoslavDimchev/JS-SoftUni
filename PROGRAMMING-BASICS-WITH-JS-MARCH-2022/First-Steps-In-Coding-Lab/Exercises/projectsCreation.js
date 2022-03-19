function projectsCreation(input) {
    let name = input[0];
    let projectNumber = input[1];
    let hours = projectNumber * 3
    console.log(`The architect ${name} will need ${hours} hours to complete ${projectNumber} project/s.`);
}

projectsCreation([`George`, `4`]);