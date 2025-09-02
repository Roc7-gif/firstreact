import { faArrowRight, faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { useInputs } from '../hooks/useInputs'
import { TextForm } from './InputForm'
import { Link } from 'react-router-dom'

export function LoginForm() {
    const [value , handleSubmit , ErrorRef , isvalid , InputRef] = useInputs('Email' )
    const [pwdvalue , pwdhandleSubmit , pwdErrorRef , pwdisvalid , pwdInputRef] = useInputs('mot de passe ' )
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
            <h1 className="text-2xl font-bold mb-2">Connexion</h1>
            <p className="opacity-90">Accédez à votre espace Coders4Africa</p>
        </div>
        {/* <Link className='text-lg text-gray-700 pt-6 px-9  inline-block mt-5' to= '/inscription'>Vous n'êtes pas inscrits ? <span className=" px-3 py-2 text-white bg-green-600 rounded-lg hover:bg-blue-700 duration-400 ">S'inscrire <FontAwesomeIcon icon= {faArrowRight} /> </span></Link> */}
        <form className="p-8" method='post'>
           <TextForm  Inputref={InputRef} value = {  value} handleSubmit= { handleSubmit}  ErrorRef= { ErrorRef} placeholder='Entrez votre email ' type='email'  label='Email' />
            
           
                    <TextForm type='password'  Inputref={pwdInputRef} value = {  pwdvalue} handleSubmit= { pwdhandleSubmit}  ErrorRef= { pwdErrorRef} placeholder='Entrez votre mot de passe ' label='Password' /> 
            <div className="flex justify-between items-center mb-6">
                <div className="flex items-center">
                    <input type="checkbox" id="remember" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"/>
                    <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">Se souvenir de moi</label>
                </div>
                
                <a href="#" className="text-sm text-blue-600 hover:underline">Mot de passe oublié?</a>
            </div>
            
            <button type="submit" className="login-btn w-full bg-gradient-to-r from-blue-600 to-green-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                Se connecter
            </button>
            
            {/* <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">Ou continuer avec</span>
                </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
                <a href="#" className="social-btn flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                    <i className="fab fa-google text-red-500 mr-2"></i>
                    <span>Google</span>
                </a>
                <a href="#" className="social-btn flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                    <i className="fab fa-linkedin text-blue-600 mr-2"></i>
                    <span>LinkedIn</span>
                </a>
            </div> */}
        </form>
        
        <div className="bg-gray-50 p-6 text-center">
            <p className="text-gray-600">Vous n'avez pas de compte? <a href="#" className="text-blue-600 font-semibold hover:underline">S'inscrire maintenant</a></p>
        </div>
    </div>
    </>
}