function thousandDaysAfterBirth([arg1]) {
    let date = arg1;
    let dateArray = date.split('-');
    let dd = dateArray[0];
    let mm = dateArray[1];
    let yyyy = dateArray[2];

    let dateFormat = yyyy + "," + mm + "," + dd;
    let inputDate = new Date(dateFormat);
    let newDate = new Date(inputDate.setDate(inputDate.getDate() + 1000));

    dd = newDate.getDate();
    if (dd < 10) {
        dd = '0' + dd;
    }

    mm = newDate.getMonth() + 1;
    if (mm < 10) {
        mm = "0" + mm;
    }

    console.log(dd + "-" + mm + "-" + newDate.getFullYear());
}

thousandDaysAfterBirth(['25-02-1995']);