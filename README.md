Challenge für Engineer Praktikum - Node,
Express und Jest
Diverlyze

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

