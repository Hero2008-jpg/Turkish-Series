document.addEventListener("DOMContentLoaded", function () {
    // Loading Screen
    const loadingScreen = document.getElementById("loading-screen");
    setTimeout(() => {
        loadingScreen.style.display = "none";
    }, 1500); // Adjust timing if needed

    // Modal Functionality
    const modal = document.getElementById("ad-modal");
    const adButton = document.getElementById("ad-button");
    const closeBtn = document.querySelector(".close-btn");

    // Show modal when ad button is clicked
    adButton.onclick = function () {
        modal.style.display = "block";
    };

    // Hide modal when close button is clicked
    closeBtn.onclick = function () {
        modal.style.display = "none";
    };

    // Hide modal when user clicks outside of it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
});
