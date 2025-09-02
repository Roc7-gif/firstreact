import { Link } from "react-router-dom";
import { EventsCateg } from "./EventsCateg";
import { EventCard } from "./Cards";
import { Galerie } from "./galerie";
import { eventDetails as EventsInfos} from "../other/events";
import {  useMemo, useState } from "react";
export function EventSection()
{
   
        const [categselected, setcategselcted] = useState('');

      const selectedevents = useMemo(() => {
        return categselected !== ''
            ? EventsInfos.filter((ev) => ev.type.toLowerCase() === categselected.toLocaleLowerCase())
            : EventsInfos;
      }, [categselected, EventsInfos]);
    


    return <>
          <section className="text-center mt-20 mb-20 fade-in mt-0  ">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Nos <span className="gradient-text">Événements</span></h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Découvrez nos prochains ateliers, formations et rencontres. Rejoignez notre communauté pour ne rien manquer !</p>
        </section>
        <EventsCateg setcategselcted = {setcategselcted} />
        <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">Événements à <span className="text-primary">venir</span></h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                {selectedevents.map(({ id, title, date, image, excerpt, placesRestantes, type }) => ( 
                    <EventCard  key={id} id= {id} title={title}  date={date} image={image} placesRestantes={placesRestantes} excerpt={excerpt} type={type}  />
                      
                    ))}
            </div>
      </section>
      <Galerie />



    
    </>
}