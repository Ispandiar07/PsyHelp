const message = document.getElementById("message");

const texts = {
    sad: "Қазір қиын болып тұрса да, бұл мәңгі емес. Сен жалғыз емессің 🤍",
    tired: "Демалу – әлсіздік емес. Өзіңе уақыт бер 😌",
    anxious: "Терең тыныс ал. Қазір және осы жерде бәрі жақсы 🌿",
    happy: "Керемет! Осы сәтті бағала 😊"
};

function setMood(mood) {
    message.textContent = texts[mood];
    localStorage.setItem("mood", mood);
}

function resetMood() {
    message.textContent = "Көңіл-күйіңді таңда";
    localStorage.removeItem("mood");
}

const savedMood = localStorage.getItem("mood");
if (savedMood) {
    message.textContent = texts[savedMood];
}
