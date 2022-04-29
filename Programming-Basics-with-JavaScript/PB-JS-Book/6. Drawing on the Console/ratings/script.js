function drawRating(rating) {
    let html = "";
    let allStars = 10;
    let fullStars = Math.floor(rating / allStars);
    let emptyStars = Math.floor((100 - rating) / allStars);
    let halfStars = allStars - fullStars - emptyStars;

    for (let i = 0; i < fullStars; i++) {
        html += '<img src="images/full-star.png">';
    }
    for (let i = 0; i < halfStars; i++) {
        html += '<img src="images/half-star.png">';
    }
    for (let i = 0; i < emptyStars; i++) {
        html += '<img src="images/empty-star.png">';
    }

    return html;
}

function drawHandler() {
    let ratingInput = document.getElementById("input-rating")
    let rating = parseInt(ratingInput.value);
    let ratingHolder = document.getElementById("ratingHolder");
    let html = drawRating(rating);
    ratingHolder.innerHTML = html;
}

function appInit() {
    let button = document.getElementById("input-draw");
    button.addEventListener("click", drawHandler);
    drawHandler();
}

document.addEventListener("DOMContentLoaded", appInit);