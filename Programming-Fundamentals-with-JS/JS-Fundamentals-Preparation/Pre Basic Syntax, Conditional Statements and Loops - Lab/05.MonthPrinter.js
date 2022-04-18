function monthPrinter(month) {
    if (month === 1)
        console.log('January');
    else if (month === 2)
        console.log('February');
    else if (month === 3)
        console.log('March');
    else if (month === 4)
        console.log('April');
    else if (month === 5)
        console.log('May');
    else if (month === 6)
        console.log('June');
    else if (month === 7)
        console.log('July');
    else if (month === 8)
        console.log('August');
    else if (month === 9)
        console.log('September');
    else if (month === 10)
        console.log('October');
    else if (month === 11)
        console.log('November');
    else if (month === 12)
        console.log('December');
    else
        console.log('Error!');
}

monthPrinter(2);
monthPrinter(13);