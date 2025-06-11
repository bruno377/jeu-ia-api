// =======================================================
// FICHIER DE DONNÉES DU JEU
// Modifiez ce fichier pour ajouter/modifier des mots et catégories.
// =======================================================

const data = {
    uiText: {
        fr: { title: "Le Jeu des Mots Parlants", instruction: "Choisis une catégorie !", categories: { "Fruits": "Fruits", "Animaux": "Animaux", "Verbes": "Verbes" }},
        en: { title: "The Talking Words Game", instruction: "Choose a category!", categories: { "Fruits": "Fruits", "Animaux": "Animals", "Verbes": "Verbs" }},
        mg: { title: "Lalao teny Gasy", instruction: "Mifidiana sokajy!", categories: { "Fruits": "Voankazo", "Animaux": "Biby", "Verbes": "Matoanteny" }}
    },
    items: {
        "Fruits": [
            // Mots existants
            { names: { fr: "Pomme", en: "Apple", mg: "Paume" }, image: "images/pomme.png" },
            { names: { fr: "Banane", en: "Banana", mg: "Akoundre" }, image: "images/banane.png" },
            // 10 Nouveaux Fruits
            { names: { fr: "Fraise", en: "Strawberry", mg: "Fraize" }, image: "images/fraise.png" },
            { names: { fr: "Orange", en: "Orange", mg: "Vaussarr" }, image: "images/orange.png" },
            { names: { fr: "Citron", en: "Lemon", mg: "Vaussarr makiiiirann" }, image: "images/citron.png" },
            { names: { fr: "Cerise", en: "Cherry", mg: "Cérise" }, image: "images/cerise.png" },
            { names: { fr: "Raisin", en: "Grapes", mg: "Voloubk" }, image: "images/raisin.png" },
            { names: { fr: "Pêche", en: "Peach", mg: "Paich" }, image: "images/peche.png" },
            { names: { fr: "Poire", en: "Pear", mg: "Pouarr" }, image: "images/poire.png" },
            { names: { fr: "Ananas", en: "Pineapple", mg: "Mananach" }, image: "images/ananas.png" },
            { names: { fr: "Melon", en: "Melon", mg: "Melon" }, image: "images/melon.png" },
            { names: { fr: "Pastèque", en: "Watermelon", mg: "Pastèk" }, image: "images/pasteque.png" }
        ],
        "Animaux": [
            // Mots existants
            { names: { fr: "Chat", en: "Cat", mg: "Saque" }, image: "images/chat.png" },
            { names: { fr: "Chien", en: "Dog", mg: "Alique" }, image: "images/chien.png" },
            // 10 Nouveaux Animaux
            { names: { fr: "Cheval", en: "Horse", mg: "Sovalle" }, image: "images/cheval.png" },
            { names: { fr: "Vache", en: "Cow", mg: "Oumbe" }, image: "images/vache.png" },
            { names: { fr: "Lion", en: "Lion", mg: "Lioune" }, image: "images/lion.png" },
            { names: { fr: "Mouton", en: "Sheep", mg: "Oundrr" }, image: "images/mouton.png" },
            { names: { fr: "Cochon", en: "Pig", mg: "Kishou" }, image: "images/cochon.png" },
            { names: { fr: "Poule", en: "Hen", mg: "Akouhou" }, image: "images/poule.png" },
            { names: { fr: "Éléphant", en: "Elephant", mg: "Éléfant" }, image: "images/elephant.png" },
            { names: { fr: "Girafe", en: "Giraffe", mg: "Jirafe" }, image: "images/girafe.png" },
            { names: { fr: "Singe", en: "Monkey", mg: "Guidrou" }, image: "images/singe.png" },
            { names: { fr: "Poisson", en: "Fish", mg: "troundrou" }, image: "images/poisson.png" }
        ],
        "Verbes": [
            // Mots existants
            { names: { fr: "Manger", en: "To eat", mg: "Mihinane" }, image: "images/manger.png" },
            { names: { fr: "Courir", en: "To run", mg: "Mihazakazaka" }, image: "images/courir.png", audio: { mg: "audio/mihazakazaka.mp3" } },
            // 10 Nouveaux Verbes
            { names: { fr: "Jouer", en: "To play", mg: "Milalao" }, image: "images/jouer.png" },
            { names: { fr: "Boire", en: "To drink", mg: "Missoutrrrou" }, image: "images/boire.png" },
            { names: { fr: "Dormir", en: "To sleep", mg: "Matourre" }, image: "images/dormir.png" },
            { names: { fr: "Lire", en: "To read", mg: "Mamaque" }, image: "images/lire.png" },
            { names: { fr: "Écrire", en: "To write", mg: "Manourate" }, image: "images/ecrire.png" },
            { names: { fr: "Chanter", en: "To sing", mg: "Mi-ira" }, image: "images/chanter.png" },
            { names: { fr: "Danser", en: "To dance", mg: "Mandihy" }, image: "images/danser.png" },
            { names: { fr: "Sauter", en: "To jump", mg: "Missott" }, image: "images/sauter.png" },
            { names: { fr: "Regarder", en: "To watch", mg: "Midjérre" }, image: "images/regarder.png" },
            { names: { fr: "Dessiner", en: "To draw", mg: "Manaou dessin" }, image: "images/dessiner.png" }
        ]
    }
};