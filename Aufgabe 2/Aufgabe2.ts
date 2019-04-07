namespace Aufgabe2 {

    function maumau() { 

        interface Karten { 
            name: string;
            karo: number;
            pik: number;
            kreuz: number;
            herz: number;
        }

        let k7: Karten = {
            name: "karo 7",
            karo: 1,
            pik: 0,
            kreuz: 0,
            herz: 0

        }

        let k8: Karten = {
            name: "karo 8",
            karo: 1,
            pik: 0,
            kreuz: 0,
            herz: 0
        }

        let k9: Karten = {
            name: "karo 9",
            karo: 1,
            pik: 0,
            kreuz: 0,
            herz: 0
        }

        let k10: Karten = {
            name: "karo 10",
            karo: 1,
            pik: 0,
            kreuz: 0,
            herz: 0
        }

        let kj: Karten = {
            name: "karo bube",
            karo: 1,
            pik: 0,
            kreuz: 0,
            herz: 0
        }

        let kq: Karten = {
            name: "karo dame",
            karo: 1,
            pik: 0,
            kreuz: 0,
            herz: 0
        }

        let kk: Karten = {
            name: "karo könig",
            karo: 1,
            pik: 0,
            kreuz: 0,
            herz: 0
        }

        let ka: Karten = {
            name: "karo ass",
            karo: 1,
            pik: 0,
            kreuz: 0,
            herz: 0
        }
        
        let p7: Karten = {
            name: "pik 7",
            karo: 0,
            pik: 1,
            kreuz: 0,
            herz: 0
        }

        let p8: Karten = {
            name: "pik 8",
            karo: 0,
            pik: 1,
            kreuz: 0,
            herz: 0
        }

        let p9: Karten = {
            name: "pik 9",
            karo: 0,
            pik: 1,
            kreuz: 0,
            herz: 0
        }

        let p10: Karten = {
            name: "pik 10",
            karo: 0,
            pik: 1,
            kreuz: 0,
            herz: 0
        }

        let pj: Karten = {
            name: "pik bube",
            karo: 0,
            pik: 1,
            kreuz: 0,
            herz: 0
        }

        let pq: Karten = {
            name: "pik dame",
            karo: 0,
            pik: 1,
            kreuz: 0,
            herz: 0
        }

        let pk: Karten = {
            name: "pik könig",
            karo: 0,
            pik: 1,
            kreuz: 0,
            herz: 0
        }

        let pa: Karten = {
            name: "pik ass",
            karo: 0,
            pik: 1,
            kreuz: 0,
            herz: 0
        }
 
        let kr7: Karten = {
            name: "kreuz 7",
            karo: 0,
            pik: 0,
            kreuz: 1,
            herz: 0
        }

        let kr8: Karten = {
            name: "kreuz 8",
            karo: 0,
            pik: 0,
            kreuz: 1,
            herz: 0
        }

        let kr9: Karten = {
            name: "kreuz 9",
            karo: 0,
            pik: 0,
            kreuz: 1,
            herz: 0
        }

        let kr10: Karten = {
            name: "kreuz 10",
            karo: 0,
            pik: 0,
            kreuz: 1,
            herz: 0
        }

        let krj: Karten = {
            name: "kreuz bube",
            karo: 0,
            pik: 0,
            kreuz: 1,
            herz: 0
        }

        let krq: Karten = {
            name: "kreuz dame",
            karo: 0,
            pik: 0,
            kreuz: 1,
            herz: 0
        }

        let krk: Karten = {
            name: "kreuz könig",
            karo: 0,
            pik: 0,
            kreuz: 1,
            herz: 0

        }

        let kra: Karten = {
            name: "kreuz ass",
            karo: 0,
            pik: 0,
            kreuz: 1,
            herz: 0

        }
        
        let h7: Karten = {
            name: "herz 7",
            karo: 0,
            pik: 0,
            kreuz: 0,
            herz: 1
        }

        let h8: Karten = {
            name: "herz 8",
            karo: 0,
            pik: 0,
            kreuz: 0,
            herz: 1
        }

        let h9: Karten = {
            name: "herz 9",
            karo: 0,
            pik: 0,
            kreuz: 0,
            herz: 1
        }

        let h10: Karten = {
            name: "herz 10",
            karo: 0,
            pik: 0,
            kreuz: 0,
            herz: 1
        }

        let hj: Karten = {
            name: "herz bube",
            karo: 0,
            pik: 0,
            kreuz: 0,
            herz: 1
        }

        let hq: Karten = {
            name: "herz dame",
            karo: 0,
            pik: 0,
            kreuz: 0,
            herz: 1
        }

        let hk: Karten = {
            name: "herz könig",
            karo: 0,
            pik: 0,
            kreuz: 0,
            herz: 1
        }

        let ha: Karten = {
            name: "herz ass",
            karo: 0,
            pik: 0,
            kreuz: 0,
            herz: 1
        }


        let alleKarten: Karten[] = [k7, k8, k9, k10, kj, kq, kk, ka, p7, p8, p9, p10, pj, pq, pk, pa, kr7, kr8, kr9, kr10, krj, krq, krk, kra, h7, h8, h9, h10, hj, hq, hk, ha ] //Alle Karten im Array gespeichert, um Zugriff darauf zu vereinfachen
        let c: string = ""; 


        function random1(x: number) { 
            return Math.floor(Math.random() * Math.floor(x));
        }



        function placeDiv(_color: string, _v: string, _y: number): void { 
            let div: HTMLDivElement = document.createElement("div");
            document.body.appendChild(div);
            div.setAttribute("id", "Handkarten" + _y); 
            document.getElementById("Handkarten" + _y).innerHTML += _v; 
        }

        let z: number;
        let input: string = prompt("Anzahl der Karten auswaehlen"); 
        let s1: number = 4; 
        let s2: number = 4;
        z = Number(input); 


        for (let d: number = 0; d < z; d++) { 
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
                    let b: number = random1(4); 
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
                                continue
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

    document.addEventListener("DOMContentLoaded", (maumau)) 


}