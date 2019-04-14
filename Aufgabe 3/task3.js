/**
Aufgabe: 3
Name: Julian Wörner
Matrikel: 260943
Datum: 11.04.2019
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
**/
var task3;
(function (task3) {
    document.addEventListener("DOMContentLoaded", maumau);
    let allCards = [{ farbe: "karo", wert: "karo 7" }, { farbe: "karo", wert: "karo 8" }, { farbe: "karo", wert: "karo 9" }, { farbe: "karo", wert: "karo 10" }, { farbe: "karo", wert: "karo bube" }, { farbe: "karo", wert: "karo dame" }, { farbe: "karo", wert: "karo könig" }, { farbe: "karo", wert: "karo ass" }, { farbe: "kreuz", wert: "kreuz 7" }, { farbe: "kreuz", wert: "kreuz 8" }, { farbe: "kreuz", wert: "kreuz 9" }, { farbe: "kreuz", wert: "kreuz 10" }, { farbe: "bube", wert: "kreuz bube" }, { farbe: "kreuz", wert: "kreuz dame" }, { farbe: "kreuz", wert: "kreuz könig" }, { farbe: "kreuz", wert: "kreuz ass" }, { farbe: "pik", wert: "pik 7" }, { farbe: "pik", wert: "pik 8" }, { farbe: "pik", wert: "pik 9" }, { farbe: "pik", wert: "pik 10" }, { farbe: "pik", wert: "pik bube" }, { farbe: "pik", wert: "pik dame" }, { farbe: "pik", wert: "pik könig" }, { farbe: "pik", wert: "pik ass" }, { farbe: "herz", wert: "herz 7" }, { farbe: "herz", wert: "herz 8" }, { farbe: "herz", wert: "herz 9" }, { farbe: "herz", wert: "herz 10" }, { farbe: "herz", wert: "herz bube" }, { farbe: "herz", wert: "herz dame" }, { farbe: "herz", wert: "herz könig" }, { farbe: "herz", wert: "herz ass" }];
    let handCards = [];
    let pileCards = [];
    //Hauptfunktion
    function maumau() {
        document.getElementById("button").addEventListener("click", sortCards);
        document.getElementById("Nachzieh").addEventListener("click", addCard);
        document.addEventListener("keydown", addCardSpace);
        document.getElementById("content").addEventListener("click", removeCard);
        //Prompt
        let numberCards;
        let input = prompt("Wie viele Handkarten sollen ausgegeben werden?");
        numberCards = Number(input);
        //Karten ausgeben
        for (let i = 0; i < numberCards; i++) {
            let randomNumber = createRandomNumber(allCards.length);
            placeDiv(allCards[randomNumber].farbe, allCards[randomNumber].wert, i);
            let card = allCards.splice(randomNumber, 1)[0];
            handCards.push(card);
            continue;
        }
    }
    //zufällige zahl generieren
    function createRandomNumber(x) {
        return Math.floor(Math.random() * Math.floor(x));
    }
    function removeCard(_event) {
        let main = document.getElementById("content");
        let domCard = _event.target;
        if (domCard != main) {
            let index;
            let domAttribute = domCard.getAttribute("id");
            domAttribute = domAttribute.substr(4);
            index = parseInt(domAttribute);
            let karte = handCards.splice(index, 1)[0];
            pileCards.push(karte);
            deleteCards();
            deletePile();
            for (let i = 0; i < handCards.length; i++) {
                placeDiv(handCards[i].farbe, handCards[i].wert, i);
            }
            for (let i = 0; i < pileCards.length; i++) {
                placePile(pileCards[i].farbe, pileCards[i].wert, i);
            }
        }
    }
    function deletePile() {
        let node = document.getElementById("Ablagestapel");
        node.innerHTML = "Ablagestapel";
    }
    function placePile(_color, _typ, _y) {
        let div = document.createElement("div");
        document.getElementById("Ablagestapel").appendChild(div);
        div.setAttribute("id", "pile" + _y);
        div.setAttribute("class", "pile");
        document.getElementById("pile" + _y).innerHTML += _typ;
        let s = div.style;
        s.backgroundColor = _color;
    }
    //Sortieren
    function sortCards() {
        handCards.sort(compareCards);
        deleteCards();
        for (let i = 0; i < handCards.length; i++) {
            placeDiv(handCards[i].farbe, handCards[i].wert, i);
        }
    }
    function compareCards(card1, card2) {
        var textA = card1.farbe.toUpperCase();
        var textB = card2.farbe.toUpperCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    }
    //Karte hinzufügen
    function addCard() {
        deleteCards();
        for (let i = 0; i < 1; i++) {
            let randomNumber = createRandomNumber(allCards.length);
            let card = allCards.splice(randomNumber, 1)[0];
            handCards.push(card);
        }
        for (let i = 0; i < handCards.length; i++) {
            console.log(handCards);
            placeDiv(handCards[i].farbe, handCards[i].wert, i);
        }
    }
    function addCardSpace(_event) {
        var keyCode = _event.keyCode;
        if (keyCode == 32) {
            addCard();
        }
    }
    function deleteCards() {
        let node = document.getElementById("content");
        node.innerHTML = "";
    }
    //PlaceDiv
    function placeDiv(_color, _typ, _y) {
        let div = document.createElement("div");
        document.getElementById("content").appendChild(div);
        div.setAttribute("id", "card" + _y);
        document.getElementById("card" + _y).innerHTML += _typ;
        let s = div.style;
        s.backgroundColor = _color;
        s.left = (_y + 0.2) * 110 + "px";
    }
})(task3 || (task3 = {}));
//# sourceMappingURL=task3.js.map