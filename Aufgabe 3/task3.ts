/**
Aufgabe: 3
Name: Julian Wörner
Matrikel: 260943 
Datum: 11.04.2019
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
**/

namespace task3 {
    document.addEventListener("DOMContentLoaded", maumau);

    interface Card {
        farbe: string;
        wert: string;
    }

    let allCards: Card[] = [{ farbe: "karo", wert: "karo 7" }, { farbe: "karo", wert: "karo 8" }, { farbe: "karo", wert: "karo 9" }, { farbe: "karo", wert: "karo 10" }, { farbe: "karo", wert: "karo bube" }, { farbe: "karo", wert: "karo dame" }, { farbe: "karo", wert: "karo könig" }, { farbe: "karo", wert: "karo ass" }, { farbe: "kreuz", wert: "kreuz 7" }, { farbe: "kreuz", wert: "kreuz 8" }, { farbe: "kreuz", wert: "kreuz 9" }, { farbe: "kreuz", wert: "kreuz 10" }, { farbe: "bube", wert: "kreuz bube" }, { farbe: "kreuz", wert: "kreuz dame" }, { farbe: "kreuz", wert: "kreuz könig" }, { farbe: "kreuz", wert: "kreuz ass" }, { farbe: "pik", wert: "pik 7" }, { farbe: "pik", wert: "pik 8" }, { farbe: "pik", wert: "pik 9" }, { farbe: "pik", wert: "pik 10" }, { farbe: "pik", wert: "pik bube" }, { farbe: "pik", wert: "pik dame" }, { farbe: "pik", wert: "pik könig" }, { farbe: "pik", wert: "pik ass" }, { farbe: "herz", wert: "herz 7" }, { farbe: "herz", wert: "herz 8" }, { farbe: "herz", wert: "herz 9" }, { farbe: "herz", wert: "herz 10" }, { farbe: "herz", wert: "herz bube" }, { farbe: "herz", wert: "herz dame" }, { farbe: "herz", wert: "herz könig" }, { farbe: "herz", wert: "herz ass" }]
    let handCards: Card[] = [];
    let pileCards: Card[] = [];

    //Hauptfunktion
    function maumau(): void {
        document.getElementById("button").addEventListener("click", sortCards);
        document.getElementById("Nachzieh").addEventListener("click", addCard);
        document.addEventListener("keydown", addCardSpace);
        document.getElementById("content").addEventListener("click", removeCard);

    //Prompt
        let numberCards: number;
        let input: string = prompt("Wie viele Handkarten sollen ausgegeben werden?");
        numberCards = Number(input);

    //Karten ausgeben
        for (let i: number = 0; i < numberCards; i++) {
            let randomNumber: number = createRandomNumber(allCards.length);
            placeDiv(allCards[randomNumber].farbe, allCards[randomNumber].wert, i);
            let card: Card = allCards.splice(randomNumber, 1)[0];
            handCards.push(card);
            continue;
        }
    }
    //zufällige zahl generieren
    function createRandomNumber(x: number): number {
        return Math.floor(Math.random() * Math.floor(x));
    }
    

    function removeCard(_event: MouseEvent): void {
        let main: HTMLElement = document.getElementById("content");
        let domCard: HTMLElement = <HTMLElement>_event.target;
        if (domCard != main) {
            let index: number;
            let domAttribute: string = domCard.getAttribute("id");
            domAttribute = domAttribute.substr(4);
            index = parseInt(domAttribute);
            let karte: Card = handCards.splice(index, 1)[0];
            pileCards.push(karte);
            deleteCards();
            deletePile();
            for (let i: number = 0; i < handCards.length; i++) {
                placeDiv(handCards[i].farbe, handCards[i].wert, i);
            }
            for (let i: number = 0; i < pileCards.length; i++) {
                placePile(pileCards[i].farbe, pileCards[i].wert, i);
            }

        }
    }

    function deletePile(): void {
        let node: HTMLElement = document.getElementById("Ablagestapel");
        node.innerHTML = "Ablagestapel";
    }

    function placePile(_color: string, _typ: string, _y: number): void {
        let div: HTMLDivElement = document.createElement("div");
        document.getElementById("Ablagestapel").appendChild(div);
        div.setAttribute("id", "pile" + _y);
        div.setAttribute("class", "pile");
        document.getElementById("pile" + _y).innerHTML += _typ;
        let s: CSSStyleDeclaration = div.style;
        
    }

    //Sortieren
    function sortCards(): void {
        handCards.sort(compareCards);
        deleteCards();
        for (let i: number = 0; i < handCards.length; i++) {
            placeDiv(handCards[i].farbe, handCards[i].wert, i);
        }
    }

    function compareCards(card1: Card, card2: Card): number {
        var textA = card1.farbe.toUpperCase();
        var textB = card2.farbe.toUpperCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    }
    //Karte hinzufügen
    function addCard(): void {
        deleteCards();
        for (let i: number = 0; i < 1; i++) {
            let randomNumber: number = createRandomNumber(allCards.length);
            let card: Card = allCards.splice(randomNumber, 1)[0];
            handCards.push(card)
        }
        for (let i: number = 0; i < handCards.length; i++) {
            console.log(handCards);
            placeDiv(handCards[i].farbe, handCards[i].wert, i);
        }
    }

    function deleteCards(): void {
        let node: HTMLElement = document.getElementById("content");
        node.innerHTML = "";
    }
    function addCardSpace(_event: KeyboardEvent): void {
        var keyCode: number = _event.keyCode;
        if (keyCode == 32) {
            addCard();
        }
    }

   

    //PlaceDiv
    function placeDiv(_color: string, _typ: string, _y: number): void {
        let div: HTMLDivElement = document.createElement("div");
        document.getElementById("content").appendChild(div);
        div.setAttribute("id", "card" + _y);
        document.getElementById("card" + _y).innerHTML += _typ;
        let s: CSSStyleDeclaration = div.style;
        s.backgroundColor = _color;
        s.left = (_y + 0.2) * 110 + "px";
        
    }

}