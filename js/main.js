const ratingOptions = document.querySelector(".rating-options");
const submitBtn = document.querySelector(".submit-btn");
let prevRatingId = -1;
let prevAdjRating = -1;

const HandleStyles = {
    addSelectedStyle: elId => {
        document.getElementById(elId).classList.add("selected-rating");
    },
    addAdjStyle: elId => {
        document.getElementById(elId).classList.add("selected-rating-left");
    },
    removeSelectedStyle: elId => {
        document.getElementById(elId).classList.remove("selected-rating");
    },
    removeAdjStyle: elId => {
        document.getElementById(elId).classList.remove("selected-rating-left");
    }
};

ratingOptions.addEventListener("click", (e) => {
    
    //if prevRatingId != -1, remove previous styles
    //if Rating > 1, add styles to left element and selected element
    //Set selected rating id as prev rating id
    if (prevRatingId != -1) {
        HandleStyles.removeSelectedStyle(prevRatingId);
    }
    if (prevRatingId > 1) {
        HandleStyles.removeAdjStyle(prevRatingId - 1);
    }

    if ( e.target.id) {
        console.log(e.target.id);
        HandleStyles.addSelectedStyle(e.target.id);
        if (e.target.id > 1) {
            HandleStyles.addAdjStyle(e.target.id - 1);
        }
        prevRatingId = e.target.id;
    } else if (e.target.parentElement.id) {
        HandleStyles.addSelectedStyle(e.target.parentElement.id);
        if (e.target.parentElement.id > 1) {
            HandleStyles.addAdjStyle(e.target.parentElement.id - 1);
        }
        prevRatingId = e.target.parentElement.id;
    }

});

submitBtn.addEventListener("click", () => {
    document.getElementById("rateUs").classList.add("hidden");
    document.getElementById("thanks").classList.remove("hidden");
});