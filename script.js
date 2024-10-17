// script.js
document.addEventListener("DOMContentLoaded", () => {
    const drawer = document.getElementById("drawer");
    const toggleButton = document.getElementById("hamburger");
    const closeButton = document.getElementById("close-drawer");

    toggleButton.addEventListener("click", () => {
        drawer.classList.toggle("open"); // Toggle the open class
    });

    closeButton.addEventListener("click", () => {
        drawer.classList.remove("open"); // Remove the open class
    });
});
