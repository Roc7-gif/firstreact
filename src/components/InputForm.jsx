import { useId, useRef } from "react"
import { capitalize } from "../hooks/useInputs"
export function TextForm({ placeholder , type , label ,value , handleSubmit , ErrorRef, Inputref  }) {
    const elementiD = useId()
    return <>
        
        <div className=" my-1 p-2 bg-gray-50 rounded-lg">
            <label htmlFor={elementiD} className="mb-1 inline-block  py-2 mx-1 text-blue-600 font-medium text-xl " >{ capitalize(label) }</label>
            <input required  label={label} id = {elementiD} ref= {Inputref} value={value} onChange={handleSubmit} type={type} placeholder={placeholder} className=" placeholder:text-xl text-2xl  border-1 p-3 w-[100%] rounded-lg border-blue-email border-gray-400 focus:outline-green-600 focus:border-green-600  focus-outline-2" />
            <div ref={ErrorRef}  className="p-1 text-red-700"></div>
        </div>
    </>
}

export function TextAreaForm({ placeholder , type , label ,value , handleSubmit , ErrorRef ,Inputref  }) {
    const elementiD = useId()
    return <>
        
        <div className=" my-1 p-3 bg-gray-50 rounded-lg">
            <label htmlFor={elementiD} className="mb-1 inline-block  py-1 mx-2 text-blue-600 font-medium text-xl " >{ capitalize(label) }</label>
            <textarea rows= '4' cols= '25' label={label} id={elementiD} ref={Inputref   } value={value} onChange={handleSubmit} type={type} placeholder={placeholder} className="  border-1 p-2 w-[100%] rounded-lg border-blue-email border-gray-400 focus:outline-green-600 focus:border-green-600  focus-outline-2" >
            </textarea>
            <div ref={ErrorRef}  className="p-1 text-red-700"></div>
        </div>
    </>
}