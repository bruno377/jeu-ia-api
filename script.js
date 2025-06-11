// La constante 'data' est chargée depuis data.js

let currentLanguage = 'fr';
let currentCategory = '';
let currentAudio = null;

const synth = window.speechSynthesis;
const gameContainer = document.getElementById('game-container');
const categoryButtonsContainer = document.getElementById('category-buttons');
const languageSwitcherContainer = document.getElementById('language-switcher');
const mainTitle = document.getElementById('main-title');
const instructionText = document.getElementById('instruction-text');

// --- FONCTION "SPEAK" MODIFIÉE ---
function speak(item, langCode, cardElement) {
    if (synth.speaking) synth.cancel();
    if (currentAudio) currentAudio.pause();
    
    // --- NOUVEAU : Cacher tous les textes des autres cartes ---
    document.querySelectorAll('.card-word').forEach(p => p.textContent = '');

    cardElement.classList.add('loading');

    // --- NOUVEAU : Affiche le mot à l'écran ---
    const wordElement = cardElement.querySelector('.card-word');
    if (wordElement) {
        wordElement.textContent = item.names[currentLanguage].display;
    }

    const speakWithPhonetics = () => {
        const text = item.names.mg.speech; // Utilise la version 'speech'
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'fr-FR';
        utterance.onend = () => cardElement.classList.remove('loading');
        utterance.onerror = (e) => {
            console.error('Erreur de synthèse vocale:', e);
            cardElement.classList.remove('loading');
        };
        synth.speak(utterance);
    };

    if (langCode === 'mg-MG' && item.audio && item.audio.mg) {
        currentAudio = new Audio(item.audio.mg);
        currentAudio.onended = () => cardElement.classList.remove('loading');
        currentAudio.onerror = () => {
            console.warn(`MP3 non trouvé. Utilisation de la phonétique.`);
            speakWithPhonetics();
        };
        currentAudio.play();
    } else {
        const textToSpeak = item.names[currentLanguage].speech; // Utilise la version 'speech'
        const effectiveLangCode = (langCode === 'mg-MG') ? 'fr-FR' : langCode;
        
        const utterance = new SpeechSynthesisUtterance(textToSpeak);
        utterance.lang = effectiveLangCode;
        utterance.onend = () => cardElement.classList.remove('loading');
        utterance.onerror = (e) => {
            console.error('Erreur de synthèse vocale:', e);
            cardElement.classList.remove('loading');
        };
        synth.speak(utterance);
    }
}

function displayCategory(categoryName) {
    currentCategory = categoryName;
    gameContainer.innerHTML = '';
    if (synth.speaking) synth.cancel();
    if (currentAudio) currentAudio.pause();
    
    const items = data.items[categoryName];

    items.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('card');

        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.names[currentLanguage].display; // Utilise le mot correct pour l'alternative textuelle
        card.appendChild(img);

        // --- NOUVEAU : Ajoute un élément <p> pour le mot ---
        const wordText = document.createElement('p');
        wordText.classList.add('card-word');
        card.appendChild(wordText); // On l'ajoute à la carte

        gameContainer.appendChild(card);

        card.addEventListener('click', () => {
            const langCode = { fr: 'fr-FR', en: 'en-US', mg: 'mg-MG' }[currentLanguage];
            speak(item, langCode, card);
        });
    });
}

// Le reste du code ne change pas
function updateUI() {
    mainTitle.textContent = data.uiText[currentLanguage].title;
    instructionText.textContent = data.uiText[currentLanguage].instruction;
    document.querySelectorAll('.category-btn').forEach(button => {
        const categoryKey = button.dataset.key;
        button.textContent = data.uiText[currentLanguage].categories[categoryKey];
    });
    if (currentCategory) {
        displayCategory(currentCategory);
    }
}
['fr', 'en', 'mg'].forEach(lang => {
    const button = document.createElement('button');
    let buttonText;
    if (lang === 'fr') buttonText = 'Français';
    else if (lang === 'en') buttonText = 'English';
    else if (lang === 'mg') buttonText = 'Malagasy';
    button.textContent = buttonText;
    button.classList.add('lang-btn');
    button.dataset.lang = lang;
    if (lang === currentLanguage) button.classList.add('active');
    button.addEventListener('click', () => {
        currentLanguage = lang;
        document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        updateUI();
    });
    languageSwitcherContainer.appendChild(button);
});
Object.keys(data.items).forEach(categoryKey => {
    const button = document.createElement('button');
    button.classList.add('category-btn');
    button.dataset.key = categoryKey;
    button.addEventListener('click', () => {
        document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        displayCategory(categoryKey);
    });
    categoryButtonsContainer.appendChild(button);
});
updateUI();