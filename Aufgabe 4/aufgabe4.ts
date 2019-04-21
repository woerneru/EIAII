/* Aufgabe: Aufgabe 4: Eisdealer
Name: Julian Wörner
Matrikel: 260943
Datum: 18.4.2019
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
Er wurde nicht kopiert und auch nicht diktiert. */


namespace Aufgabe4{
    window.addEventListener("load", init);
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
    let gefaess: string = undefined;
    let transport: string = undefined;
    let lieferKosten: number = 0;
    let addresse: string = undefined;
    let ort: string = undefined;

    function init(_event: Event): void {
        let fieldsets: HTMLCollectionOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");

        for (let i = 0; i < fieldsets.length; i++) {
            let fieldset: HTMLElement = fieldsets[i];
            fieldset.addEventListener("change", handleChange);
        }

        let button: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button");
        button.addEventListener("click", check);
    }

    function handleChange(_event: Event): void{
        console.log(_event)

        let target: HTMLInputElement = <HTMLInputElement>_event.target;
        console.log("Changed " + target.name + " to " + target.value);

        if (this.id == "toppings") {
            console.log("Changed " + target.name + " to " + target.checked);

            if (target.checked == true) {
                document.getElementById(target.id).innerHTML = target.name;
                toppings += 0.5;
            }

            if (target.checked == false){
                document.getElementById(target.id).innerHTML = "";
                toppings -= 0.5;
            }

        }

        else if (target.name == "amountSorte1") {
            kugeln1 = parseInt(target.value);
            console.log("1", kugeln1);
        }

        else if (target.name == "amountSorte2") {
            kugeln2 = parseInt(target.value);
            console.log("2", kugeln2);
        }

        else if (target.name == "amountSorte3") {
            kugeln3 = parseInt(target.value);
            console.log("3", kugeln3);
        }

        else if (target.name == "Eissorte1") {
            sorte1 = target.value;
            console.log("Sorte 1", sorte1);
        }

        else if (target.name == "Eissorte2") {
            sorte2 = target.value;
            console.log("Sorte 2", sorte2);
        }

        else if (target.name == "Eissorte3") {
            sorte3 = target.value;
            console.log("Sorte 3", sorte3);
        }

        else if (target.name == "RadiogroupLog") {
            transport = target.value;
            document.getElementById(target.name).innerHTML = transport;

            if (target.value == "Standardlieferung"){
                lieferKosten = 2.5;
            }

            else if (target.value == "Express (+ 4,00 Euro)"){
                lieferKosten = 5;
            }

            else{
                lieferKosten = 10;
            }

            document.getElementById(target.name).innerHTML = target.value;
        }

        else if (target.id == "gefaess") {
            gefaess = target.value;
            document.getElementById(target.name).innerHTML = gefaess;
        }

        else if (target.id == "name") {
            name = target.value;
            document.getElementById(target.name).innerHTML = name;
        }

        else if (target.id == "adresse") {
            addresse = target.value;
            document.getElementById(target.name).innerHTML = addresse;
        }

        else if (target.id == "ort") {
            ort = target.value;
            document.getElementById(target.name).innerHTML = ort;
        }

        else {
            document.getElementById(target.name).innerHTML = target.value;
        }

        sum = 1.2 * (kugeln1 + kugeln2 + kugeln3) + lieferKosten + toppings;
        gesamt = sum.toFixed(2);

        console.log(gesamt);
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
            alert("Bitte mindestens eine Kugel bestellen.")            
        }

        else if (kugeln1 > 0 && (sorte1 == "[Wählen Sie hier Ihre Eissorte!]" || sorte1 == undefined)){
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

        else if (name == undefined){
            alert("Geben Sie Ihren Namen ein.");
        }

        else if (addresse == undefined) {
            alert("Gib bitte die Addresse an");
        }

        else if (ort == undefined) {
            alert("Bitte Wohnort eingeben");
        }
        
        else {
            alert("Vielen Dank für ihre Bestellung!")
        }
    }

}

