namespace Aufgabe5 {
    document.addEventListener("DOMContentLoaded", writeHTML);
    document.addEventListener("DOMContentLoaded", changeListener);

    function changeListener(_event: Event): void {
        let fieldset: HTMLElement = document.getElementById("fieldset");
        fieldset.addEventListener("change", handleChange);
    }

    let behaelter: number = 0;
    let sorte1: number = 0;
    let sorte2: number = 0;
    let sorte3: number = 0;
    let sorte4: number = 0;
    let sorte5: number = 0;
    let sorte6: number = 0;
    let preisVersand: number = 0;
    let adresse: string = "";


    function writeHTML(): void {
        let node: HTMLElement = document.getElementById("fieldset");
        document.getElementById("button").addEventListener("click", checkCheckout);
        let childNodeHTML: string = "";

        childNodeHTML += "<h3>Waffel oder Becher?</h3>";
        for (let i: number = 0; i < gefaess.length; i++) {
            childNodeHTML += "<input type='radio' name='Radiogroup' value='" + i + gefaess[i].name + " " + gefaess[i].preis + " Euro'  id='radio" + i + "' />";
            childNodeHTML += "<label for='check" + i + "'>" + gefaess[i].name;
        }
        childNodeHTML += "<hr>";

        childNodeHTML += "<h4>Sorte 1:</h4>";
        childNodeHTML += "<select name='Select' id='Sorte1'>";
        for (let i: number = 0; i < eissorte1.length; i++) {
            childNodeHTML += "<option value='" + i + eissorte1[i].name + " " + eissorte1[i].preis + " Euro'>" + eissorte1[i].name + " " + eissorte1[i].preis + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<hr>";

        childNodeHTML += "<h4>Sorte 2:</h4>";
        childNodeHTML += "<select name='Select' id='Sorte2'>";
        for (let i: number = 0; i < eissorte2.length; i++) {
            childNodeHTML += "<option value='" + i + eissorte2[i].name + " " + eissorte2[i].preis + " Euro'>" + eissorte2[i].name + " " + eissorte2[i].preis + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<hr>";

        childNodeHTML += "<h4>Sorte 3:</h4>";
        childNodeHTML += "<select name='Select' id='Sorte3'>";
        for (let i: number = 0; i < eissorte3.length; i++) {
            childNodeHTML += "<option value='" + i + eissorte3[i].name + " " + eissorte3[i].preis + " Euro'>" + eissorte3[i].name + " " + eissorte3[i].preis + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<hr>";

        childNodeHTML += "<h4>Sorte 4:</h4>";
        childNodeHTML += "<select name='Select' id='Sorte4'>";
        for (let i: number = 0; i < eissorte4.length; i++) {
            childNodeHTML += "<option value='" + i + eissorte4[i].name + " " + eissorte4[i].preis + " Euro'>" + eissorte4[i].name + " " + eissorte4[i].preis + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<hr>";

        childNodeHTML += "<h4>Sorte 5:</h4>";
        childNodeHTML += "<select name='Select' id='Sorte5'>";
        for (let i: number = 0; i < eissorte5.length; i++) {
            childNodeHTML += "<option value='" + i + eissorte5[i].name + " " + eissorte5[i].preis + " Euro'>" + eissorte5[i].name + " " + eissorte5[i].preis + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<hr>";

        childNodeHTML += "<h4>Sorte 6:</h4>";
        childNodeHTML += "<select name='Select' id='Sorte6'>";
        for (let i: number = 0; i < eissorte6.length; i++) {
            childNodeHTML += "<option value='" + i + eissorte6[i].name + " " + eissorte6[i].preis + " Euro'>" + eissorte6[i].name + " " + eissorte6[i].preis + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<hr>";

        childNodeHTML += "<h3>Lieferoptionen</h3>";
        childNodeHTML += "<select name='Select' id='ship'>";
        for (let i: number = 0; i < lieferung.length; i++) {
            childNodeHTML += "<option value='" + i + lieferung[i].name + " " + lieferung[i].preis + " Euro'>" + lieferung[i].name + " " + lieferung[i].preis + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";

        childNodeHTML += "<h3>Adresse</h3>";
        childNodeHTML += "<input id='ad' type='text' name='Text' placeholder='Adresse hier eingeben' required/>";
        node.innerHTML += childNodeHTML;
    }

    function handleChange (_event: Event): void {
        let target: HTMLInputElement = <HTMLInputElement>_event.target;

        if (target.name == "Radiogroup") {
            let node: HTMLElement = document.getElementById("Form");
            let value: string = target.value;
            let priceIndex: number = parseInt(value.substr(0, 1));
            behaelter = gefaess[priceIndex].preis;
            console.log(behaelter);
            let childNodeHTML: string;

            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";

            node.innerHTML = childNodeHTML;
        }

        if (target.id == "Sorte1") {
            let node: HTMLElement = document.getElementById("Radiesschen");
            let value: string = target.value;
            let priceIndex: number = parseInt(value.substr(0, 1));
            sorte1 = eissorte1[priceIndex].preis;
            console.log(sorte1);
            let childNodeHTML: string;

            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";

            node.innerHTML = childNodeHTML;
        }

        if (target.id == "Sorte2") {
            let node: HTMLElement = document.getElementById("Camembert");
            let value: string = target.value;
            let priceIndex: number = parseInt(value.substr(0, 1));
            sorte2 = eissorte2[priceIndex].preis;
            console.log(sorte2);
            let childNodeHTML: string;

            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";

            node.innerHTML = childNodeHTML;
        }

        if (target.id == "Sorte3") {
            let node: HTMLElement = document.getElementById("Döner");
            let value: string = target.value;
            let priceIndex: number = parseInt(value.substr(0, 1));
            sorte3 = eissorte3[priceIndex].preis;
            console.log(sorte3);
            let childNodeHTML: string;

            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";

            node.innerHTML = childNodeHTML;
        }

        if (target.id == "Sorte4") {
            let node: HTMLElement = document.getElementById("veganerKuhdung");
            let value: string = target.value;
            let priceIndex: number = parseInt(value.substr(0, 1));
            sorte4 = eissorte4[priceIndex].preis;
            console.log(sorte4);
            let childNodeHTML: string;

            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";

            node.innerHTML = childNodeHTML;
        }

        if (target.id == "Sorte5") {
            let node: HTMLElement = document.getElementById("Kümmel");
            let value: string = target.value;
            let priceIndex: number = parseInt(value.substr(0, 1));
            sorte4 = eissorte4[priceIndex].preis;
            console.log(sorte4);
            let childNodeHTML: string;

            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";

            node.innerHTML = childNodeHTML;
        }

        if (target.id == "Sorte6") {
            let node: HTMLElement = document.getElementById("Knoblauch");
            let value: string = target.value;
            let priceIndex: number = parseInt(value.substr(0, 1));
            sorte4 = eissorte4[priceIndex].preis;
            console.log(sorte4);
            let childNodeHTML: string;

            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";

            node.innerHTML = childNodeHTML;
        }

        if (target.id == "ship") {
            let node: HTMLElement = document.getElementById("Lieferung");
            let value: string = target.value;
            let priceIndex: number = parseInt(value.substr(0, 1));
            preisVersand = lieferung[priceIndex].preis;
            console.log(lieferung);
            let childNodeHTML: string;

            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";

            node.innerHTML = childNodeHTML;
        }

        if (target.id == "ad") {
            let node: HTMLElement = document.getElementById("Addresse");
            adresse = target.value;
            let childNodeHTML: string;

            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";

            node.innerHTML = childNodeHTML;
        }
        let node: HTMLElement = document.getElementById("Zusammenfassung");
        let childNodeHTML: string;

        childNodeHTML = "";
        childNodeHTML += "<a>";
        childNodeHTML += (preisVersand + behaelter + sorte1 + sorte2 + sorte3 + sorte4 + sorte5 + sorte6);
        childNodeHTML += " Euro";
        childNodeHTML += "</a>";

        node.innerHTML = childNodeHTML;
    }

    function checkCheckout(_event: Event): void {
        if (adresse == "" || behaelter == 0 || sorte1 + sorte2 + sorte3 + sorte4 + sorte5 + sorte6 == 0 || preisVersand == 0) {
            document.getElementById("missing").innerHTML = "Bitte füllen sie alle benötigten Felder syntaktisch korrekt aus!";
        }

        else {
            document.getElementById("missing").innerHTML = "";
        }
    }
}