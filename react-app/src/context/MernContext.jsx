import { createContext,useContext,useState } from "react";
const mernContext=createContext()
export  const MernContext=(props)=>{
    console.log(props);
    const [courses,setCourses]=useState(['Java','Kotlin','Devops','MongoDB','ReactJs','ExpressJS']);
return(
    <>
        <mernContext.Provider value={{courses,setCourses}}>
            {props.children}
        </mernContext.Provider>
    </>
)
}
export const useMernHook=()=>{
    const mern_data=useContext(mernContext)
    return mern_data}