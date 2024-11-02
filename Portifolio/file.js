// Toggle Mobile Navigation Menu
const nav = document.querySelector('nav');
const toggleButton = document.querySelector('.logo');

toggleButton.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Smooth Scrolling
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = event.target.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
        // Hide the navigation menu on mobile after clicking a link
        nav.classList.remove('active');
    });
});

// Typing Animation for Rotating Titles
const titles = ["Web Developer", "Developer", "Web Designer", "Youtuber", "Script Writer"];
let currentTitleIndex = 0;
let typingIndex = 0;
const typingSpeed = 150;
const erasingSpeed = 100;
const newTitleDelay = 2000;
const typingTextElement = document.querySelector('.typing-text span::before');

function type() {
    if (typingIndex < titles[currentTitleIndex].length) {
        typingTextElement.textContent += titles[currentTitleIndex].charAt(typingIndex);
        typingIndex++;
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(erase, newTitleDelay);
    }
}

function erase() {
    if (typingIndex > 0) {
        typingTextElement.textContent = titles[currentTitleIndex].substring(0, typingIndex - 1);
        typingIndex--;
        setTimeout(erase, erasingSpeed);
    } else {
        currentTitleIndex = (currentTitleIndex + 1) % titles.length;
        setTimeout(type, typingSpeed + 1100);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(type, newTitleDelay);
});

// Theme Toggle (Dark/Light Mode)
const themeToggleButton = document.createElement('button');
themeToggleButton.classList.add('btn');
themeToggleButton.textContent = 'Toggle Theme';
document.body.appendChild(themeToggleButton);

themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    document.body.style.transition = "background-color 0.5s ease";
    
    if (document.body.classList.contains('light-theme')) {
        document.body.style.backgroundColor = "#ffffff";
        document.body.style.color = "#000000";
    } else {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "#ffffff";
    }
});
