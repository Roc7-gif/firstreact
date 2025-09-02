export function Apropos() {
    
// fade
    return <>
        <main className="container max-w-full m-auto w-full px-5 py-15 overflow-hidden">
            
        <section className="text-center mb-16 fade-in  ">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">À propos de <span className="gradient-text">Coders4Africa</span></h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Découvrez notre histoire, notre mission et notre vision pour le développement numérique de l'Afrique.</p>
        </section>
        
        <section className="mb-20 relative">
            <div className="absolute top-0 right-0 w-72 h-72 bg-blue-200/30 rounded-full -translate-y-1/3 translate-x-1/3"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                <div className="fade-in ">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Notre <span className="text-primary">historique</span> et contexte de création</h2>
                    <p className="text-gray-600 mb-4">Fondé en 2020, Coders4Africa est né d'un constat simple : le continent africain regorge de talents numériques immenses mais souvent non exploités par manque d'opportunités et d'accompagnement.</p>
                    <p className="text-gray-600 mb-4">Face à la révolution numérique mondiale et aux défis spécifiques du continent, Bénilab Services a décidé de créer un programme dédié à la formation et à l'accompagnement des futurs talents du digital africain.</p>
                    <p className="text-gray-600">Aujourd'hui, Coders4Africa c'est une communauté de plus de 1500 membres à travers 24 pays africains, des formations certifiantes, et un réseau de mentors experts engagés pour le développement numérique du continent.</p>
                </div>
                
                <div className="fade-in ">
                    <div className="floating">
                        <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Équipe Coders4Africa" className="rounded-2xl shadow-xl"/>
                    </div>
                </div>
            </div>
            
            <div className="mt-16 relative">
                <h3 className="text-xl font-bold text-center text-gray-800 mb-12">Notre <span className="text-accent">évolution</span> en quelques dates clés</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="timeline-item">
                        <div className="about-card bg-white p-6 rounded-2xl">
                            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">2020</span>
                            <h4 className="text-lg font-bold text-gray-800 mb-2">Lancement officiel</h4>
                            <p className="text-gray-600">Création de Coders4Africa avec le premier programme de formation de développeurs web à Cotonou.</p>
                        </div>
                    </div>
                    
                    <div className="timeline-item">
                        <div className="about-card bg-white p-6 rounded-2xl">
                            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">2021</span>
                            <h4 className="text-lg font-bold text-gray-800 mb-2">Expansion régionale</h4>
                            <p className="text-gray-600">Ouverture de centres de formation dans 5 pays d'Afrique de l'Ouest et lancement des programmes data science.</p>
                        </div>
                    </div>
                    
                    <div className="timeline-item">
                        <div className="about-card bg-white p-6 rounded-2xl">
                            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">2022</span>
                            <h4 className="text-lg font-bold text-gray-800 mb-2">Partenariats internationaux</h4>
                            <p className="text-gray-600">Collaboration avec des entreprises tech internationales et lancement de programmes de mentorat.</p>
                        </div>
                    </div>
                    
                    <div className="timeline-item">
                        <div className="about-card bg-white p-6 rounded-2xl">
                            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">2023</span>
                            <h4 className="text-lg font-bold text-gray-800 mb-2">Communauté et impact</h4>
                            <p className="text-gray-600">Atteinte de 1500+ membres et 85% de taux d'insertion professionnelle pour nos apprenants.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section className="mb-20 relative">
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-green-200/30 rounded-full -translate-x-1/3 translate-y-1/3"></div>
            
            <div className="text-center mb-16 relative z-10">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Notre <span className="text-accent">mission</span> et notre <span className="text-primary">vision</span></h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">Découvrez les valeurs qui nous animent et les objectifs qui nous guident.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                <div className="mission-card about-card bg-white p-8 rounded-2xl fade-in ">
                    <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6 mission-icon">
                        <i className="fas fa-bullseye text-blue-600 text-2xl"></i>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Notre mission</h3>
                    <p className="text-gray-600 mb-4">Former et accompagner la prochaine génération de talents numériques africains en leur offrant des compétences techniques de pointe, un mentorat personnalisé et un accès à des opportunités professionnelles concrètes.</p>
                    <ul className="space-y-2">
                        <li className="flex items-start">
                            <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                            <span className="text-gray-600">Démocratiser l'accès à une éducation tech de qualité</span>
                        </li>
                        <li className="flex items-start">
                            <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                            <span className="text-gray-600">Créer des ponts entre formation et emploi</span>
                        </li>
                        <li className="flex items-start">
                            <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                            <span className="text-gray-600">Favoriser l'innovation et l'entreprenariat numérique</span>
                        </li>
                    </ul>
                </div>
                
                <div className="mission-card about-card bg-white p-8 rounded-2xl fade-in ">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6 mission-icon">
                        <i className="fas fa-eye text-green-600 text-2xl"></i>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Notre vision</h3>
                    <p className="text-gray-600 mb-4">Devenir le principal catalyseur de la transformation numérique en Afrique en formant une communauté de 100 000 développeurs et tech leaders d'ici 2030, qui contribueront activement à l'économie numérique du continent.</p>
                    <ul className="space-y-2">
                        <li className="flex items-start">
                            <i className="fas fa-star text-yellow-500 mt-1 mr-2"></i>
                            <span className="text-gray-600">Une Afrique leader dans l'innovation technologique mondiale</span>
                        </li>
                        <li className="flex items-start">
                            <i className="fas fa-star text-yellow-500 mt-1 mr-2"></i>
                            <span className="text-gray-600">Un écosystème numérique inclusif et florissant</span>
                        </li>
                        <li className="flex items-start">
                            <i className="fas fa-star text-yellow-500 mt-1 mr-2"></i>
                            <span className="text-gray-600">Des solutions tech africaines pour les défis africains</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        
        <section className="mb-20 relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200/30 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="bg-gradient-to-r from-blue-600 to-green-500 text-white rounded-2xl p-8 md:p-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
                
                <div className="relative z-10">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">Notre lien avec <span className="text-blue-200">Bénilab Services</span></h2>
                        <p className="text-lg opacity-90 max-w-3xl mx-auto">Coders4Africa est fièrement porté par Bénilab Services, un acteur engagé dans le développement économique et numérique de l'Afrique.</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div>
                            <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Bénilab Services" className="rounded-2xl shadow-lg"/>
                        </div>
                        
                        <div>
                            <p className="mb-4 opacity-90">Bénilab Services, cabinet de conseil et d'innovation fondé en 2015, œuvre pour la transformation digitale des entreprises et institutions africaines. Fort de son expertise et de son réseau, Bénilab Services a lancé Coders4Africa pour répondre au besoin crucial de compétences numériques sur le continent.</p>
                            <p className="mb-6 opacity-90">Ce programme s'inscrit dans la vision plus large de Bénilab Services : construire un écosystème numérique africain robuste, innovant et inclusif, capable de répondre aux défis locaux et compétitif à l'échelle internationale.</p>
                            <a href="#" className="inline-flex items-center px-5 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition-colors">
                                <span>Découvrir Bénilab Services</span>
                                <i className="fas fa-arrow-right ml-2"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
            </main>
</>
}