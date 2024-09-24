import { ButtonHTMLAttributes, ReactNode } from "react";

interface Iprops extends ButtonHTMLAttributes<HTMLButtonElement>{
children:ReactNode;
className?:string;
width?:"w-full"|"w-fit";

}
const Button=({children,className,width="w-fit",...reset}:Iprops )=>{

    return (
        <button  className={`${className} ${width} text-white py-3 px-3 rounded-md flex-1 `} {...reset} >{children}</button>
    )
}
export default Button;