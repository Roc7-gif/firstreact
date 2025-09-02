import { MentorCards } from "./Cards";

export  function Mentors () {
    const MoentorsInfos = [
        {
          nom: "Dr. Kwame Mensah",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=774&q=80",
          description: "PhD en Machine Learning, 10+ ans d'expérience chez Google et Microsoft",
          role: "Expert en Intelligence Artificielle",
          links: [
            { linkname: "linkedin", link: "https://linkedin.com/in/kwamemensah" },
            { linkname: "twitter", link: "https://twitter.com/kwamemensah" },
            { linkname: "website", link: "https://kwamemensah.com" }
          ]
        },
        {
          nom: "Aisha Bello",
          image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=774&q=80",
          description: "CTO à TechGrowth Africa, spécialiste JavaScript et architectures cloud",
          role: "Développeuse Fullstack",
          links: [
            { linkname: "linkedin", link: "https://linkedin.com/in/aishabello" },
            { linkname: "twitter", link: "https://twitter.com/aishabello" },
            { linkname: "website", link: "https://aishabello.dev" }
          ]
        },
        {
          nom: "Sophie Nkrumah",
          image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=776&q=80",
          description: "Fondatrice de SecureAfrica, experte en sécurité des systèmes et réseaux",
          role: "Spécialiste Cybersecurity",
          links: [
            { linkname: "linkedin", link: "https://linkedin.com/in/sophienkrumah" },
            { linkname: "twitter", link: "https://twitter.com/sophienkrumah" },
            { linkname: "website", link: "https://secureafrica.org" }
          ]
        }
      ];
      

    return <>
         <div className="mb-20 relative top-40">
            <h3 className="text-2xl md:text-3xl font-bold text-center pb-10 text-gray-800">Vos <span className="text-blue-600">Mentors</span></h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {MoentorsInfos.map(({ nom, image, description, role, links }) => (
                    <MentorCards key={description+nom} nom={nom} image={image} description={description} role={role} links={links} />
                )
                       )}
            </div>
        </div>
        
    </> 
}