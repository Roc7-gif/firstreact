import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { TextForm, TextAreaForm } from '../components/InputForm.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTelegram } from '@fortawesome/free-brands-svg-icons'
import { useInputs } from "../hooks/useInputs"

import { useRef, useState } from 'react'
export function ContactForm() {
   

    const [    nomvalue, nomhandleSubmit , nomErrorRef ,    nomisvalid,  nomref] = useInputs( 'nom' )
    const [    prenomvalue, prenomhandleSubmit , prenomErrorRef , prenomisvalid,prenomref] = useInputs( 'prenom' )
    const [   emailvalue, emailhandleSubmit , emailErrorRef ,  emailisvalid,emailref] = useInputs('email' )
    const [   phonevalue, phonehandleSubmit , phoneErrorRef ,  phoneisvalid,phoneref] = useInputs( 'Numéro de téléphone ' )
    const [   sujetvalue, sujethandleSubmit , sujetErrorRef ,  sujetisvalid,sujetref] = useInputs('sujet' )
    const [    msgvalue, msghandleSubmit , msgErrorRef ,    msgisvalid,  msgref] = useInputs( 'message' )
    

    return <>
        <div className="  lg:p-20 pt-10 w-full max-w-full ">
            <form action="/contact" method="post" className='  shadow-lg shadow-blue-100 rounded-xl bg-white p-20 pt-10 '>
                <h2 className='text-4xl font-medium text-center p-2 pb-10 text-green-600'>Envoyez-nous  un message  </h2>
           <TextForm Inputref={nomref} value = {     nomvalue} handleSubmit= {   nomhandleSubmit}  ErrorRef= {   nomErrorRef} placeholder='Entrer votre Nom ' type = 'text' label='nom'/>
            <TextForm Inputref={prenomref} value = {prenomvalue} handleSubmit= {prenomhandleSubmit}  ErrorRef= {prenomErrorRef} placeholder='Entrer vos Prénoms ' type='text'  label='prenom' />
            <TextForm Inputref={emailref} value = {  emailvalue} handleSubmit= { emailhandleSubmit}  ErrorRef= { emailErrorRef} placeholder='Entrez votre email ' type='email'  label='email'/>
            <TextForm Inputref={phoneref} value = {  phonevalue} handleSubmit= { phonehandleSubmit}  ErrorRef= { phoneErrorRef} placeholder='+226 00 00 00 00 ' type='text'  label='Numero de téléphone'/>
            <TextForm Inputref={sujetref} value = {     sujetvalue} handleSubmit= {   sujethandleSubmit}  ErrorRef= {   sujetErrorRef} placeholder='Votre  Sujet ' type='text' label='Sujet' />
                <TextAreaForm Inputref={msgref} value = {     msgvalue} handleSubmit= {  msghandleSubmit}  ErrorRef= {  msgErrorRef} placeholder='Votre  Message ' type='' label='Message' />    
                <button type='submit'
                    disabled={(nomisvalid && prenomisvalid && emailisvalid && phoneisvalid && sujetisvalid && msgisvalid) ? false : true}
                    className='text-white bg-blue-600 p-3 px-5 m-auto inline-block rounded-lg cursor-pointer hover:bg-blue-800 mt-15 disabled:bg-blue-300 disabled:cursor-not-allowed'> Envoyer <FontAwesomeIcon icon={faTelegram} /> </button>
        </form>
       </div>
    </>
}