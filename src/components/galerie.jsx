import { useState } from "react";
import { GalerieCard } from "./Cards";
import { LighBox } from "./GalerieLigntBox";

export function Galerie() {
    const mediaItems = [
        {
            index: 10,
            type: "image",
            title: "Atelier de développement web",
            src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            date: "Septembre 2023"
        },
        {
            index: 1,
            type: "image",
            title: "Formation Data Science",
            src: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            date: "Août 2023"
        },
        {
            index: 2,
            type: "image",
            title: "Hackathon Innovation",
            src: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
            date: "Juillet 2023"
        },
        {
            index: 3,
            type: "image",
            title: "Cérémonie de remise de diplômes",
            src: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            date: "Juin 2023"
        },
        {
            index: 4,
            type: "image",
            title: "Conférence sur l'IA",
            src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            date: "Mai 2023"
        },
        {
            index: 5,
            type: "image",
            title: "Workshop UX/UI Design",
            src: "https://images.unsplash.com/photo-1535016120720-40c646be5580?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            date: "Avril 2023"
        },
        {
            index: 6,
            type: "video",
            title: "Interview des participants",
            src: 'src/assets/video/4.webm', // pas d'image, c'est une vidéo
            date: "Mars 2023"
        },
        {
            index: 11,
            type: "video",
            title: "Formation Interview des paricipants",
            src: 'https://androcrea.pythonanywhere.com/media/logo.png', // pas d'image, c'est une vidéo
            date: "Mars 2023"
        },
        {
            index: 7,
            type: "image",
            title: "Networking après formation",
            src: "https://androcrea.pythonanywhere.com/media/logo.png",
            date: "Février 2023"
        }
    ];
   
    const [clickedmedia, setClickedMedia] = useState(0);

    // Déclare avec let pour pouvoir réassigner
    let filteredMedia = [];
    
    if (clickedmedia !== 0) {
        const clickedMediaInfo = mediaItems.find(val => val.index == clickedmedia);
        
        if (clickedMediaInfo) {
            filteredMedia = mediaItems.filter(val => val.title.includes(clickedMediaInfo.title.slice(0,8)));

        }

    }
    
    return <>
         <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">Galerie des <span className="text-green-600">événements passés</span></h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {mediaItems.map(({ index, type, title, src, date }) =>  ( 
                <GalerieCard id = {index} setclikedmedia = {setClickedMedia} key={index} type={ type } image={src} date={date} title={ title}/>

          ))}
                </div>
        </section>
        
        {(clickedmedia && filteredMedia)? <LighBox GalerieItems={ filteredMedia}  setClickedMedia={setClickedMedia}    /> : ''}
    </>
}