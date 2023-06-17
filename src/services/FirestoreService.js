import { app } from './FirebaseConfig'
import { getFirestore, getDocs, collection, query,  where } from 'firebase/firestore'


const db = getFirestore(app)

export async function listaTarefas() { //variavel db recebe a função getDocs que retona os dados da coleção no Firestore
    const tarefas = []
    const resposta = await getDocs(
        query(
        collection(db, 'tarefas'), 
        where('prioridade', '==', 1)
        ) 
    )
    resposta.forEach((doc) => {
        tarefas.push({key: doc.id, ...doc.data()})
    })
    return tarefas;

    
    /*         .then((querySnapshot) => { })
    .catch((error) => { throw Error('Falhou!') }) */
}

export async function insereTarefa(tarefa) {

}

export async function modificaTarefa(tarefa) {

}

export async function removeTarefa(key) {

}