import Paciente from "./Paciente"
import { useEffect } from "react"

function ListadoPacientes({pacientes, setPaciente, eliminarPaciente}){
    
    useEffect(()=>{
        if (pacientes.length > 0 )
            console.log('se ha agregado un paciente')
    },[pacientes])

    return(
        
        <div className="md:w-1/2 lg:w-3/5 ">

            {pacientes && pacientes.length ? (
                <>
                    <h2 className="font-black text-3xl text-center">Listado de pacientes</h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Administra tus {''}
                        <span className="text-indigo-500 font-bold">
                            pacientes y citas
                        </span>
                    </p>
                    <div className=" h-screen overflow-y-scroll">
                        {
                            pacientes.map((paciente)=>
                                <Paciente
                                    key = {paciente.id}
                                    paciente = {paciente}
                                    setPaciente = {setPaciente}
                                    eliminarPaciente = {eliminarPaciente}/>
                            )
                        }
                    </div> 
                </>
            ) : (
                <>
                    <h2 className="font-black text-3xl text-center">Listado de pacientes</h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Agrega tus pacientes {''}
                        <span className="text-indigo-500 font-bold">
                            Aquí aparecerán tus pacientes
                        </span>
                    </p>    
                </>
            )}

            

        </div>
    )
}

export default ListadoPacientes