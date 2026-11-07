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
