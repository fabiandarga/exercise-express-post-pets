# Express Post Pets

Wir programmierne eine Kleine Haustier-Datenbank  

Unser Server soll vier GET Routen haben:
* `GET /` -> Zeigt eine Liste aller Haustiere mit namen
* `GET /pet/:id` -> Zeigt ein Haustier
* `POST /pet` -> Fügt ein neues Haustier hinzu

**!Achtung:** Alle Datenbank-Funktionen sollen in der Datei database.js liegen. Alles was mit Express zu tun hat soll in der Hauptdatei index.js passieren.

## Install
**express** und **lowdb** sind bereits in den dependencies.  
Also nur einmal:
```
npm install
```


## Pet Daten
Haustiere sollen immer als Object gespeichert werden: 

```
{
    name: "pet name",
    age: 3,
    color: "brown",
    animal: "Dog,
}
```

## Pet hinzufügen
*POST /pet*
* Der Server soll JSON Daten bekomen.
* Der Server soll prüfen ob alle Daten vorhanden sind: name, age, color, animal. Sonst einen Fehler zurück geben.
* Der Server soll dann die Funktion addPet aufrufen, die die Daten in die Datenbank speicher und eine neue **id** hinzufügt.
* Im erfolgsfall soll der Server dann die neue **id** zurück schicken

## Pet Liste
*GET /*
* Der Server soll Eine Liste (JSON) aller Pets mit **name** und **id** zurück geben.

## Pet Details
*GET /pet/:id*
* Der Server soll prüfen, ob es ein Pet mit der id gibt. Falls nicht, soll ein 404 Fehler zurück gegeben werden.
* Gibt es ein Pet mit der id, sollen alle Daten als JSON zurück geschickt werden.

## Bonus: Delete
*DELETE /pet/:id*  
Probiere die *DELETE Method* aus.
* Der Server soll prüfen, ob es ein Pet mit der id gibt. Falls nicht, soll ein 404 Fehler zurück gegeben werden.
* Gibt es ein Pet mit der id, soll dieses aus der Datenbank gelöscht werden.
* Der server antworted dann mit Code 200 und dem Text "Success".