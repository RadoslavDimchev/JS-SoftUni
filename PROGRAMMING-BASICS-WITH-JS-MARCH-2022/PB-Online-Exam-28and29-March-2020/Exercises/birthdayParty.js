function birthdayParty(input) {
    let hallRental = Number(input[0]);
    let cake = hallRental * 0.20;
    let drinks = cake * 0.55;
    let animator = hallRental / 3;

    let finalPrice = hallRental + cake + drinks + animator;

    console.log(finalPrice);
}

birthdayParty([2250]);
birthdayParty([3720]);