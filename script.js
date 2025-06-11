// --- STRUCTURE DE DONNÉES MISE À JOUR ---
// Plus besoin de la section 'audio', l'IA s'en charge !
const data = {
    uiText: {
        fr: { title: "Le Jeu des Mots Parlants", instruction: "Choisis une catégorie !", categories: { "Fruits": "Fruits", "Animaux": "Animaux" }},
        en: { title: "The Talking Words Game", instruction: "Choose a category!", categories: { "Fruits": "Fruits", "Animaux": "Animals" }},
        mg: { title: "Lalao Fiteny Miteny", instruction: "Mifidiana sokajy!", categories: { "Fruits": "Voankazo", "Animaux": "Biby" }}
    },
    items: {
        "Fruits": [
            { names: { fr: "Pomme", en: "Apple", mg: "Paoma" }, image: "images/pomme.png" },
            { names: { fr: "Banane", en: "Banana", mg: "Akondro" }, image: "images/banane.png" }
        ],
        "Animaux": [
            { names: { fr: "Chat", en: "Cat", mg: "Saka" }, image: "images/chat.png" },
            { names: { fr: "Chien", en: "Dog", mg: "Alika" }, image: "images/chien.png" }
        ]
    }
};
// --------------------------------------------------------

// --- CONFIGURATION ---
// REMPLACEZ "VOTRE_CLÉ_API_HUGGING_FACE" par la clé que vous avez copiée.
const HUGGING_FACE_API_KEY = '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';
// ---------------------

let currentLanguage = 'fr';
let currentCategory = '';
let currentAudio = null;
let isSpeaking = false; // Pour éviter les clics multiples pendant que l'IA travaille

const gameContainer = document.getElementById('game-container');
const categoryButtonsContainer = document.getElementById('category-buttons');
const languageSwitcherContainer = document.getElementById('language-switcher');
const mainTitle = document.getElementById('main-title');
const instructionText = document.getElementById('instruction-text');

// NOUVELLE FONCTION "SPEAK" qui utilise l'API
async function speakWithAPI(text, langCode) {
    if (isSpeaking) return; // Empêche de lancer une nouvelle requête si une est déjà en cours
    isSpeaking = true;

    let modelId = '';
    // On choisit le bon modèle en fonction de la langue
    if (langCode === 'mg-MG') {
        modelId = 'facebook/mms-tts-mlg';
    } else if (langCode === 'fr-FR') {
        modelId = 'facebook/mms-tts-fra'; // Modèle français de la même famille
    } else if (langCode === 'en-US') {
        modelId = 'facebook/mms-tts-eng'; // Modèle anglais
    }

    if (!modelId) {
        console.error("Modèle non supporté pour cette langue");
        isSpeaking = false;
        return;
    }

    try {
        const response = await fetch(`https://api-inference.huggingface.co/models/${modelId}`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${HUGGING_FACE_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "inputs": text })
        });

        if (!response.ok) {
            throw new Error(`Erreur API: ${response.statusText}`);
        }

        const audioBlob = await response.blob();
        const audioUrl = URL.createObjectURL(audioBlob);
        
        if (currentAudio) {
            currentAudio.pause();
        }
        currentAudio = new Audio(audioUrl);
        currentAudio.play();
        
        // On attend la fin de la lecture pour autoriser un nouveau clic
        currentAudio.onended = () => {
            isSpeaking = false;
        };

    } catch (error) {
        console.error("Impossible de générer l'audio:", error);
        alert("Désolé, une erreur est survenue lors de la génération de la voix.");
        isSpeaking = false;
    }
}

function displayCategory(categoryName) {
    currentCategory = categoryName;
    gameContainer.innerHTML = '';
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
            const textToSpeak = item.names[currentLanguage];
            const langCode = { fr: 'fr-FR', en: 'en-US', mg: 'mg-MG' }[currentLanguage];
            speakWithAPI(textToSpeak, langCode);
        });
    });
}

// Le reste du code (updateUI, création des boutons...) ne change pas.
// Vous pouvez le reprendre de la réponse précédente.
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
    if (lang === currentLanguage) {
        button.classList.add('active');
    }
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