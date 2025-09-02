import { faFacebook, faLinkedin, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faClock, faEnvelope, faMapMarkedAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function ContactList() {
    
    return <>
    <br />
    <br />
    <section class="w-full max-h-max  lg:my-20  max-w-4xl bg-white rounded-2xl shadow-xl overflow-hidden z-10">
            
            <div className="text-center p-10 border-b-2 border-green-600">
            <h1 class="text-4xl font-bold mb-2 gradient-text ">Contactez-nous</h1>
           </div>
           <br />
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            <div>
                <h2 class="text-2xl font-bold text-gray-800 mb-6">Nos <span class="gradient-text">coordonnées</span></h2>
                <br />
                <div class="space-y-6">
                    <div class="contact-item flex items-start">
                        <div class="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                                <FontAwesomeIcon icon=  {faEnvelope}  className='text-blue-600 text-xl'/>
                        </div>
                        <div>
                            <h3 class="font-semibold text-gray-800">Email</h3>
                            <p class="text-gray-600">contact@coders4africa.org</p>
                            <p class="text-gray-600">info@coders4africa.org</p>
                        </div>
                    </div>
                    
                    <div class="contact-item flex items-start">
                        <div class="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
                                <FontAwesomeIcon icon=  {faPhoneAlt}  className='text-green-600 text-xl'/>
                                
                        </div>
                        <div>
                            <h3 class="font-semibold text-gray-800">Téléphone</h3>
                            <p class="text-gray-600">+229 XX XX XX XX (Bénin)</p>
                        </div>
                    </div>
                    
                    <div class="contact-item flex items-start">
                        <div class="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                                <FontAwesomeIcon icon=  {faMapMarkedAlt}  className='text-purple-600 text-xl'/>
                                
                        </div>
                        <div>
                            <h3 class="font-semibold text-gray-800">Adresse</h3>
                            <p class="text-gray-600">Lokossa</p>
                            <p class="text-gray-600">Lokossa, Bénin</p>
                        </div>
                    </div>
                    
                    <div class="contact-item flex items-start">
                        <div class="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mr-4">
                        <FontAwesomeIcon icon=  {faClock}  className='text-amber-600 text-xl'/>
                        </div>
                        <div>
                            <h3 class="font-semibold text-gray-800">Horaires d'ouverture</h3>
                            <p class="text-gray-600">Lun - Ven: 8h00 - 18h00</p>
                            <p class="text-gray-600">Sam: 9h00 - 13h00</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div>
                    <h2 class="text-2xl font-bold text-gray-800 mb-6">Nos <span class="gradient-text">réseaux sociaux</span></h2>
                <br />
                    
                <p class="text-gray-600 mb-8">Suivez-nous sur les réseaux sociaux pour ne rien manquer de nos actualités, événements et formations.</p>
                <br />
                
                <div class="grid grid-cols-2 gap-4">
                    <a href="#" class="social-icon contact-card flex flex-col items-center justify-center p-6 bg-blue-50 rounded-xl border border-blue-100">
                        <div class="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                        <FontAwesomeIcon icon=  {faFacebook}  className='text-blue-600 text-2xl'/>
                                
                        </div>
                        <span class="font-medium text-gray-800">Facebook</span>
                        <span class="text-sm text-gray-500">@Coders4Africa</span>
                    </a>
                    
                    <a href="#" class="social-icon contact-card flex flex-col items-center justify-center p-6 bg-blue-50 rounded-xl border border-blue-100">
                        <div class="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                        <FontAwesomeIcon icon=  {faTwitter}  className='text-blue-600 text-2xl'/>
                                
                        </div>
                        <span class="font-medium text-gray-800">Twitter</span>
                        <span class="text-sm text-gray-500">@Coders4Africa</span>
                    </a>
                    
                    <a href="#" class="social-icon contact-card flex flex-col items-center justify-center p-6 bg-blue-50 rounded-xl border border-blue-100">
                        <div class="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                        <FontAwesomeIcon icon=  {faLinkedin}  className='text-blue-600 text-2xl'/>
                                
                        </div>
                        <span class="font-medium text-gray-800">LinkedIn</span>
                        <span class="text-sm text-gray-500">Coders4Africa</span>
                    </a>
                    

                   
                    
                    <a href="#" class="social-icon contact-card flex flex-col items-center justify-center p-6 bg-green-50 rounded-xl border border-green-100">
                        <div class="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mb-3">
                                <i class="fab fa-whatsapp text-green-600 text-2xl"></i>
                        <FontAwesomeIcon icon=  {faWhatsapp}  className='text-green -600 text-2xl'/>
                                
                        </div>
                        <span class="font-medium text-gray-800">WhatsApp</span>
                        <span class="text-sm text-gray-500">+229 XX XX XX XX</span>
                    </a>
                </div>
                </div>
                <br />
                
        </div>
        
        <div class="bg-gray-50 p-6 text-center border-t border-gray-200">
            <p class="text-gray-600">Vous avez des questions? N'hésitez pas à nous contacter par email ou par téléphone.</p>
        </div>
    </section></>
}