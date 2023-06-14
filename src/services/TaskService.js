import { urlApi } from './FirebaseConfig'



// GET: solicitar, listar
export async function listaTarefas(){
    let tarefas =[]                       /*  novo */
    await  fetch(urlApi + "tarefas.json")               
    .then((response)=> response.json())
    .then((data) => {      /*  novo */
        for(let key in data){      /*  novo */
            tarefas.push({key, ...data[key]})
        }
    })
    .catch((error) => {throw Error("Deu ruim")})
    return tarefas
}

// PUT alterar modificar
export async function modificaTarefa(tarefa){
    await fetch(urlApi + "tarefas/" + tarefa.key + ".json",{
         method: "PUT",
         body: JSON.stringify({nome: tarefa.nome, prioridade: tarefa.prioridade}),
         headers:{'Content-type': 'application/json'}
     })
     .catch((error) => {throw Error("Deu ruim")})
 }


//POST: criar, inserir
export async function insereTarefa(tarefa){
   await fetch(urlApi + "tarefas.json",{
        method: "POST",
        body: JSON.stringify(tarefa),
        headers:{
            'Content-type': 'application/json'}
        
    })
    .catch((error) => {throw Error("Deu ruim")})
}



// DELETE: remover, excluir
export async function removeTarefa(key){
    await fetch(urlApi+ "tarefas/" + key + ".json", {
        method:'DELETE'
    })

.catch((error) => {throw Error("Deu ruim")})
}