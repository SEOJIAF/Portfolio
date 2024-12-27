document.getElementById("hover-image").addEventListener("mouseover", function () {
    createConfetti(this);
});

function createConfetti(element) {
    const confettiCount = 30; // Number of confetti pieces
    const rect = element.getBoundingClientRect();

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");

        // Randomize color
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;

        // Randomize position within the element
        confetti.style.left = `${Math.random() * rect.width}px`;
        confetti.style.top = `${Math.random() * rect.height}px`;

        // Add confetti to the document
        document.body.appendChild(confetti);

        // Position confetti to hover element's position
        confetti.style.position = "absolute";
        confetti.style.left = `${rect.left + Math.random() * rect.width}px`;
        confetti.style.top = `${rect.top + Math.random() * rect.height}px`;

        // Remove confetti after animation ends
        confetti.addEventListener("animationend", () => {
            confetti.remove();
        });
    }
}


