import { faBullseye, faGraduationCap, faHandshakeAngle, faLightbulb, faStar, faUser } from '@fortawesome/free-solid-svg-icons'
import { ValeurCard } from './Cards'

export function Valeurs() {
    const cardInfos = [
        {
          title: 'Innovation',
          content: 'Nous encourageons la créativité et l\'innovation technologique pour repousser les limites du possible.',
          icon: faLightbulb,
          bgColor: 'bg-blue-100',
          iconColor: 'text-blue-600',
        },
        {
          title: 'Collaboration',
          content: 'Nous croyons en la force du travail d\'équipe et de l\'intelligence collective pour atteindre nos objectifs.',
          icon: faUser,
          bgColor: 'bg-green-100',
          iconColor: 'text-green-600',
        },
        {
          title: 'Excellence',
          content: 'Nous visons l\'excellence dans tout ce que nous entreprenons, avec rigueur et professionnalisme.',
          icon: faStar,
          bgColor: 'bg-amber-100',
          iconColor: 'text-amber-600',
        },
        {
          title: 'Inclusion',
          content: 'Nous créons un environnement accueillant pour tous, sans barrières, où chaque voix compte.',
          icon: faHandshakeAngle,
          bgColor: 'bg-purple-100',
          iconColor: 'text-purple-600',
        },
        {
          title: 'Impact',
          content: 'Nous visons un impact positif et durable sur le développement numérique de l\'Afrique.',
          icon: faBullseye,
          bgColor: 'bg-red-100',
          iconColor: 'text-red-600',
        },
        {
          title: 'Apprentissage',
          content: 'Nous favorisons l\'apprentissage continu et le partage des connaissances au sein de notre communauté.',
          icon: faGraduationCap,
          bgColor: 'bg-indigo-100',
          iconColor: 'text-indigo-600',
        },
    ];
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateX(0)';
            }
        })
    })
  
      
     
    return (
      <>
      <section className="max-w-full relative top-40 w-full bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden relative top-10">
        <div className="text-center px-6 py-12 md:py-16 bg-gradient-to-r from-blue-600 to-green-500 text-white">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Nos Valeurs Fondamentales</h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">Les piliers qui guident notre communauté et notre engagement pour le numérique en Afrique</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 md:p-8">
                {cardInfos.map(({ title, content, icon, bgColor, iconColor }) => (
                    <ValeurCard observer = {observer} title={title} content={content} font={icon} bgColor={bgColor} iconColor={ iconColor} key={title} />
            ))}
            
           
        </div>
        
        <div className="px-6 pb-10 pt-4 text-center">
            <div className="mt-4 text-sm text-gray-500">— Équipe Coders4Africa — </div>
        </div>
        
        </section>
      <br />
      <br />
      </>
      

    )
}