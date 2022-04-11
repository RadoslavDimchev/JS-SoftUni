function workingHours(input) {

    let hour = Number(input[0]);
    let dayFromWeek = input[1];

    if (hour >= 10 && hour <= 18) {
        switch (dayFromWeek) {
            case "Monday":
            case "Tuesday":
            case "Wednesday":
            case "Thursday":
            case "Friday":
            case "Saturday": console.log("open"); break;
            case "Sunday": console.log("closed"); break;
        }
    } else {
        console.log("closed");
    }
}
workingHours(["11", "Monday"]);
workingHours(["19", "Friday"]);
workingHours(["11", "Sunday"]);



function workingHours(input) {
 
    let hour = Number(input[0]);
    let dayFromWeek = input[1];
 
    switch (dayFromWeek) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
        case "Saturday":
            if (hour >= 10 && hour <= 18) {
                console.log("open"); break;
            }
        case "Sunday": console.log("closed"); break;
    }
}
workingHours(["11", "Monday"]);
workingHours(["19", "Friday"]);
workingHours(["11", "Sunday"]);