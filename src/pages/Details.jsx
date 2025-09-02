import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useParams } from "react-router-dom";
import { AppNav } from "../components/Nav";
import { AppFooter } from "../components/footer";
import { eventDetails } from "../other/events";
import { faCalendarAlt, faCalendarPlus, faClock, faLink, faMapMarkerAlt, faTicketAlt, faTrophy, faUsers, faWallet } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';
export function Details() {
    const { id } = useParams()
    const object = eventDetails.find(element => element.id == id)
    const [linkcopy ,setlinkcopy ] = useState(false)
    const handlelinkcopyclick = () => {
            const url = window.location.href; // récupère l’URL courante
            navigator.clipboard.writeText(url)
                .then(() => {
                    setlinkcopy(true)
                    setTimeout(() => {
                    setlinkcopy(false)
                        
                    }, 6000);
                })
                .catch(err => {
                    setlinkcopy(false)

                });
    }
    return <>
        <AppNav/>
      <main>
        <section style={{backgroundImage : `url('${ object && object.image}')`}} className="event-header  text-white py-20">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl">
                    <div className="inline-block px-4 py-1 bg-blue-600 rounded-full text-sm font-medium mb-4">
                            <FontAwesomeIcon icon={faCalendarAlt}className= ' mr-2'/> { object && object.date}
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">{object && object.title }</h1>
                    <p className="text-xl mb-6">{object && object.excerpt }</p>
                    <div className="flex flex-wrap gap-4">
                       
                        <div className="flex items-center">
                                <FontAwesomeIcon icon={faClock}className = "mr-2"/>
                                <span>{object && object.time }</span>
                        </div>
                        <div className="flex items-center">
                                <FontAwesomeIcon icon={faUsers} className = " mr-2"/>
                            <span>{object && object.maxTeams } équipes maximum</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                        <section className="detail-card bg-white rounded-2xl p-8 mb-8">
                            <h2 className='text-3xl font-medium  py-3 gradient-text'>Description</h2>
                            <p className='text-justify'>
                            {object && object.description }
                   </p>
                        
                        <h3 className="text-xl font-bold text-gray-800 mb-4 py-2 " >Thématiques</h3>
                        <div className="flex flex-wrap gap-3 mb-6">
                            <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Santé digitale</span>
                            <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">AgriTech</span>
                            <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">EdTech</span>
                            <span className="px-3 py-1 bg-yellow-100 text-yellow-600 rounded-full text-sm">FinTech</span>
                            <span className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm">E-commerce</span>
                        </div>
                    </section>
                    
             
                    <section className="detail-card bg-white rounded-2xl p-8 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Intervenants et <span className="text-accent">mentors</span></h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {object && object.speakers.map((speaker, index) => (
                              <div key={index} className="speaker-card bg-gray-50 rounded-xl p-6 flex items-start">
                              <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                                  <img src= {object &&  speaker.image} alt="Fatou Ndiaye" className="w-full h-full"/>
                              </div>
                              <div>
                                            <h3 className="font-bold text-gray-800"> {object &&  speaker.name}</h3>
                                  <p className="text-accent text-sm mb-2">{object &&  speaker.role}</p>
                                  <p className="text-gray-600 text-sm">{object &&  speaker.bio}</p>
                              </div>
                          </div>
                        )) }
                            
                          
                        </div>
                    </section>
                </div>
                
                <div className="lg:col-span-1">
                    <div className="detail-card bg-white rounded-2xl p-6 sticky top-24 mb-8">
                        <div className="text-center mb-6">
                            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                                    <FontAwesomeIcon icon={faTicketAlt} className  = "text-blue-600 text-2xl"/>
                            </div>
                            <h2 className="text-xl font-bold text-gray-800 mb-2">Resume de l'évenement</h2>
                            {/* <p className="text-gray-600">Inscription gratuite mais places limitées</p> */}
                        </div>
                        
                        {/* <div className="bg-blue-50 rounded-lg p-4 mb-6">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-gray-600">Places disponibles</span>
                                <span className="font-bold text-blue-600">{object && object.registration.availableSeats}/{object &&  object.registration.totalSeats}</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                                <div className="bg-blue-600 h-2 rounded-full" style={{width : '53%'}}></div>
                            </div>
                        </div> */}
                        
                        {/* <button className="register-btn w-full bg-gradient-to-r from-blue-600 to-green-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 mb-4">
                            S'inscrire maintenant
                        </button> */}
                
                        
                        <div className="space-y-3">
                            <div className="flex items-center">
                                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                                        <FontAwesomeIcon icon={faWallet} className = "text-blue-600"/>
                                </div>
                                <span className="text-gray-600">{object && object.registration.price}</span>
                            </div>
                            
                            <div className="flex items-center">
                                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
                                        <FontAwesomeIcon icon={faClock} className =  "text-green-600"/>
                                </div>
                                    <span className="text-gray-600">{object && object.registration.duration}</span>
                            </div>
                            
                            <div className="flex items-center">
                                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                                        <FontAwesomeIcon icon={faUsers} className  = "text-purple-600"/>
                                </div>
                                <span className="text-gray-600">Équipes de {object && object.registration.teamSize} personnes</span>
                            </div>
                            
                            <div className="flex items-center">
                                <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center mr-3">
                                        <FontAwesomeIcon icon={faTrophy} className = "text-amber-600"/>
                                </div>
                                <span className="text-gray-600">Prix: {object && object.registration.reward} FCFA</span>
                                </div>
                                <div className=" bg-white rounded-2xl p-6 mb-8">            
                        <div className="space-y-2">
                            <p className="text-gray-800 font-medium">Centre d'Innovation Technologique</p>
                            <p className="text-gray-600">Boulevard de l'Innovation, Plateau</p>
                            <p className="text-gray-600">Abidjan, Côte d'Ivoire</p>
                        </div>
                        
                    </div>
                                    <div onClick={handlelinkcopyclick} className="flex space-x-3 cursor-pointer">
                                <a   className="w-15 h-15 rounded-full bg-gray-600 flex items-center justify-center text-white">
                                   {!linkcopy? <FontAwesomeIcon icon={faLink} /> : <span className=' w-full font-bold inline-block m-auto px-2'>Copié </span>}
                                 </a>
                                 <div className='h-15 py-4'>
                                    Partager l'<span className="text-green-600">événement </span>
                                 </div>
                        </div>
                        </div>
                    </div>
                    
               
                    
                   
                    </div>
                  
            </div>
        </div>
        </main>
        
        <AppFooter/>


    </>
}