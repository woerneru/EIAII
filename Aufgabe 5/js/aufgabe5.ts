/* Aufgabe: Aufgabe 4: Eisdealer
Name: Julian Wörner
Matrikel: 260943
Datum: 18.4.2019
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
Er wurde nicht kopiert und auch nicht diktiert. */


namespace Aufgabe5 {
    window.addEventListener("load", init);
    document.addEventListener("DOMContentLoaded", writeHTML);
    let sum: number = 0;
    let gesamt: string = "0";
    let kugeln1: number = 0;
    let kugeln2: number = 0;
    let kugeln3: number = 0;
    let sorte1: string;
    let sorte2: string;
    let sorte3: string;
    let name: string = undefined;
    let toppings: number = 0;
    let gefaess: string = "";
    let transport: string = undefined;
    let lieferKosten: number = 0;
    let addresse: string = undefined;
    let ort: string = undefined;

    

    function writeHTML(): void {
        let node: HTMLElement = document.getElementById("fieldset");
        document.getElementById("button").addEventListener("click", check);
        let childNodeHTML: string = "";


        childNodeHTML += "<h3>Dein Behälter?</h3>";
        for (let i: number = 0; i < eisgefaess.length; i++) {
            childNodeHTML += "<input type='radio' name='Radiogroup' value='" + i + eisgefaess[i].name + " " + eisgefaess[i].price + " Euro'  id='radio" + i + "' />";
            childNodeHTML += "<label for='check" + i + "'>" + eisgefaess[i].name;
        }
        childNodeHTML += "<hr>";

        childNodeHTML += "<h4>Sorte 1:</h4>";
        childNodeHTML += "<select name='Select' id='Sorte1'>";
        for (let i: number = 0; i < eissorte1.length; i++) {
            childNodeHTML += "<option value='" + i + eissorte1[i].name + " " + eissorte1[i].price + " Euro'>" + eissorte1[i].name + " " + eissorte1[i].price + " Euro </option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<hr>";

        childNodeHTML += "<h4>Sorte 2:</h4>";
        childNodeHTML += "<select name='Select' id='Sorte1'>";
        for (let i: number = 0; i < eissorte1.length; i++) {
            childNodeHTML += "<option value='" + i + eissorte2[i].name + " " + eissorte2[i].price + " Euro'>" + eissorte2[i].name + " " + eissorte2[i].price + " Euro </option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<hr>";

        childNodeHTML += "<h4>Sorte 3:</h4>";
        childNodeHTML += "<select name='Select' id='Sorte1'>";
        for (let i: number = 0; i < eissorte1.length; i++) {
            childNodeHTML += "<option value='" + i + eissorte3[i].name + " " + eissorte3[i].price + " Euro'>" + eissorte3[i].name + " " + eissorte3[i].price + " Euro </option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<hr>";

        childNodeHTML += "<h4>Sorte 4:</h4>";
        childNodeHTML += "<select name='Select' id='Sorte4'>";
        for (let i: number = 0; i < eissorte1.length; i++) {
            childNodeHTML += "<option value='" + i + eissorte4[i].name + " " + eissorte4[i].price + " Euro'>" + eissorte4[i].name + " " + eissorte4[i].price + " Euro </option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<hr>";

        childNodeHTML += "<h4>Toppings</h4>";
        childNodeHTML += "<select name='Select' id='toppings'>";
        for (let i: number = 0; i < extras.length; i++) {
            childNodeHTML += "<option value='" + i + extras[i].name + " " + extras[i].price + " Euro'>" + extras[i].name + " " + extras[i].price + " Euro </option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<hr>";
    }

    function init(_event: Event): void {
        let fieldsets: HTMLCollectionOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");

        for (let i: number = 0; i < fieldsets.length; i++) {
            let fieldset: HTMLElement = fieldsets[i];
            fieldset.addEventListener("change", handleChange);
        }

        let button: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button");
        button.addEventListener("click", check);
    }

    function handleChange(_event: Event): void {
        console.log(_event);

        let target: HTMLInputElement = <HTMLInputElement>_event.target;

        if (this.id == "toppings") {

            if (target.checked == true) {
                document.getElementById(target.name).innerHTML = target.name + " (+ 0,50 Euro)";
                toppings += 0.5;
            }

            if (target.checked == false) {
                document.getElementById (target.name).innerHTML = "";
                toppings -= 0.5;
            }

        }

        else if (target.name == "amountSorte1") {
            kugeln1 = parseInt(target.value);
        }

        else if (target.name == "amountSorte2") {
            kugeln2 = parseInt(target.value);
        }

        else if (target.name == "amountSorte3") {
            kugeln3 = parseInt(target.value);
        }

        else if (target.name == "eisauswahl1") {
            sorte1 = target.value;
        }

        else if (target.name == "eisauswahl2") {
            sorte2 = target.value;
        }

        else if (target.name == "eisauswahl3") {
            sorte3 = target.value;
        }

        else if (target.name == "RadiogroupLog") {
            transport = target.value;
            document.getElementById("Lieferung").innerHTML = transport;

            if (target.id == "Standardlieferung") {
                lieferKosten = 2.5;
            }

            else if (target.id == "Fahrrad-Express") {
                lieferKosten = 5;
            }

            else {
                lieferKosten = 10;
            }
        }

        else if (target.name == "Radiogroup") {
            if (target.value == "Becher" || target.value == "Waffel") {
                document.getElementById("behaeltnis").innerHTML = target.value;
            } else {
                console.log("Da ist etwas mit dem Gefäß schief gegangen!");
            }
        }

        else if (target.id == "name") {
            name = target.value;
            document.getElementById(target.name).innerHTML = name;
        }

        else if (target.id == "addresse") {
            addresse = target.value;
            document.getElementById(target.name).innerHTML = addresse;
        }

        else if (target.id == "ort") {
            ort = target.value;
            document.getElementById(target.name).innerHTML = ort;
        }

        else {
            console.log("Hier ist etwas Schief gegangen!");
            //document.getElementById(target.name).innerHTML = target.value;
        }

        let sum: number = 1.2 * (kugeln1 + kugeln2 + kugeln3) + lieferKosten + toppings;
        gesamt = sum.toFixed(2);

        document.getElementById("sumsum").innerHTML = "" + gesamt;

        if (kugeln1 == 0) {
            document.getElementById("eis1").innerHTML = "";
        }

        else if (kugeln1 == 1) {
            document.getElementById("eis1").innerHTML = kugeln1 + " Kugel " + sorte1;
        }

        else if (kugeln1 > 1) {
            document.getElementById("eis1").innerHTML = kugeln1 + " Kugeln " + sorte1;
        }

        if (kugeln2 == 0) {
            document.getElementById("eis2").innerHTML = "";
        }

        else if (kugeln2 == 1) {
            document.getElementById("eis2").innerHTML = kugeln2 + " Kugel " + sorte2;
        }

        else if (kugeln2 > 1) {
            document.getElementById("eis2").innerHTML = kugeln2 + " Kugeln " + sorte2;
        }

        if (kugeln3 == 0) {
            document.getElementById("eis3").innerHTML = "";
        }

        else if (kugeln3 == 1) {
            document.getElementById("eis3").innerHTML = kugeln3 + " Kugel " + sorte3;
        }

        else if (kugeln3 > 1) {
            document.getElementById("eis3").innerHTML = kugeln3 + " Kugeln " + sorte3;
        }

        
    }

    function check (): void {
        if (kugeln1 + kugeln2 + kugeln3 < 1) {
            alert("Bitte mindestens eine Kugel bestellen.");           
        }

        else if (kugeln1 > 0 && (sorte1 == "[Wählen Sie hier Ihre Eissorte!]" || sorte1 == undefined)) {
            alert("Eissorte auswählen.");
        }

        else if (kugeln2 > 0 && (sorte2 == "[Wählen Sie hier Ihre Eissorte!]" || sorte2 == undefined)) {
            alert("Eissorte auswählen.");
        }

        else if (kugeln3 > 0 && (sorte3 == "[Wählen Sie hier Ihre Eissorte!]" || sorte3 == undefined)) {
            alert("Eissorte auswählen.");
        }

        else if (transport == undefined) {
            alert("Welche Lieferart?");
        }

        else if (name == undefined) {
            alert("Geben Sie Ihren Namen ein.");
        }

        else if (addresse == undefined) {
            alert("Gib bitte die Addresse an");
        }

        else if (ort == undefined) {
            alert("Bitte Wohnort eingeben");
        }
        
        else {
            alert ("Vielen Dank für ihre Bestellung!");
        }
    }

}

