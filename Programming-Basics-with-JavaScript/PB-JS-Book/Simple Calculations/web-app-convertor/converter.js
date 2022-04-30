function eurConverter() {
    let bgn = document.getElementById("bgn").value;
    let eur = (bgn / 1.95583).toFixed(2);
    document.getElementById("euro").value = eur;
}