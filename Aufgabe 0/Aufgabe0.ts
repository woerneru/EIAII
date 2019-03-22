/*
Aufgabe: Aufgabe 0,
Name: Julian Wörner
Matrikel: 260943
Datum: 22.03.2019,
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
namespace Aufgabe0{

    function taskzero() {
        var name = prompt("Whats your name?");
        var node: HTMLElement = document.getElementById("kladderadatsch");
        node.innerHTML += "Hello ";
        node.innerHTML += name;
        node.innerHTML += ", How´s it going?";
        console.log("Hello"+ name, +" How are you today?");
    }
    document.addEventListener("DOMContentLoaded", taskzero);
}