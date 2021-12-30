
const Error = ({children}) => {
    return (
        <div 
            className='bg-red-800 text-white font-bold text-center p-3 mb-3 uppercase'>
            <p> {children}</p>
        </div>
    )
}

export default Error
