const ratingsForm = document.querySelector(".ratings-form")
const ratingsConfirmation = document.querySelector(".ratings-confirmation")
const submitBtn = document.querySelector(".submit-btn")
const ratings = document.querySelector(".ratings")
const rating = document.querySelector(".rating-score")
let selectedRating = null

ratings.addEventListener("click", e => {
    if (e.target.tagName == "LI") {
        if (selectedRating) selectedRating.classList.remove("selected")
        e.target.classList.add("selected")
        selectedRating = e.target
    }
})

submitBtn.addEventListener("click", e => {
    if (!selectedRating) return

    rating.textContent = selectedRating.textContent
    ratingsForm.classList.add("hide-ratings-form")
    ratingsConfirmation.classList.add("show-ratings-confirmation")

    setTimeout(resetUI, 5000)
})

const resetUI = () => {
    selectedRating.classList.remove("selected")
    selectedRating = null

    ratingsForm.classList.remove("hide-ratings-form")
    ratingsConfirmation.classList.remove("show-ratings-confirmation")
}
