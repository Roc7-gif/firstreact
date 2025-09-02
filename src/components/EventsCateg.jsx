import { useEffect, useState } from "react"

export function EventsCateg({setcategselcted}) {
    const EventCategs = [
        {
        categ : 'Tous'  
        },
        {
            categ : 'Formations'
        },
        {
            categ : 'Ateliers'
        },
        {
            categ: 'Hackathons'
        },
        {
            categ: 'Rencontres'
        },
    ]



    return <>
           <section className="mb-12  fade-in">
            <div className="flex flex-wrap justify-center gap-4">
               
                {EventCategs.map(({ categ ,} , index) => (
                    <EventButton setcategselcted= {setcategselcted} key={index} categ={categ} />
                ))}
                
            </div>
        </section>
    </>
}

function EventButton({ categ , setcategselcted }) {
    const handleCategClick = (e) => {
        const categories = document.querySelectorAll('.category-filter')
        categories.forEach((c) => {
            c.classList.remove('active')
        })
        e.target.classList.add('active')
        setcategselcted(e.target.dataset.categ)
    }
    return <>
     <button data-categ= {categ=='Tous' ? '': categ} onClick={handleCategClick} className={  (categ== 'Tous')?'category-filter cursor-pointer px-6 py-2 bg-white rounded-full font-medium shadow-sm active': "category-filter cursor-pointer px-6 py-2 bg-white rounded-full font-medium shadow-sm"}>
                    {categ}
        </button>
    </>
}