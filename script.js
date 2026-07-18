// ==========================
// PROJECT LION v1
// script.js
// ==========================

console.log("🦁 Project Lion Loaded");

// --------------------------
// CARD FADE-IN ANIMATION
// --------------------------

const cards = document.querySelectorAll(".card");

cards.forEach((card, index) => {

    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";

    setTimeout(() => {

        card.style.transition = "all .6s ease";
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";

    }, index * 200);

});

// --------------------------
// SIMPLE CARD SLIDER
// --------------------------

const cardsContainer = document.querySelector(".cards");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

if (cardsContainer && nextBtn && prevBtn) {

    nextBtn.addEventListener("click", () => {

        cardsContainer.scrollBy({
            left: 320,
            behavior: "smooth"
        });

    });

    prevBtn.addEventListener("click", () => {

        cardsContainer.scrollBy({
            left: -320,
            behavior: "smooth"
        });

    });

}

// --------------------------
// NAVBAR SHADOW ON SCROLL
// --------------------------

const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,.35)";

    } else {

        navbar.style.boxShadow = "none";

    }

});

// --------------------------
// SMOOTH SCROLL
// --------------------------

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});

console.log("✅ Everything is working!");
