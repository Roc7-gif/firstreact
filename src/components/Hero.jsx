// import {Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
export function Hero() {
    
    return <>
    <div className=" relativer top-10 max-w-full w-full bg-gradient-to-br from-blue-50 via-white to-green-50 p-8 md:p-12 rounded-2xl shadow-xl relative overflow-hidden ">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-200 rounded-full opacity-20 animate-pulse-slow"></div>
        <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-green-300 rounded-full opacity-15 animate-pulse-slow delay-1000"></div>
        
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
            <div className="flex flex-col justify-center space-y-6">
                <div className="title font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-800 text-4xl md:text-5xl lg:text-6xl p-2 transition-all duration-700 transform hover:scale-105">
                    Formez-vous aux métiers du digital en Afrique
                </div>
                <div className="content font-medium p-3 text-justify text-lg md:text-xl text-gray-700 leading-relaxed transition-all duration-500 hover:bg-white hover:bg-opacity-50 hover:rounded-xl hover:shadow-md">
                    Rejoignez une communauté de passionnés et construisez votre avenir dans
                    le numérique avec Coders4Africa. Des formations de qualité, un mentorat
                    personnalisé et des opportunités à la clé.
                </div>
                
            
            </div>

            <div className="flex items-center justify-center rotate-4">
                <div className="bg-white border-0 m-auto shadow-2xl p-6 rounded-2xl transform transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 animate-float relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-blue-100 rounded-bl-full opacity-40"></div>
                    
                    <div className="card-title font-bold text-xl md:text-2xl max-w-max inline-flex items-center mb-4 relative z-10">
                        <span className="bg-gradient-to-r from-blue-100 to-green-100 p-4 rounded-full mr-4 text-blue-600 shadow-inner">
                                <FontAwesomeIcon icon={ faCode} />
                        </span>
                        <span className="mt-2 inline-block bg-gradient-to-r from-blue-600 to-green-800 bg-clip-text text-transparent">
                            Des formations dans le domaine du digital
                        </span>
                    </div>
                    <div className="card-content p-3 text-lg text-gray-600 relative z-10"> 
                        Découvrez nos formations dans le monde du digital sans pourcent intuitif et dispensées par des experts du domaine.
                    </div>
                    <div className="w-full flex flex-col sm:flex-row justify-between items-center px-3 py-4 gap-3 relative z-10">
                        <div className="card-badge bg-gradient-to-r from-blue-100 to-green-100 max-w-max py-2 rounded-full px-5 text-blue-600 font-medium shadow-inner animate-pulse">
                            Places limitées 
                        </div>
                        <Link to= '/evenements' className="card-badge max-w-max py-2 rounded-full px-5 text-white font-medium cursor-pointer bg-gradient-to-r from-blue-500 to-green-600 transition-all duration-300 transform hover:scale-105 hover:shadow-md flex items-center group">
                            Voir plus <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="mt-10 h-2 bg-gradient-to-r from-blue-400 to-green-600 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blue-200 to-green-300 rounded-full w-1/2 animate-[progress_3s_ease-in-out_infinite]"></div>
        </div>
        </div>
        
         </>
}