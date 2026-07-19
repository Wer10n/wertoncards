// ========================================
// WERTONCARDS - PROJECT LION V3
// SINGLE CARD SLIDER
// ========================================

const cards = [

    {
        image: 'images/card1.jpg',
        title: '2024 Prizm LeBron James',
        grade: 'PSA 10',
        link: 'https://www.vinted.hu/member/262606254'
    },

    {
        image: 'images/card2.jpg',
        title: '2024 Select Patrick Mahomes',
        grade: 'PSA 9',
        link: 'https://www.vinted.hu/member/262606254'
    },

    {
        image: 'images/card3.jpg',
        title: 'Michael Jordan Fleer',
        grade: 'Near Mint',
        link: 'https://www.vinted.hu/member/262606254'
    }

];

let currentIndex = 0;

// ELEMEK

const cardContainer = document.querySelector('.featured-card');
const cardImage = document.getElementById('card-image');
const cardTitle = document.getElementById('card-title');
const cardGrade = document.getElementById('card-grade');
const cardLink = document.getElementById('card-link');

const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

// KÁRTYA FRISSÍTÉS

function updateCard(index){

    const card = cards[index];

    // fade out

    cardContainer.classList.add('fade');

    setTimeout(() => {

        cardImage.src = card.image;
        cardTitle.textContent = card.title;
        cardGrade.textContent = card.grade;
        cardLink.href = card.link;

        // fade in

        cardContainer.classList.remove('fade');

    }, 180);

}

// KÖVETKEZŐ

function nextCard(){

    currentIndex++;

    if(currentIndex >= cards.length){

        currentIndex = 0;

    }

    updateCard(currentIndex);

}

// ELŐZŐ

function prevCard(){

    currentIndex--;

    if(currentIndex < 0){

        currentIndex = cards.length - 1;

    }

    updateCard(currentIndex);

}

// GOMBOK

nextBtn.addEventListener('click', nextCard);
prevBtn.addEventListener('click', prevCard);

// BILLENTYŰZET

document.addEventListener('keydown', (e) => {

    if(e.key === 'ArrowRight') nextCard();

    if(e.key === 'ArrowLeft') prevCard();

});

// NAVBAR SHADOW

const navbar = document.querySelector('nav');

window.addEventListener('scroll', () => {

    if(window.scrollY > 20){

        navbar.style.boxShadow = '0 10px 30px rgba(0,0,0,.35)';

    } else {

        navbar.style.boxShadow = 'none';

    }

});

console.log('🦁 WERTONCARDS Project Lion v3 loaded');
