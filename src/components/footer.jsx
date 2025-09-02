import { faFacebook, faTwitter, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom"

export function AppFooter() {
    
    return <>
    <footer className="w-full max-w-full relative top-30 bg-gradient-to-br from-gray-900 to-blue-900 text-white  shadow-2xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-10 pb-0">
            <div className="lg:col-span-1">
                <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mr-3">
                        <span className="text-primary font-bold text-lg">C4A</span>
                    </div>
                    <span className="text-2xl font-bold gradient-text">Coders4Africa</span>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                    Formez-vous aux métiers du digital et construisez votre avenir avec nous. Une communauté, des opportunités, un avenir.
                </p>
                <div className="flex space-x-4">
                        <Link to="#" className="social-icon w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center">
                            <FontAwesomeIcon className = 'text-white' icon={ faFacebook} />
                    </Link>
                        <Link to="#" className="social-icon w-10 h-10 rounded-full bg-blue-400 flex items-center justify-center">
                        <FontAwesomeIcon className = 'text-white' icon={ faTwitter} />
                            
                    </Link>
                    <Link to="#" className="social-icon w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
                    <FontAwesomeIcon className = 'text-white' icon={ faLinkedin} />
                    </Link>
                    <Link to="#" className="social-icon w-10 h-10 rounded-full bg-green-600 flex items-center justify-center">
                    <FontAwesomeIcon className = 'text-white' icon={ faWhatsapp} />
                        
                    </Link>
                </div>
            </div>
            
            <div>
                <h3 className="text-lg font-semibold mb-6 relative pb-2">
                    Programme
                    <div className="absolute bottom-0 left-0 w-10 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                </h3>
                <ul className="space-y-3">
                    <li><Link to="#" className="footer-link text-gray-300 hover:text-white">Formations</Link></li>
                    <li><Link to="#" className="footer-link text-gray-300 hover:text-white">Ateliers</Link></li>
                    <li><Link to="#" className="footer-link text-gray-300 hover:text-white">Mentorat</Link></li>
                    <li><Link to="#" className="footer-link text-gray-300 hover:text-white">Événements</Link></li>
                    <li><Link to="#" className="footer-link text-gray-300 hover:text-white">Hackathons</Link></li>
                </ul>
            </div>
            
            <div>
                <h3 className="text-lg font-semibold mb-6 relative pb-2">
                    Ressources
                    <div className="absolute bottom-0 left-0 w-10 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                </h3>
                <ul className="space-y-3">
                    <li><Link to="#" className="footer-link text-gray-300 hover:text-white">Blog</Link></li>
                    <li><Link to="#" className="footer-link text-gray-300 hover:text-white">Témoignages</Link></li>
                    <li><Link to="#" className="footer-link text-gray-300 hover:text-white">FAQ</Link></li>
                    <li><Link to="#" className="footer-link text-gray-300 hover:text-white">Partenaires</Link></li>
                    <li><Link to="#" className="footer-link text-gray-300 hover:text-white">Carrières</Link></li>
                </ul>
            </div>
            
            <div>
                <h3 className="text-lg font-semibold mb-6 relative pb-2">
                    Restez informé
                    <div className="absolute bottom-0 left-0 w-10 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                </h3>
                <p className="text-gray-300 mb-4">
                    Abonnez-vous à notre newsletter pour recevoir les dernières actualités.
                </p>
                <form className="space-y-3">
                    <input type="email" placeholder="Votre email" className="newsletter-input w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-primary"/>
                    <button type="submit" className="w-full bg-gradient-to-r from-primary to-accent py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                        S'abonner
                    </button>
                </form>
            </div>
        </div>
        
        <div className="p-10 border-t border-gray-700 mt-8">
            <div className="">
                    <h3 className="text-lg font-semibold mb-6 relative pb-2">
                        Contactez-nous
                        <div className="absolute bottom-0 left-0 w-10 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                    </h3>
                    <div className="space-y-4 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="flex items-start">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                                <i className="fas fa-map-marker-alt text-primary"></i>
                            </div>
                            <div>
                                <h4 className="font-medium">Adresse</h4>
                                <p className="text-gray-300">Lokossa</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                                <i className="fas fa-phone-alt text-primary"></i>
                            </div>
                            <div>
                                <h4 className="font-medium">Téléphone</h4>
                                <p className="text-gray-300">+229 00 00 00 </p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                                <i className="fas fa-envelope text-primary"></i>
                            </div>
                            <div>
                                <h4 className="font-medium">Email</h4>
                                <p className="text-gray-300">contact@coders4africa.org</p>
                            </div>
                        </div>
                    </div>
                
                <div>
                  
                </div>
            </div>
        </div>
        
        <div className="bg-gray-900 p-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-400 text-sm mb-4 md:mb-0">
                    © 2023 Coders4Africa - Un programme Bénilab Services. Tous droits réservés.
                </p>
                <div className="flex space-x-6">
                    <Link to="#" className="text-gray-400 hover:text-white text-sm footer-link">Mentions légales</Link>
                    <Link to="#" className="text-gray-400 hover:text-white text-sm footer-link">Politique de confidentialité</Link>
                    <Link to="#" className="text-gray-400 hover:text-white text-sm footer-link">Conditions d'utilisation</Link>
                </div>
            </div>
        </div>
    </footer>
    </>
}