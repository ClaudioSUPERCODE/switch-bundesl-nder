
// ===========SWITCH BREAK===========//

// ====LEV-2_5=======//



function check() {
    let bundesland = document.getElementById("bundeslandInfo").value;
    let ausgabe = document.getElementById("bundeslandInfoErgebnis");

    switch (bundesland) {
        case "Baden-Württemberg":
            ausgabe.innerHTML = "Baden-Württemberg hat 10,880 Mio Einwohner und Stuttgart ist die Hauptstadt";
            break;
        case "Bayern":
            ausgabe.innerHTML = "Bayern hat 12,844 Mio Einwohner und München ist die Hauptstadt";
            break;
        case "Berlin":
            ausgabe.innerHTML = "Berlin hat 3,520 Mio Einwohner und Berlin ist die Hauptstadt";
            break;
        case "Brandenburg":
            ausgabe.innerHTML = "Brandenburg hat 2,485 Mio Einwohner und Potsdam ist die Hauptstadt";
            break;
        case "Bremen":
            ausgabe.innerHTML = "Bremen hat 0,671 Mio Einwohner und Bremen ist die Hauptstadt";
            break;
        case "Hamburg":
            ausgabe.innerHTML = "Hamburg hat 1,787 Mio Einwohner und Hamburg ist die Hauptstadt";
            break;
        case "Hessen":
            ausgabe.innerHTML = "Hessen hat 6,176 Mio Einwohner und Wiesbaden ist die Hauptstadt";
            break;
        case "Mecklenburg-Vorpommern":
            ausgabe.innerHTML = "Mecklenburg-Vorpommern hat 1,612 Mio Einwohner und Schwerin ist die Hauptstadt";
            break;
        case "Niedersachsen":
            ausgabe.innerHTML = "Niedersachsen hat 7,927 Mio Einwohner und Hannover ist die Hauptstadt";
            break;
        case "Nordrhein-Westfalen":
            ausgabe.innerHTML = "Nordrhein-Westfalen hat 17,865 Mio Einwohner und Düsseldorf ist die Hauptstadt";
            break;
        case "Rheinland-Pfalz":
            ausgabe.innerHTML = "Rheinland-Pfalz hat 4,053 Mio Einwohner und Mainz ist die Hauptstadt";
            break;
        case "Saarland":
            ausgabe.innerHTML = "Saarland hat 0,996 Mio Einwohner und Saarbrücken ist die Hauptstadt";
            break;
        case "Sachsen":
            ausgabe.innerHTML = "Sachsen hat 4,085 Mio Einwohner und Dresden ist die Hauptstadt";
            break;
        case "Sachsen-Anhalt":
            ausgabe.innerHTML = "Sachsen-Anhalt hat 2,245 Mio Einwohner und Magdeburg ist die Hauptstadt";
            break;
        case "Schleswig-Holstein":
            ausgabe.innerHTML = "Schleswig-Holstein hat 2,859 Mio Einwohner und Kiel ist die Hauptstadt";
            break;
        case "Thüringen":
            ausgabe.innerHTML = "Thüringen hat 2,171 Mio Einwohner und Erfurt ist die Hauptstadt";
            break;
        default:
            ausgabe.innerHTML = "Ein solches Bundesland gibt es in Deutschland nicht.";
            break;
    }
}
