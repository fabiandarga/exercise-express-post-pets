import { Low, JSONFile } from 'lowdb'

const db = new Low(new JSONFile('file.json'))
await db.read()
db.data ||= { pets: [], lastId: 0 }

// Achtung ASYNCHRON
export async function addPet(pet) {
   // Pet hinzufügen
}

export function getPet(id) {
    // Pet mit der id in der Datenbank finden
}

export function getAllPets() {
    // Alle Pets zurück geben.
}
