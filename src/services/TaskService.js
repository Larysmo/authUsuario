import { UrlAPI } from "./FirebaseConfig";

export async function listaTarefa () {
    await fetch (UrlAPI)
    .then((response => response.json))
    .then((data) => console.log(data))
    .catch((error) => {throw Error ('Tá errado! arruma isso aí...')}) 
}

export async function insereTarefa(tarefa) {
    await fetch(UrlAPI, {
        method: 'POST',
        body: JSON.stringify(),
        headers: {
            'Content-type': 'application/json'
        }
    })
    .catch((error) => {throw Error('Errou feio, errou rude...')})
} 