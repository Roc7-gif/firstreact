import { faArrowRight, faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { useInputs } from '../hooks/useInputs'
import { TextForm } from './InputForm'
import { Link } from 'react-router-dom'

export function RegisterForm() {
    const [ nompwdvalue, nompwdhandleSubmit, nompwdErrorRef, nompwdisvalid, nompwdInputRef] = useInputs('Nom')
    const [prenompwdvalue ,prenompwdhandleSubmit ,prenompwdErrorRef ,prenompwdisvalid ,prenompwdInputRef] = useInputs('prenoms ' )
    const [value , handleSubmit , ErrorRef , isvalid , InputRef] = useInputs('Email' )
    const [pwdvalue , pwdhandleSubmit , pwdErrorRef , pwdisvalid , pwdInputRef] = useInputs('mot de passe' )
    const [confpwdvalue , confpwdhandleSubmit , confpwdErrorRef , confpwdisvalid , confpwdInputRef] = useInputs('confirm' )
    console.log('pwd', pwdisvalid)
    console.log('conf', confpwdisvalid)
    return <>
    <br />
    <br />
    <br />
    <div className="login-container w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden z-10 m-auto ">
        <div className="bg-gradient-to-r from-blue-600 to-green-500 text-white p-8 text-center">
            <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-xl">C4A</span>
                </div>
            </div>
            <h1 className="text-2xl font-bold mb-2">Inscription </h1>
            <p className="opacity-90">Rejoingnez la comunauté  Coders4Africa</p>
        </div>
        <Link className='text-lg text-gray-700 pt-6 px-9  inline-block mt-5' to= '/connexion'>Vous êtes déjà  inscrits ? <span className=" px-3 py-2 text-white bg-green-600 rounded-lg hover:bg-blue-700 duration-400 ">Se connecter  <FontAwesomeIcon icon= {faArrowRight} /> </span></Link>
            <form className="p-8" method='post'>
            <TextForm type='text'  Inputref={nompwdInputRef} value = {  nompwdvalue} handleSubmit= { nompwdhandleSubmit}  ErrorRef= { nompwdErrorRef} placeholder='Entrez votre nom ' label='Nom' /> 
            
            <TextForm type='text' Inputref={prenompwdInputRef} value={prenompwdvalue} handleSubmit={prenompwdhandleSubmit} ErrorRef={prenompwdErrorRef} placeholder='Entrez vos prénoms ' label='Prénoms' /> 
                
           <TextForm  Inputref={InputRef} value = {  value} handleSubmit= { handleSubmit}  ErrorRef= { ErrorRef} placeholder='Entrez votre email ' type='email'  label='Email' />
            
            
            <TextForm type='password'  Inputref={pwdInputRef} value = {  pwdvalue} handleSubmit= { pwdhandleSubmit}  ErrorRef= { pwdErrorRef} placeholder='Entrez un mot de passe ' label='Mot de passe ' /> 
            
            <TextForm type='password'   Inputref={confpwdInputRef} value = { confpwdvalue} handleSubmit= {confpwdhandleSubmit }  ErrorRef= { confpwdErrorRef} placeholder='Confirmer le mot de passe ' label='Confirmation du mot de passe ' /> 
                
            <button type="submit" disabled= {(nompwdisvalid&&prenompwdisvalid&&isvalid&& pwdisvalid )? false :true} className="login-btn w-full bg-gradient-to-r from-blue-600 to-green-500  disabled:bg-white disabled:text-green-300   disabled:border-2 disabled:from-transparent  disabled:to-transparent text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-500">
                S'enregistrer   
            </button>
            
          
        </form>
        
        {/* <div className="bg-gray-50 p-6 text-center">
            <p className="text-gray-600">Vous n'avez pas de compte? <a href="#" className="text-blue-600 font-semibold hover:underline">S'inscrire maintenant</a></p>
        </div> */}
    </div>
    </>
}