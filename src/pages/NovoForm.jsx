import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { insereTarefa } from "../services/TaskService"

export default function NovoForm() {
  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()
  
  async function onSubmit(data){
    try{
      await insereTarefa(data)
      navigate('/')
    }catch(error){
      console.log(error.message)
    }
  }
  
  return (
    <>

    </>
  )
}