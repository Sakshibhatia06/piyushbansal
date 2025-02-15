function stopVideo() {
    const iframe = document.getElementById('youtubeVideo');
    iframe.src = iframe.src; // Reset the iframe src
}
const carousel = document.getElementById("carousel");
const indicatorsContainer = document.getElementById("indicators");
const cards = document.querySelectorAll(".doContainer");

let currentIndex = 0;
let totalCards = cards.length;

// Create indicator dots dynamically
for (let i = 0; i < totalCards; i++) {
    let indicator = document.createElement("div");
    indicator.classList.add("indicator");
    if (i === 0) indicator.classList.add("active");
    indicator.dataset.index = i;
    indicator.addEventListener("click", () => scrollToCard(i));
    indicatorsContainer.appendChild(indicator);
}

// Scroll to the corresponding card when indicator is clicked
function scrollToCard(index) {
    let cardWidth = cards[0].offsetWidth + 20; // Include gap
    carousel.scrollLeft = index * cardWidth;
    updateIndicators(index);
}

// Update active indicator
function updateIndicators(index) {
    document.querySelectorAll(".indicator").forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
    });
}

// Detect scroll and update indicator dynamically
carousel.addEventListener("scroll", () => {
    let cardWidth = cards[0].offsetWidth + 20; // Include gap
    let scrollIndex = Math.round(carousel.scrollLeft / cardWidth);
    
    if (scrollIndex !== currentIndex) {
        currentIndex = scrollIndex;
        updateIndicators(scrollIndex);
    }
});
