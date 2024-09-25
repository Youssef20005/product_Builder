import { InputHTMLAttributes } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement>{

} 
const Input=({...reset}:IProps )=>{

    return (
        
            <input className="border-[1px] border-gray-300 rounded-md w-full focus:outline-none focus:border-indigo-500 shadow-md 
            focus:ring-2 focus:ring-indigo-500 px-3 py-3 text-md
            
            
            " {...reset} />
        
    )
}
export default Input;