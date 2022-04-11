function birthdayParty(arg1) {

    let hallRental = Number(arg1);
    let cake = hallRental * 0.20;
    let drinks = cake * 0.55;
    let animator = hallRental / 3;

    let finalPrice = hallRental + cake + drinks + animator;

    console.log(finalPrice);

}
birthdayParty();
birthdayParty();
