# Challenge für Engineer Praktikum - Node, Express und JestDiverlyze

Entwickle eine REST-API mit Node und Express, die lediglich einen GET-Endpoint bereitstellt.
Hier geht es darum, Antworten aus einem Umfrage-System zu aggregieren und für die
jeweiligen Geschlechter ein Scoring zu berechnen. Der Code soll dabei folgendes ermöglichen:
Der Server ermöglicht eine GET-Anfrage an den Endpoint /scores wenn er gestartet wird.
Die JSON-Response hat folgendes Format:
{
"femaleScore": 7.6,
"maleScore": 6.8,
"diverseScore": 9.5,
}



# Challenge Praktikum - Node, Express und Jest:

Dieses Projekt ist eine REST-API, die mit Node und Express entwickelt wurde,
um Antworten aus einem Umfragesystem zu aggregieren und Punkte nach Geschlecht zu berechnen.

## Anleitung

### Installation
#### Klone das Repository:

  `git clone git@github.com:Alexis-j/Challenge-Praktikum.git`

  `cd Challenge-Praktikum`

#### Installiere die Abhängigkeiten:

  `npm install express jest`

#### Verwendung:
Starte den Server:
  `node src/server.js`

Greife auf die Punkteseite unter: http://localhost:3000/scores? zu.

#### Projektstruktur:

- `src/server.js`: Hauptdatei, die den Server startet.
- `src/scoring.js`: Enthält die Logik zur Berechnung der Punkte.
- `tests/scoring.test.js`: Jest-Testdatei.

#### Tests:
Führe die Tests mit folgendem Befehl aus:
  `npx jest`

#### Beiträge:
  Fühle dich frei, durch das Erstellen von Pull Requests beizutragen.

#### Probleme und Verbesserungen:
  Wenn du auf Probleme stößt oder Ideen zur Verbesserung des Projekts hast, öffne ein Issue.
