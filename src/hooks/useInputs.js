import { useRef, useState } from "react";

export function useInputs( label) {
    const [value, setvalue] = useState('') 
    const [isvalid , setisvalid] = useState(false)
    const ErrorRef = useRef(null)
    const InputRef = useRef(null)
    const handleSubmit = (e) => {
        setvalue(e.target.value)     
        if (e.target.value == ''&& label!='confirm' ) {
            setisvalid(false)
            ErrorRef.current.innerHTML =`• Veuillez entrez votre ${label}  ` 
        }
        else if ( (label.toLowerCase().includes("phone")) && (!isPhoneNumber(e.target.value))) {
            setisvalid(false)
           
            ErrorRef.current.innerHTML = `• ${capitalize(label)} saisie incorrêcte ` 
        
        }
        else if ((e.target.value.length <= 3) && label!='confirm') {
            setisvalid(false)

            ErrorRef.current.innerHTML = `• ${capitalize(label)} trop court ` 
            
        }
        
        else if (InputRef.current.getAttribute('type') == 'email' && (!isEmail(e.target.value))) {
            setisvalid(false)
           
            ErrorRef.current.innerHTML = `• ${capitalize(label)} saisie incorrêcte ` 
        
        }
        else if (InputRef.current.getAttribute('type') == 'password') {
            const {isValid , errors }= validatePassword(e.target.value)
            if (!isValid && label !='confirm') {
                let errorbloc = ''
                errors.forEach(element => {
                    errorbloc += `•     ${element} <br />`
                });
                console.log(errors)
                ErrorRef.current.innerHTML = errorbloc
                setisvalid(false)

            } else if (isValid) {
                setisvalid(true)
                console.log('of')
            ErrorRef.current.innerHTML = '  ' 
                
            }
            if (label =='confirm') {
                console.log('of')
            setisvalid(true)
                
                ErrorRef.current.innerHTML = '  ' 
            }
        }
       
        else {
            setisvalid(true)

            ErrorRef.current.innerHTML = '  ' 

            
        }

    }
    return [value , handleSubmit , ErrorRef , isvalid , InputRef  ]

}

export function capitalize(str) {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  function isEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
function isPhoneNumber(number) {
    // Exemple simple : accepte chiffres, espaces, +, -, ()
    const regex = /^\+?[0-9\s\-()]{7,15}$/;
    return regex.test(number);
  }
  
  
  
  
  function validatePassword(password) {
    const errors = [];
  
    if (password.length < 6) {
      errors.push("Le mot de passe doit contenir au moins 6 caractères.");
    }
  
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      errors.push("Le mot de passe doit contenir au moins un caractère spécial.");
    }
  
    return {
      isValid: errors.length == 0,
      errors,
    };
  }
  