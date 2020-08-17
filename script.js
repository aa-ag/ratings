// Initial ratings

let ratings = {
    one: 4.7,
    two: 3.4,
    three: 2.3,
    four: 3.6,
    five: 4.1,
}

// Total stars

const starsTotal = 5;

// Run getRatings() when DOM loads

document.addEventListener('DOMContentLoaded', getRatings);

// Get ratings

function getRatings() {
    for(let rating in ratings) {
        // get percentage
        const starPercentage = (ratings[rating] / 
        starsTotal) * 100;

        // round to neares 10

        const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;

        // // Set width of stars inners to percentage

        document.querySelector(`.${rating} .stars-inner`).style.width = 
        starPercentageRounded;
    }
}