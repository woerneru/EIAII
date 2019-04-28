var Aufgabe5;
(function (Aufgabe5) {
    document.addEventListener("DOMContentLoaded", writeHTML);
    document.addEventListener("DOMContentLoaded", changeListener);
    function changeListener(_event) {
        let fieldset = document.getElementById("fieldset");
        fieldset.addEventListener("change", handleChange);
    }
    let behaelter = 0;
    let sorte1 = 0;
    let sorte2 = 0;
    let sorte3 = 0;
    let sorte4 = 0;
    let sorte5 = 0;
    let sorte6 = 0;
    let preisVersand = 0;
    let adresse = "";
    function writeHTML() {
        let node = document.getElementById("fieldset");
        document.getElementById("button").addEventListener("click", checkCheckout);
        let childNodeHTML = "";
        childNodeHTML += "<h3>Waffel oder Becher?</h3>";
        for (let i = 0; i < Aufgabe5.gefaess.length; i++) {
            childNodeHTML += "<input type='radio' name='Radiogroup' value='" + i + Aufgabe5.gefaess[i].name + " " + Aufgabe5.gefaess[i].preis + " Euro'  id='radio" + i + "' />";
            childNodeHTML += "<label for='check" + i + "'>" + Aufgabe5.gefaess[i].name;
        }
        childNodeHTML += "<hr>";
        childNodeHTML += "<h4>Sorte 1:</h4>";
        childNodeHTML += "<select name='Select' id='Sorte1'>";
        for (let i = 0; i < Aufgabe5.eissorte1.length; i++) {
            childNodeHTML += "<option value='" + i + Aufgabe5.eissorte1[i].name + " " + Aufgabe5.eissorte1[i].preis + " Euro'>" + Aufgabe5.eissorte1[i].name + " " + Aufgabe5.eissorte1[i].preis + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<hr>";
        childNodeHTML += "<h4>Sorte 2:</h4>";
        childNodeHTML += "<select name='Select' id='Sorte2'>";
        for (let i = 0; i < Aufgabe5.eissorte2.length; i++) {
            childNodeHTML += "<option value='" + i + Aufgabe5.eissorte2[i].name + " " + Aufgabe5.eissorte2[i].preis + " Euro'>" + Aufgabe5.eissorte2[i].name + " " + Aufgabe5.eissorte2[i].preis + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<hr>";
        childNodeHTML += "<h4>Sorte 3:</h4>";
        childNodeHTML += "<select name='Select' id='Sorte3'>";
        for (let i = 0; i < Aufgabe5.eissorte3.length; i++) {
            childNodeHTML += "<option value='" + i + Aufgabe5.eissorte3[i].name + " " + Aufgabe5.eissorte3[i].preis + " Euro'>" + Aufgabe5.eissorte3[i].name + " " + Aufgabe5.eissorte3[i].preis + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<hr>";
        childNodeHTML += "<h4>Sorte 4:</h4>";
        childNodeHTML += "<select name='Select' id='Sorte4'>";
        for (let i = 0; i < Aufgabe5.eissorte4.length; i++) {
            childNodeHTML += "<option value='" + i + Aufgabe5.eissorte4[i].name + " " + Aufgabe5.eissorte4[i].preis + " Euro'>" + Aufgabe5.eissorte4[i].name + " " + Aufgabe5.eissorte4[i].preis + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<hr>";
        childNodeHTML += "<h4>Sorte 5:</h4>";
        childNodeHTML += "<select name='Select' id='Sorte5'>";
        for (let i = 0; i < Aufgabe5.eissorte5.length; i++) {
            childNodeHTML += "<option value='" + i + Aufgabe5.eissorte5[i].name + " " + Aufgabe5.eissorte5[i].preis + " Euro'>" + Aufgabe5.eissorte5[i].name + " " + Aufgabe5.eissorte5[i].preis + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<hr>";
        childNodeHTML += "<h4>Sorte 6:</h4>";
        childNodeHTML += "<select name='Select' id='Sorte6'>";
        for (let i = 0; i < Aufgabe5.eissorte6.length; i++) {
            childNodeHTML += "<option value='" + i + Aufgabe5.eissorte6[i].name + " " + Aufgabe5.eissorte6[i].preis + " Euro'>" + Aufgabe5.eissorte6[i].name + " " + Aufgabe5.eissorte6[i].preis + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<hr>";
        childNodeHTML += "<h3>Lieferoptionen</h3>";
        childNodeHTML += "<select name='Select' id='ship'>";
        for (let i = 0; i < Aufgabe5.lieferung.length; i++) {
            childNodeHTML += "<option value='" + i + Aufgabe5.lieferung[i].name + " " + Aufgabe5.lieferung[i].preis + " Euro'>" + Aufgabe5.lieferung[i].name + " " + Aufgabe5.lieferung[i].preis + " Euro</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<h3>Adresse</h3>";
        childNodeHTML += "<input id='ad' type='text' name='Text' placeholder='Adresse hier eingeben' required/>";
        node.innerHTML += childNodeHTML;
    }
    function handleChange(_event) {
        let target = _event.target;
        if (target.name == "Radiogroup") {
            let node = document.getElementById("Form");
            let value = target.value;
            let priceIndex = parseInt(value.substr(0, 1));
            behaelter = Aufgabe5.gefaess[priceIndex].preis;
            console.log(behaelter);
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        if (target.id == "Sorte1") {
            let node = document.getElementById("Radiesschen");
            let value = target.value;
            let priceIndex = parseInt(value.substr(0, 1));
            sorte1 = Aufgabe5.eissorte1[priceIndex].preis;
            console.log(sorte1);
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        if (target.id == "Sorte2") {
            let node = document.getElementById("Camembert");
            let value = target.value;
            let priceIndex = parseInt(value.substr(0, 1));
            sorte2 = Aufgabe5.eissorte2[priceIndex].preis;
            console.log(sorte2);
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        if (target.id == "Sorte3") {
            let node = document.getElementById("Döner");
            let value = target.value;
            let priceIndex = parseInt(value.substr(0, 1));
            sorte3 = Aufgabe5.eissorte3[priceIndex].preis;
            console.log(sorte3);
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        if (target.id == "Sorte4") {
            let node = document.getElementById("veganerKuhdung");
            let value = target.value;
            let priceIndex = parseInt(value.substr(0, 1));
            sorte4 = Aufgabe5.eissorte4[priceIndex].preis;
            console.log(sorte4);
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        if (target.id == "Sorte5") {
            let node = document.getElementById("Kümmel");
            let value = target.value;
            let priceIndex = parseInt(value.substr(0, 1));
            sorte4 = Aufgabe5.eissorte4[priceIndex].preis;
            console.log(sorte4);
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        if (target.id == "Sorte6") {
            let node = document.getElementById("Knoblauch");
            let value = target.value;
            let priceIndex = parseInt(value.substr(0, 1));
            sorte4 = Aufgabe5.eissorte4[priceIndex].preis;
            console.log(sorte4);
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        if (target.id == "ship") {
            let node = document.getElementById("Lieferung");
            let value = target.value;
            let priceIndex = parseInt(value.substr(0, 1));
            preisVersand = Aufgabe5.lieferung[priceIndex].preis;
            console.log(Aufgabe5.lieferung);
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        if (target.id == "ad") {
            let node = document.getElementById("Addresse");
            adresse = target.value;
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        let node = document.getElementById("Zusammenfassung");
        let childNodeHTML;
        childNodeHTML = "";
        childNodeHTML += "<a>";
        childNodeHTML += (preisVersand + behaelter + sorte1 + sorte2 + sorte3 + sorte4 + sorte5 + sorte6);
        childNodeHTML += " Euro";
        childNodeHTML += "</a>";
        node.innerHTML = childNodeHTML;
    }
    function checkCheckout(_event) {
        if (adresse == "" || behaelter == 0 || sorte1 + sorte2 + sorte3 + sorte4 + sorte5 + sorte6 == 0 || preisVersand == 0) {
            document.getElementById("missing").innerHTML = "Bitte füllen sie alle benötigten Felder syntaktisch korrekt aus!";
        }
        else {
            document.getElementById("missing").innerHTML = "";
        }
    }
})(Aufgabe5 || (Aufgabe5 = {}));
//# sourceMappingURL=aufgabe5.js.map