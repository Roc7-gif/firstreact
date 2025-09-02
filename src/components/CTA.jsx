import { faArrowRight, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

export function CallToAction() {
    
    return <>
         <div className="relative max-full w-full overflow-hidden relactive top-20">
        <div className="absolute inset-0 z-0" id="particles"></div>
        
        <div className="cta-card bg-gradient-to-br from-blue-600 to-green-500 text-white rounded-2xl overflow-hidden relative z-10">
                {/* <div classN ame="absolute top-0 right-0 w-64 h-64 -mr-32 -mt-32 bg-white/10 rounded-full"></div>  */}
            {/* <div className="absolute bottom-0 left-0 w-80 h-80 -ml-40 -mb-40 bg-white/5 rounded-full"></div> */}
            
            <div className="relative z-10 p-8 md:p-12">
                <div className="text-center mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Prêt à transformer votre avenir numérique ?</h2>
                    <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">Rejoignez la communauté Coders4Africa et bénéficiez d'un accompagnement personnalisé pour développer vos compétences et booster votre carrière.</p>
                </div>
                
                <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8">
                    <Link to="/inscription" style={{textDecoration : 'none'}}  className="  btn-primary bg-white text-blue-600 font-bold py-4 px-8 rounded-full text-lg flex no-underline items-center justify-center gap-2">
                        <span>Rejoindre maintenant</span>
                            <FontAwesomeIcon icon={faArrowRight} />
                    </Link>
                    
                    <Link to="/evenements" style={{textDecoration : 'none'}}   className="  border-2 border-white/30 text-white font-semibold py-4 px-8 rounded-full text-lg no-underline hover:bg-white/10 transition-all duration-300">
                        Découvrir nos programmes
                    </Link>
                </div>
                
                <div className="text-center">
                    <p className="text-white/80 text-sm md:text-base flex items-center justify-center gap-2 ">
                    <FontAwesomeIcon icon={faUser} />
                        <span>Plus de 500 apprenants nous ont déjà rejoints !</span>
                    </p>
                </div>
            </div>
        </div>
        
        <div className="absolute top-4 left-4 w-16 h-16 bg-blue-400/20 rounded-full floating"></div>
        <div className="absolute bottom-8 right-8 w-24 h-24 bg-green-400/20 rounded-full floating" style={{animationDelay : '2s'}}></div>
        <div className="absolute top-12 right-12 w-12 h-12 bg-white/10 rounded-full floating" style={{animationDelay : '4s'}}></div>
    </div>
    </>
}