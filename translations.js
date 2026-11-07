const translations = {
    tr: {
        welcome: "Hoş geldin!",
        description: "Web sitemize hoş geldin."
    },

    en: {
        welcome: "Welcome!",
        description: "Welcome to our website."
    }
};

let currentLanguage = "tr";

function setLanguage(lang) {
    currentLanguage = lang;

    document.querySelectorAll("[world-data]").forEach(element => {
        const key = element.getAttribute("world-data");

        if (translations[lang]?.[key]) {
            element.textContent = translations[lang][key];
        }
    });
}

setLanguage(currentLanguage);


const translations = {
    tr: {
        settings: "Ayarlar",
        language: "Dil",
        theme: "Tema"
    },

    en: {
        settings: "Settings",
        language: "Language",
        theme: "Theme"
    }
};

const settingsBtn = document.getElementById("world-settings-btn");
const settingsMenu = document.getElementById("world-settings-menu");

const languageSelect = document.getElementById("world-language");
const themeSelect = document.getElementById("world-theme");

function setLanguage(lang) {
    const dictionary = translations[lang];

    if (!dictionary) return;

    localStorage.setItem("world-language", lang);

    document.documentElement.lang = lang;

    document.querySelectorAll("[world-data]").forEach(element => {
        const key = element.getAttribute("world-data");

        if (key in dictionary) {
            element.textContent = dictionary[key];
        }
    });

    languageSelect.value = lang;
}

function setTheme(theme) {
    if (!["light", "dark"].includes(theme)) return;

    document.documentElement.dataset.theme = theme;

    localStorage.setItem("world-theme", theme);

    themeSelect.value = theme;
}

settingsBtn.addEventListener("click", () => {
    settingsMenu.classList.toggle("active");
});

languageSelect.addEventListener("change", (e) => {
    setLanguage(e.target.value);
});

themeSelect.addEventListener("change", (e) => {
    setTheme(e.target.value);
});

// Kayıtlı ayarları yükle
setLanguage(localStorage.getItem("world-language") || "tr");
setTheme(localStorage.getItem("world-theme") || "light");
