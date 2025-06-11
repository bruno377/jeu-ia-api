// La constante 'data' est maintenant chargée depuis le fichier data.js

let currentLanguage = 'fr';
let currentCategory = '';
let currentAudio = null;

const synth = window.speechSynthesis;
const gameContainer = document.getElementById('game-container');
const categoryButtonsContainer = document.getElementById('category-buttons');
const languageSwitcherContainer = document.getElementById('language-switcher');
const mainTitle = document.getElementById('main-title');
const instructionText = document.getElementById('instruction-text');

// --- FONCTION "SPEAK" FINALE ET HYBRIDE ---
function speak(item, langCode, cardElement) {
    if (synth.speaking) synth.cancel();
    if (currentAudio) currentAudio.pause();
    
    cardElement.classList.add('loading');

    const speakWithPhonetics = () => {
        const text = item.names.mg;
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'fr-FR'; // On force la voix française
        utterance.onend = () => cardElement.classList.remove('loading');
        utterance.onerror = (e) => {
            console.error('Erreur de synthèse vocale:', e);
            cardElement.classList.remove('loading');
        };
        synth.speak(utterance);
    };

    // --- LOGIQUE D'AIGUILLAGE FINALE ---
    if (langCode === 'mg-MG' && item.audio && item.audio.mg) {
        // PRIORITÉ 1 : Essayer de jouer le fichier MP3 s'il est défini
        currentAudio = new Audio(item.audio.mg);
        currentAudio.onended = () => cardElement.classList.remove('loading');
        currentAudio.onerror = () => {
            console.warn(`MP3 non trouvé (${item.audio.mg}). Utilisation de la phonétique en secours.`);
            speakWithPhonetics(); // Plan B : la phonétique
        };
        currentAudio.play();
    } else if (langCode === 'mg-MG') {
        // PRIORITÉ 2 : Si pas de MP3, utiliser la phonétique
        speakWithPhonetics();
    } else {
        // PRIORITÉ 3 : Pour les autres langues (FR, EN), utiliser la synthèse normale
        const text = item.names[currentLanguage];
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = langCode;
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
        img.alt = item.names[currentLanguage];
        card.appendChild(img);
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