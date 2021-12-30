import {useState, useEffect} from 'react'
import Error from './Error'

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {
    const [nombre, setNombre] = useState('')
    const [propietario, setPropietario] = useState('')
    const [email, setEmail] = useState('')
    const [fecha, setFecha] = useState('')
    const [sintomas, setSintomas] = useState('')

    const [error, setError] = useState(false)

    useEffect(()=>{
        if (Object.keys(paciente).length > 0){
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
        }
    },[paciente])



    const generearID = () =>{
        const random = Math.random().toString(36).substring(2)
        const fecha = Date.now().toString(36)

        return random+fecha
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        //validar
        if([nombre, propietario, email, fecha, sintomas].includes('')){
            console.log('hay datos vacios en el formulario')
            setError(true)
        }else{
            

            setError(false)
        }

        //construir paciente
        const objPaciente = {
            nombre, 
            propietario, 
            email, 
            fecha, 
            sintomas,
        }
        
        if(paciente.id){
            objPaciente.id = paciente.id

            const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id ===paciente.id ? objPaciente : pacienteState)

            setPacientes(pacientesActualizados)
            setPaciente({})
        }else{ 
            objPaciente.id = generearID()
            setPacientes([...pacientes, objPaciente])
        }

        setEmail('')
        setFecha('')
        setPropietario('')
        setNombre('')
        setSintomas('')
    }

    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="text-black text-3xl text-center">Seguimiento de pacientes</h2>

            <p className="text-lg mt-5 text-center mb-10">
                Añade pacientes {''}
                <span className="text-indigo-500 font-bold">Administrarlos</span>
            </p>

            <form 
                action="" 
                onSubmit={handleSubmit}
                className="bg-white shadow-md  rounded-lg py-10 px-5 mb-10 ml-10 mr-10">

                {error && <Error> <p>Todos los campos son obligatorios</p> </Error> }
                <div className="mb-5">
                    <label htmlFor="mascota" className="block text-gray-500 uppercase font-bold">Nombre mascota</label>
                    <input 
                        value={nombre} 
                        onChange={e=>setNombre(e.target.value)} 
                        type="text" 
                        id="mascota" 
                        placeholder="Nombre mascota" 
                        className="w-full border-2 p-2 placeholder-gray-400 rounded-md" />
                </div>
                <div className="mb-5">
                    <label htmlFor="propietario" className="block text-gray-500 uppercase font-bold">Nombre propietario</label>
                    <input 
                        value={propietario} 
                        onChange={e=>setPropietario(e.target.value)} 
                        type="text" 
                        id="propietario" 
                        placeholder="Nombre del propietario" 
                        className="w-full border-2 p-2 placeholder-gray-400 rounded-md" />
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="block text-gray-500 uppercase font-bold">Email propietario</label>
                    <input 
                        value={email} 
                        onChange={e=>setEmail(e.target.value)} 
                        type="email" 
                        id="email" 
                        placeholder="email del propietario" 
                        className="w-full border-2 p-2 placeholder-gray-400 rounded-md" />
                </div>
                <div className="mb-5">
                    <label htmlFor="alta" className="block text-gray-500 uppercase font-bold">Fecha</label>
                    <input 
                        value={fecha} 
                        onChange={e=>setFecha(e.target.value)} 
                        type="date" 
                        id="alta" 
                        className="w-full border-2 p-2 placeholder-gray-400 rounded-md" />
                </div>
                <div className="mb-5">
                    <label htmlFor="sintomas" className="block text-gray-500 uppercase font-bold">Sintomas</label>
                    <textarea 
                        value={sintomas} 
                        onChange={e=>setSintomas(e.target.value)} 
                        name="" 
                        id="sintomas" 
                        placeholder="Describe sintomas" 
                        cols="30" 
                        rows="10" 
                        className="w-full border-2 p-2 placeholder-gray-400 rounded-md"></textarea>
                </div>

                <input type="submit" 
                className="bg-indigo-500 w-full text-white uppercase transition-all rounded-md font-bold hover:bg-indigo-800" 
                value={paciente.id ? 'editar paciente' : 'agregar paciente'} />

            </form>
        </div>
    )
}

export default Formulario
