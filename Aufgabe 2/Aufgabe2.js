var Aufgabe2;
(function (Aufgabe2) {
    function maumau() {
        let k7 = {
            name: "karo 7",
            karo: 1,
            pik: 0,
            kreuz: 0,
            herz: 0
        };
        let k8 = {
            name: "karo 8",
            karo: 1,
            pik: 0,
            kreuz: 0,
            herz: 0
        };
        let k9 = {
            name: "karo 9",
            karo: 1,
            pik: 0,
            kreuz: 0,
            herz: 0
        };
        let k10 = {
            name: "karo 10",
            karo: 1,
            pik: 0,
            kreuz: 0,
            herz: 0
        };
        let kj = {
            name: "karo bube",
            karo: 1,
            pik: 0,
            kreuz: 0,
            herz: 0
        };
        let kq = {
            name: "karo dame",
            karo: 1,
            pik: 0,
            kreuz: 0,
            herz: 0
        };
        let kk = {
            name: "karo könig",
            karo: 1,
            pik: 0,
            kreuz: 0,
            herz: 0
        };
        let ka = {
            name: "karo ass",
            karo: 1,
            pik: 0,
            kreuz: 0,
            herz: 0
        };
        let p7 = {
            name: "pik 7",
            karo: 0,
            pik: 1,
            kreuz: 0,
            herz: 0
        };
        let p8 = {
            name: "pik 8",
            karo: 0,
            pik: 1,
            kreuz: 0,
            herz: 0
        };
        let p9 = {
            name: "pik 9",
            karo: 0,
            pik: 1,
            kreuz: 0,
            herz: 0
        };
        let p10 = {
            name: "pik 10",
            karo: 0,
            pik: 1,
            kreuz: 0,
            herz: 0
        };
        let pj = {
            name: "pik bube",
            karo: 0,
            pik: 1,
            kreuz: 0,
            herz: 0
        };
        let pq = {
            name: "pik dame",
            karo: 0,
            pik: 1,
            kreuz: 0,
            herz: 0
        };
        let pk = {
            name: "pik könig",
            karo: 0,
            pik: 1,
            kreuz: 0,
            herz: 0
        };
        let pa = {
            name: "pik ass",
            karo: 0,
            pik: 1,
            kreuz: 0,
            herz: 0
        };
        let kr7 = {
            name: "kreuz 7",
            karo: 0,
            pik: 0,
            kreuz: 1,
            herz: 0
        };
        let kr8 = {
            name: "kreuz 8",
            karo: 0,
            pik: 0,
            kreuz: 1,
            herz: 0
        };
        let kr9 = {
            name: "kreuz 9",
            karo: 0,
            pik: 0,
            kreuz: 1,
            herz: 0
        };
        let kr10 = {
            name: "kreuz 10",
            karo: 0,
            pik: 0,
            kreuz: 1,
            herz: 0
        };
        let krj = {
            name: "kreuz bube",
            karo: 0,
            pik: 0,
            kreuz: 1,
            herz: 0
        };
        let krq = {
            name: "kreuz dame",
            karo: 0,
            pik: 0,
            kreuz: 1,
            herz: 0
        };
        let krk = {
            name: "kreuz könig",
            karo: 0,
            pik: 0,
            kreuz: 1,
            herz: 0
        };
        let kra = {
            name: "kreuz ass",
            karo: 0,
            pik: 0,
            kreuz: 1,
            herz: 0
        };
        let h7 = {
            name: "herz 7",
            karo: 0,
            pik: 0,
            kreuz: 0,
            herz: 1
        };
        let h8 = {
            name: "herz 8",
            karo: 0,
            pik: 0,
            kreuz: 0,
            herz: 1
        };
        let h9 = {
            name: "herz 9",
            karo: 0,
            pik: 0,
            kreuz: 0,
            herz: 1
        };
        let h10 = {
            name: "herz 10",
            karo: 0,
            pik: 0,
            kreuz: 0,
            herz: 1
        };
        let hj = {
            name: "herz bube",
            karo: 0,
            pik: 0,
            kreuz: 0,
            herz: 1
        };
        let hq = {
            name: "herz dame",
            karo: 0,
            pik: 0,
            kreuz: 0,
            herz: 1
        };
        let hk = {
            name: "herz könig",
            karo: 0,
            pik: 0,
            kreuz: 0,
            herz: 1
        };
        let ha = {
            name: "herz ass",
            karo: 0,
            pik: 0,
            kreuz: 0,
            herz: 1
        };
        let alleKarten = [k7, k8, k9, k10, kj, kq, kk, ka, p7, p8, p9, p10, pj, pq, pk, pa, kr7, kr8, kr9, kr10, krj, krq, krk, kra, h7, h8, h9, h10, hj, hq, hk, ha]; //Alle Karten im Array gespeichert, um Zugriff darauf zu vereinfachen
        let c = "";
        function random1(x) {
            return Math.floor(Math.random() * Math.floor(x));
        }
        function placeDiv(_color, _v, _y) {
            let div = document.createElement("div");
            document.body.appendChild(div);
            div.setAttribute("id", "Handkarten" + _y);
            document.getElementById("Handkarten" + _y).innerHTML += _v;
        }
        let z;
        let input = prompt("Anzahl der Karten auswaehlen");
        let s1 = 4;
        let s2 = 4;
        z = Number(input);
        for (let d = 0; d < z; d++) {
            let l = random1(10);
            if (l == 13 && s1 <= 0) {
                d--;
                continue;
            }
            else {
                if (l == 14 && s2 <= 0) {
                    d--;
                    continue;
                }
                else {
                    let b = random1(4);
                    switch (b) {
                        case 0:
                            if (alleKarten[l].karo > 0) {
                                placeDiv(c, alleKarten[l].name, d);
                                alleKarten[l].karo--;
                                continue;
                            }
                        case 1:
                            if (alleKarten[l].kreuz > 0) {
                                placeDiv(c, alleKarten[l].name, d);
                                alleKarten[l].kreuz--;
                                continue;
                            }
                        case 2:
                            if (alleKarten[l].pik > 0) {
                                placeDiv(c, alleKarten[l].name, d);
                                alleKarten[l].pik--;
                                continue;
                            }
                        case 3:
                            if (alleKarten[l].herz > 0) {
                                placeDiv(c, alleKarten[l].name, d);
                                alleKarten[l].herz--;
                                continue;
                            }
                            else {
                                d--;
                                continue;
                            }
                    }
                }
            }
        }
        function Stapel() {
            let div = document.createElement("div");
            document.body.appendChild(div);
            div.setAttribute("id", "Kartenstapel");
            document.getElementById("Kartenstapel").innerHTML += "Kartenstapel";
        }
        function AblageStapel() {
            let div = document.createElement("div");
            document.body.appendChild(div);
            div.setAttribute("id", "Ablage");
            document.getElementById("Ablage").innerHTML += "Ablage";
        }
        AblageStapel();
        Stapel();
    }
    document.addEventListener("DOMContentLoaded", (maumau));
})(Aufgabe2 || (Aufgabe2 = {}));
//# sourceMappingURL=Aufgabe2.js.map