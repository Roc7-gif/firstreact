import { useEffect, useRef } from "react"
 import { mentorsDetails } from "../../other/mentors"
export function Admin() {
     const ThematiqueRef = useRef(null )

    const addtheme = () => {
        const inputForTheme = document.getElementById('customTheme')
        const theme = inputForTheme.value.trim()
        if (theme) {
                        
            const themeLabel = document.createElement('label');
            themeLabel.className = 'theme-tag flex items-center';
            themeLabel.innerHTML = `
                <input type="checkbox" name="themes" value="${theme}" class="mr-2">
                <span class="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">${theme}</span>
            `;
            
            ThematiqueRef.current.appendChild(themeLabel);
            inputForTheme.value = '';
        }
      }

    return <>
     <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Créer un nouvel <span className="gradient-text">événement</span></h1>
            <p className="text-lg text-gray-600">Remplissez le formulaire ci-dessous pour ajouter un nouvel événement à la plateforme Coders4Africa</p>
        </div>
        
        <form id="eventForm" className="-container bg-white rounded-2xl p-6 md:p-8">
            <div className="mb-10">
                <h2 className="text-xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">Informations de base</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="title" className="block text-gray-700 mb-2">Titre de l'événement *</label>
                        <input type="text" id="title" name="title" required className="-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" placeholder="Ex: Hackathon Innovation Africaine"/>
                    </div>
                        <div>
                        <label htmlFor="type" className="block text-gray-700 mb-2">Type d'événement *</label>
                        <select id="type" name="type" required className="-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
                                <optgroup label="Sé lectionner le type ">
                                <option value="hackathons">Hackathon</option>
                            <option value="ateliers">Atelier</option>
                            <option value="formations">Formation</option>
                            <option value="conferences">Conférence</option>
                            <option value="rencontres">Rencontre</option>
                            </optgroup>
                            </select>
                    </div>
                       
                    
                    <div>
                        <label htmlFor="date" className="block text-gray-700 mb-2">Date *</label>
                        <input type="date" id="date" name="date" required className="-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"/>
                    </div>
                    
                    <div>
                        <label htmlFor="time" className="block text-gray-700 mb-2">Heure *</label>
                        <input type="time" id="time" name="time" required className="-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"/>
                    </div>
            </div>
            </div>
                
            <div className="mt-6">
                <label htmlFor="excerpt" className="block text-gray-700 mb-2">Résumé court *</label>
                <input type="text" id="excerpt" name="excerpt" required className="-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" placeholder="Description concise de l'événement"/>
            </div>
            
            <div className="mt-6">
                <label htmlFor="description" className="block text-gray-700 mb-2">Description détaillée *</label>
                <textarea id="description" name="description" rows="4" required className="-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" placeholder="Décrivez en détail l'événement, ses objectifs, etc."></textarea>
            </div>
            
                <div className="mt-6">
                    <label htmlFor="image" className="block text-gray-700 mb-2">Image de l'événement (URL) *</label>
                    <input type="url" id="image" name="image" required className="-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" placeholder="https://exemple.com/image.jpg"/>
                </div>
            
            <div className="mb-10">
                <h2 className="text-xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">Thématiques</h2>
                
                <div className="mb-4">
                    <p className="text-gray-700 mb-3">Sélectionnez les thématiques de l'événement *</p>
                    <div ref={ThematiqueRef} className="flex flex-wrap gap-3">
                        <label className="theme-tag flex items-center">
                            <input type="checkbox" name="themes" value="Santé digitale" className="mr-2"/>
                            <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Santé digitale</span>
                        </label>
                        
                        <label className="theme-tag flex items-center">
                            <input type="checkbox" name="themes" value="AgriTech" className="mr-2"/>
                            <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">AgriTech</span>
                        </label>
                        
                        <label className="theme-tag flex items-center">
                            <input type="checkbox" name="themes" value="EdTech" className="mr-2"/>
                            <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">EdTech</span>
                        </label>
                        
                        <label className="theme-tag flex items-center">
                            <input type="checkbox" name="themes" value="FinTech" className="mr-2"/>
                            <span className="px-3 py-1 bg-yellow-100 text-yellow-600 rounded-full text-sm">FinTech</span>
                        </label>
                        
                        <label className="theme-tag flex items-center">
                            <input type="checkbox" name="themes" value="E-commerce" className="mr-2"/>
                            <span className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm">E-commerce</span>
                        </label>
                    </div>
                </div>
                
                <div>
                    <label htmlFor="customTheme" className="block text-gray-700 mb-2">Ajouter une thématique personnalisée</label>
                    <div className="flex gap-3">
                        <input type="text" id="customTheme" className="-input flex-grow px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" placeholder="Nouvelle thématique"/>
                        <button type="button" id="addThemeBtn" onClick={addtheme} className="px-4 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors">Ajouter</button>
                    </div>
                </div>
            </div>
            
            <div className="mb-10">
                <h2 className="text-xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">Informations d'inscription</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    
                    <div>
                        <label htmlFor="price" className="block text-gray-700 mb-2">Prix *</label>
                        <input type="text" id="price" name="price" required className="-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" placeholder="Ex: Gratuit ou 50 000 FCFA"/>
                    </div>
                    
                    <div>
                        <label htmlFor="duration" className="block text-gray-700 mb-2">Durée *</label>
                        <input type="text" id="duration" name="duration" required className="-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" placeholder="Ex: 2 jours ou 3 heures"/>
                    </div>
                    
                    <div>
                        <label htmlFor="reward" className="block text-gray-700 mb-2">Récompense</label>
                        <input type="text" id="reward" name="reward" className="-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" placeholder="Ex: 5 000 000 FCFA (laisser vide si non applicable)"/>
                    </div>
                </div>
            </div>
            <div>
            <div class="max-w-2xl mx-auto bg-white shadow-lg rounded-2xl p-6 space-y-4">
                <h2 class="text-xl font-semibold text-gray-800 mb-4">Sélectionnez les mentors</h2>

                { mentorsDetails.map((mentor , index)=>( <label class="flex items-center space-x-4 p-3 border rounded-xl hover:bg-gray-50 cursor-pointer">
                    <input type="checkbox" class="w-5 h-5 text-blue-500 border-gray-300 rounded focus:ring-blue-400"/>
                    <img src={mentor.image} alt="mentor" class="w-12 h-12 rounded-full object-cover shadow-md"/>
                    <div>
                    <p class="text-gray-800 font-medium">{mentor.name}</p>
                    <p class="text-gray-500 text-sm">{mentor.role}</p>
                    <p class="text-gray-500 text-sm">{mentor.bio}</p>
                    </div>
                </label>))}

                
                </div>

                </div>
            <div className="mb-10">
                <h2 className="text-xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">Intervenants</h2>
                
                <div id="speakersContainer" className="space-y-4 mb-6">
                    <div className="speaker-card bg-gray-50 rounded-xl p-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                            <div>
                                <label className="block text-gray-700 mb-2">Nom de l'intervenant *</label>
                                <input type="text" name="speakerName" required className="-input w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" placeholder="Ex: Dr. Kwame Mensah"/>
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-2">Rôle *</label>
                                <input type="text" name="speakerRole" required class="-input w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" placeholder="Ex: Expert en Intelligence Artificielle"/>
                            </div>
                            <div>
                                <label class="block text-gray-700 mb-2">Photo (URL)</label>
                                <input type="url" name="speakerImage" class="-input w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" placeholder="https://exemple.com/photo.jpg"/>
                            </div>
                        </div>
                        <div>
                            <label class="block text-gray-700 mb-2">Biographie *</label>
                            <textarea name="speakerBio" required class="-input w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" placeholder="Brève description de l'intervenant" rows="2"></textarea>
                        </div>
                        <div class="mt-3 flex justify-end">
                            <button type="button" class="remove-speaker text-red-600 hover:text-red-800">
                                <i class="fas fa-trash-alt mr-1"></i> Supprimer
                            </button>
                        </div>
                    </div>
                </div>
                
                <button type="button" id="addSpeakerBtn" class="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors">
                    <i class="fas fa-plus mr-2"></i> Ajouter un intervenant
                </button>
            </div>
            
            <div class="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
                <button type="submit" class="submit-btn flex-1 bg-gradient-to-r from-blue-600 to-green-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                    Créer l'événement
                </button>
                <button type="reset" class="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                    Réinitialiser
                </button>
                <button type="button" id="previewBtn" class="flex-1 border border-blue-600 text-blue-600 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                    Aperçu
                </button>
             </div>
            </form>
            </div>
            
  
  
        {/* <div id="previewModal" class="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4 hidden">
        <div class="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div class="p-6 border-b border-gray-200 flex justify-between items-center">
                <h3 class="text-xl font-bold text-gray-800">Aperçu de l'événement</h3>
                <button class="text-gray-500 hover:text-gray-700" id="closePreview">
                    <i class="fas fa-times text-xl"></i>
                </button>
            </div>
            <div class="p-6" id="previewContent">
            </div>
        </div>
    </div> */}
    </>

}