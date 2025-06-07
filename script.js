document.addEventListener("DOMContentLoaded", function() {
    alert("Welcome to Wendel's Portfolio!");
});

document.querySelectorAll("nav a").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
    });
});

function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return false;
    }
    alert("Your message has been sent!");
    return true;
}

document.getElementById('hamburger-menu').addEventListener('click', function() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
});


document.getElementById("darkModeToggle")?.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

document.querySelector("img.profile-pic")?.addEventListener("mouseenter", function() {
    this.style.boxShadow = "0px 0px 15px rgba(255, 255, 255, 0.6)";
});
document.querySelector("img.profile-pic")?.addEventListener("mouseleave", function() {
    this.style.boxShadow = "none";
});
