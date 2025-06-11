// =======================================================
// FICHIER DE DONNÉES DU JEU
// Version complète avec 12 mots par catégorie.
// 'display' = ce qui est affiché. 'speech' = ce qui est prononcé.
// =======================================================

const data = {
    uiText: {
        fr: { title: "Le Jeu des Mots Parlants", instruction: "Choisis une catégorie !", categories: { "Fruits": "Fruits", "Animaux": "Animaux", "Verbes": "Verbes" }},
        en: { title: "The Talking Words Game", instruction: "Choose a category!", categories: { "Fruits": "Fruits", "Animaux": "Animals", "Verbes": "Verbs" }},
        mg: { title: "Lalao teny Gasy", instruction: "Mifidiana sokajy!", categories: { "Fruits": "Voankazo", "Animaux": "Biby", "Verbes": "Matoanteny" }}
    },
    items: {
        "Fruits": [
            { names: { fr: { display: "Pomme", speech: "Pomme" }, en: { display: "Apple", speech: "Apple" }, mg: { display: "Paoma", speech: "Paume" } }, image: "images/pomme.png" },
            { names: { fr: { display: "Banane", speech: "Banane" }, en: { display: "Banana", speech: "Banana" }, mg: { display: "Akondro", speech: "Akoundre" } }, image: "images/banane.png" },
            { names: { fr: { display: "Fraise", speech: "Fraise" }, en: { display: "Strawberry", speech: "Strawberry" }, mg: { display: "Frezy", speech: "Fraize" } }, image: "images/fraise.png" },
            { names: { fr: { display: "Orange", speech: "Orange" }, en: { display: "Orange", speech: "Orange" }, mg: { display: "Voasary", speech: "Vaussarr" } }, image: "images/orange.png" },
            { names: { fr: { display: "Citron", speech: "Citron" }, en: { display: "Lemon", speech: "Lemon" }, mg: { display: "Voasary makirana", speech: "Vaussarr makiiiirann" } }, image: "images/citron.png" },
            { names: { fr: { display: "Cerise", speech: "Cerise" }, en: { display: "Cherry", speech: "Cherry" }, mg: { display: "Serizy", speech: "Cérise" } }, image: "images/cerise.png" },
            { names: { fr: { display: "Raisin", speech: "Raisin" }, en: { display: "Grapes", speech: "Grapes" }, mg: { display: "Voaloboka", speech: "Voloubk" } }, image: "images/raisin.png" },
            { names: { fr: { display: "Pêche", speech: "Pêche" }, en: { display: "Peach", speech: "Peach" }, mg: { display: "Pesy", speech: "Pa-iche" } }, image: "images/peche.png" },
            { names: { fr: { display: "Poire", speech: "Poire" }, en: { display: "Pear", speech: "Pear" }, mg: { display: "Poara", speech: "Pouarr" } }, image: "images/poire.png" },
            { names: { fr: { display: "Ananas", speech: "Ananas" }, en: { display: "Pineapple", speech: "Pineapple" }, mg: { display: "Mananasy", speech: "Mananach" } }, image: "images/ananas.png" },
            { names: { fr: { display: "Melon", speech: "Melon" }, en: { display: "Melon", speech: "Melon" }, mg: { display: "Melonina", speech: "Melon" } }, image: "images/melon.png" },
            { names: { fr: { display: "Pastèque", speech: "Pastèque" }, en: { display: "Watermelon", speech: "Watermelon" }, mg: { display: "Pasteky", speech: "Pastèk" } }, image: "images/pasteque.png" }
        ],
        "Animaux": [
            { names: { fr: { display: "Chat", speech: "Chat" }, en: { display: "Cat", speech: "Cat" }, mg: { display: "Saka", speech: "Saque" } }, image: "images/chat.png" },
            { names: { fr: { display: "Chien", speech: "Chien" }, en: { display: "Dog", speech: "Dog" }, mg: { display: "Alika", speech: "Alique" } }, image: "images/chien.png" },
            { names: { fr: { display: "Cheval", speech: "Cheval" }, en: { display: "Horse", speech: "Horse" }, mg: { display: "Soavaly", speech: "Sovalle" } }, image: "images/cheval.png" },
            { names: { fr: { display: "Vache", speech: "Vache" }, en: { display: "Cow", speech: "Cow" }, mg: { display: "Omby", speech: "Oumbe" } }, image: "images/vache.png" },
            { names: { fr: { display: "Lion", speech: "Lion" }, en: { display: "Lion", speech: "Lion" }, mg: { display: "Liona", speech: "Lioune" } }, image: "images/lion.png" },
            { names: { fr: { display: "Mouton", speech: "Mouton" }, en: { display: "Sheep", speech: "Sheep" }, mg: { display: "Ondry", speech: "Oundrr" } }, image: "images/mouton.png" },
            { names: { fr: { display: "Cochon", speech: "Cochon" }, en: { display: "Pig", speech: "Pig" }, mg: { display: "Kisoa", speech: "Kishou" } }, image: "images/cochon.png" },
            { names: { fr: { display: "Poule", speech: "Poule" }, en: { display: "Hen", speech: "Hen" }, mg: { display: "Akoho", speech: "Akouhou" } }, image: "images/poule.png" },
            { names: { fr: { display: "Éléphant", speech: "Éléphant" }, en: { display: "Elephant", speech: "Elephant" }, mg: { display: "Elefanta", speech: "Éléfant" } }, image: "images/elephant.png" },
            { names: { fr: { display: "Girafe", speech: "Girafe" }, en: { display: "Giraffe", speech: "Giraffe" }, mg: { display: "Jirafy", speech: "Jirafe" } }, image: "images/girafe.png" },
            { names: { fr: { display: "Singe", speech: "Singe" }, en: { display: "Monkey", speech: "Monkey" }, mg: { display: "Gidro", speech: "Guidrou" } }, image: "images/singe.png" },
            { names: { fr: { display: "Poisson", speech: "Poisson" }, en: { display: "Fish", speech: "Fish" }, mg: { display: "Trondro", speech: "troundrou" } }, image: "images/poisson.png" }
        ],
        "Verbes": [
            { names: { fr: { display: "Manger", speech: "Manger" }, en: { display: "To eat", speech: "To eat" }, mg: { display: "Mihinana", speech: "Mi-inann" } }, image: "images/manger.png" },
            { names: { fr: { display: "Courir", speech: "Courir" }, en: { display: "To run", speech: "To run" }, mg: { display: "Mihazakazaka", speech: "Mihazakazaque" } }, image: "images/courir.png", audio: { mg: "audio/mihazakazaka.mp3" } },
            { names: { fr: { display: "Jouer", speech: "Jouer" }, en: { display: "To play", speech: "To play" }, mg: { display: "Milalao", speech: "Milalao" } }, image: "images/jouer.png" },
            { names: { fr: { display: "Boire", speech: "Boire" }, en: { display: "To drink", speech: "To drink" }, mg: { display: "Misotro", speech: "Missoutrrrou" } }, image: "images/boire.png" },
            { names: { fr: { display: "Dormir", speech: "Dormir" }, en: { display: "To sleep", speech: "To sleep" }, mg: { display: "Matory", speech: "Matourre" } }, image: "images/dormir.png" },
            { names: { fr: { display: "Lire", speech: "Lire" }, en: { display: "To read", speech: "To read" }, mg: { display: "Mamaky", speech: "Mamaque" } }, image: "images/lire.png" },
            { names: { fr: { display: "Écrire", speech: "Écrire" }, en: { display: "To write", speech: "To write" }, mg: { display: "Manoratra", speech: "Manouratrr" } }, image: "images/ecrire.png" },
            { names: { fr: { display: "Chanter", speech: "Chanter" }, en: { display: "To sing", speech: "To sing" }, mg: { display: "Mihira", speech: "Mi-irre" } }, image: "images/chanter.png" },
            { names: { fr: { display: "Danser", speech: "Danser" }, en: { display: "To dance", speech: "To dance" }, mg: { display: "Mandihy", speech: "Mandihy" } }, image: "images/danser.png" },
            { names: { fr: { display: "Sauter", speech: "Sauter" }, en: { display: "To jump", speech: "To jump" }, mg: { display: "Mitsambikina", speech: "Mitsambiknn" } }, image: "images/sauter.png" },
            { names: { fr: { display: "Regarder", speech: "Regarder" }, en: { display: "To watch", speech: "To watch" }, mg: { display: "Mijery", speech: "Midjérre" } }, image: "images/regarder.png" },
            { names: { fr: { display: "Dessiner", speech: "Dessiner" }, en: { display: "To draw", speech: "To draw" }, mg: { display: "Manao sary", speech: "Manaou sarre" } }, image: "images/dessiner.png" }
        ]
    }
};