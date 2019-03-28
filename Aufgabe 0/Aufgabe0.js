/*
Aufgabe: Aufgabe 0,
Name: Julian Wörner
Matrikel: 260943
Datum: 22.03.2019,
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe0;
(function (Aufgabe0) {
    function taskzero() {
        let name = prompt("Whats your name?");
        let node = document.getElementById("kladderadatsch");
        node.innerHTML += "Hello ";
        node.innerHTML += name;
        node.innerHTML += ", How´s it going?";
        console.log("Hello" + name + " How are you today?");
    }
    document.addEventListener("DOMContentLoaded", taskzero);
})(Aufgabe0 || (Aufgabe0 = {}));
//# sourceMappingURL=Aufgabe0.js.map