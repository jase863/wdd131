// Footer Content
const date = new Date();

document.querySelector("#currentyear").innerHTML = `&copy;${date.getFullYear()}`

document.querySelector("#lastModified").innerHTML = `Last Modification: ${document.lastModified}`;


// review Counter
const reviewsCounter = document.querySelector(".reviews");

let completedReviews = Number(window.localStorage.getItem("numReviews-ls")) || 0;

if (completedReviews !== 0) {
	reviewsCounter.textContent = `Number of reviews completed: ${completedReviews}`;
} else {
	reviewsCounter.textContent = `This is your first review.`;
}

completedReviews++;

localStorage.setItem("numReviews-ls", completedReviews);