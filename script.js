// Project Lion v1

console.log("Project Lion loaded 🚀");

// Egyszerű megjelenési animáció

const cards = document.querySelectorAll(".card");

cards.forEach((card, index) => {

    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";

    setTimeout(() => {

        card.style.transition = ".6s";
        card.style.opacity = "1";
        card.style.transform = "translateY(0px)";

    }, index * 200);

});
const cardsContainer = document.querySelector(".cards");

document.getElementById("next").onclick = () => {
    cardsContainer.scrollBy({
        left:320,
        behavior:"smooth"
    });
};

document.getElementById("prev").onclick = () => {
    cardsContainer.scrollBy({
        left:-320,
        behavior:"smooth"
    });
};
