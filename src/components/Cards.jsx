import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useRef, useState } from 'react'
import { faBriefcase, faPlayCircle, faStar, faUsers } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faLinkedin, faGithub, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Link } from 'react-router-dom';
// visible
export function ValeurCard({ title, content, font, bgColor, iconColor , observer }) {
    const fontClass = `${bgColor} ${iconColor}`.toString()
    // const { animated, setanimated } = useState(false)
    const ref  = useRef(null)
    useEffect(() => {
        ref.current.style.opacity = 0;
        ref.current.style.transform = 'translateX(95%)';
        ref.current.style.transition = 'opacity 1s linear , transform 1s linear';
        observer.observe(ref.current)
    })

    return (
        <div ref={ref}  className="bg-white rounded-xl shadow-md overflow-hidden card-hover border border-blue-100">
        <div className="p-6">
                <div className={"w-16 h-16 rounded-full  flex items-center justify-center mb-4 value-icon "+bgColor}>
                <FontAwesomeIcon icon = {font} className={fontClass}/>
                    
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
            <p className="text-gray-600">{content}</p>
        </div>
    </div>
    )
}

export function TemoignageCards({name , proffession ,  image , msg }) {
    const stars = []
    for (var  i = 1; i <= 5; i++){
        stars.push(i)
    }
    return <>
        <div className="swiper-slide  text-center justify-center">
            <div className="card shadow-xl p-8 mx-4  mx-auto md:w-200 inline-block">
                <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg">
                        <img src={ image } alt="Participant" className="w-full h-full object-cover"/>
                    </div>
                    <div className="ml-4">
                        <h4 className="font-bold text-lg">{name}</h4>
                        <p className="text-gray-600">{proffession}</p>
                    </div>
                </div>
                <div className="flex mb-4">
                    {stars.map(element => (
                        <FontAwesomeIcon icon={faStar } key = {element} className ='text-yellow-600' />
                    ) )}
                </div>
                <p className="text-gray-700 italic">"{msg}"</p>
            </div>
        </div>
    </>
}

export function CounterCard({ label, targetCount, sign, icon, Iconclass  , observer}) {
    const ref = useRef(null)
    useEffect(() => {
        const element = ref.current 
        observer.observe(element)

    })

    
    return <>
         <div className =" border-1  border-blue-300 stat-card community-card shadow-2xl  shadow-blue-100 rounded-2xl p-4 text-center">
                    <div className  ="relative inline-flex items-center justify-center mb-4">
                        <div className  ="absolute w-full h-full bg-primary/20 rounded-full pulse-ring"></div>
                <div className  ="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                <FontAwesomeIcon icon={icon } className ={Iconclass  } />                    
                        </div>
                    </div>
            <h4 className="font-bold text-gray-800 mb-2  "><span ref={ref} className="stat-number text-5xl" data-target={targetCount}>0</span><span className='text-5xl' >{ sign}</span></h4>
                    <p className  ="text-gray-600 text-1xl">{label}</p>
                </div>
                
    </>

}
export function MentorCards({ nom, image, description, role,  links }) {
    const Icons = {
        'facebook': <FontAwesomeIcon icon = {faFacebook}     className= 'text-white' />,
        'twitter': <FontAwesomeIcon icon = { faTwitter}    className= 'text-white' />, 
        'github': <FontAwesomeIcon icon = {faGithub }   className= 'text-white' />,  
        'linkedin': <FontAwesomeIcon icon = {faLinkedin}   className= 'text-white' />,  
        'whatsapp': <FontAwesomeIcon icon = {faWhatsapp}   className= 'text-white' />,  
        'website': <FontAwesomeIcon icon = {faBriefcase}   className= 'text-white' />,  
    }
    const ref = useRef(null)
    // useEffect(() => {
    //     const checkFade = () => {
    //         const element = ref.current
    //         if (element) {
    //             const elementTop = element.getBoundingClientRect().top;
            
    //             const elementVisible = 150;
                    
    //             if (elementTop < window.innerHeight - elementVisible) {
    //                 element.classList.add('visible');
    //             }
    //         }
    //     }
    //     window.addEventListener('scroll', checkFade);
    //     return () => {
    //         window.removeEventListener('scroll' , checkFade)
    //     }
       
    // })  
    return (
      <div ref = {ref} className="mentor-card community-card rounded-2xl  fade-in cursor-pointer">
                    <div className="h-72 overflow-hidden">
                        <img src={image} alt="Mentor" className="w-full h-full object-cover mentor-image"/>
                    </div>
                    <div className="mentor-overlay  text-white">
                        <h4 className="font-bold text-xl">{nom}</h4>
                        <p className="text-green-600">{role}</p>
                <p className="mt-2">{ description }</p>
                <div className="flex mt-4">
                    {links.map(({ linkname, link }) => (
                         <a key={linkname} href={link} className=" w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-2 hover:bg-white/20">
                         {Icons[linkname]}
                     </a>
                    ))}
                        </div>
                    </div>
                    <div className="p-6 bg-white">
                        <h4 className="font-bold text-xl">{nom}</h4>
                        <p className="text-blue-600 font-medium">{role}</p>
                    </div>
        </div>
    )
}

export function EventCard({ id, title, date, image, excerpt, placesRestantes, type }) {
    const ref = useRef(null)
    useEffect(() => { 
      const fade = ()=> {
        ref.current.classList.add('visible')
        }
        setTimeout(fade, 200)
        clearTimeout(fade, 200)

    })
       
    return <>
    
    <div ref={ref} className="event-card  bg-white rounded-2xl overflow-hidden  fade-in">
                       <div className="h-48 overflow-hidden">
                           <img src={image} alt="Formation Web" className="w-full h-full object-cover event-image"/>
                       </div>
                       <div className="p-6">
                           <div className="event-date inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
                               {date}
                           </div>
                           <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
                           <p className="text-gray-600 mb-4">{excerpt}</p>
                           <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm"> <FontAwesomeIcon icon={faUsers} />{placesRestantes} {(type == 'hackathon') ?' équipes max' : 'places restantes' }</span>
                               <Link to ={ `/details/${id}` }className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors event-details-btn" data-event="1">
                                   Détails
                               </Link>
                           </div>
                       </div>
                   </div>
    </>
}

export function GalerieCard({ id , image , title , date , type ,setclikedmedia}) {
    
    const VideoRef = useRef(null)
    const ctxRef = useRef(null) 
    const CardRef = useRef(null) 
    useEffect(() => {

        if (type === "video") {
            const video = VideoRef.current;
            const canvas = ctxRef.current;

            const setFrame = () => {
                video.currentTime = 0.5;
            };

            const draw = () => {
                const ctx = canvas.getContext("2d");
                // On définit la taille du canvas selon la vidéo
                canvas.width = video.videoWidth;
                canvas.height = video.videoHeight;
                ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
            };
            video.addEventListener("loadeddata", setFrame);
            video.addEventListener("seeked", draw);

            return () => {
                video.removeEventListener("loadeddata", setFrame);
                video.removeEventListener("seeked", draw);
            };
        }
    }, [type]);

    const handleCliquedOn = () => {
        const element = CardRef.current
        setclikedmedia(element.dataset.id)
    }
    return (
        <div ref={CardRef} onClick={handleCliquedOn} className="media-item rounded-xl overflow-hidden h-40  fade-in relative" data-media-type={type} data-id={id}>
            {type === "image" && <img src={image} alt={title} className="w-full h-full object-cover" />}
            {type === "video" && (
                <>
                    <video ref={VideoRef} src={image} className="hidden" />
                    <canvas ref={ctxRef} className="w-full h-full object-cover "></canvas>
                    <FontAwesomeIcon icon={faPlayCircle} className="absolute text-white opacity-70 text-4xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                </>
            )}
            <div className="media-overlay">
                <h3 className="font-bold text-sm">{title}</h3>
                <p className="text-xs">{date}</p>
            </div>
        </div>
    );
}
// visible

export function GalerieLighBoxCard({src , title , date ,type }) {
    const isVideo  = type =='video'
    const [playing , setplaying]  = useState(false)
   
    return <>
    <div className="swiper-slide">
            {!isVideo &&
                <div className="bg-black rounded-lg overflow-hidden">
                <img src={src} alt="Atelier de développement web" className="w-full h-96 object-cover" />
                <div className="p-4 text-white">
                    <h3 className="text-xl font-bold">{title}</h3>
                    <p className="text-gray-300">{date}</p>
                </div>
            </div>}
            {isVideo &&
                <div className="w-full h-96 bg-gray-900 flex items-center justify-center">
                    {playing && <>
                        <video  className='w-full y-full -200' autoPlay={true} controls={true}>
                            <source src={src} />
                    </video>
                    </>}
                                    { !playing&&<div className="text-center">
                                        <h3 className="text-xl font-bold text-white">{title}</h3>
                                        <p className="text-blue-300">{date}</p>
                        <button onClick={() => {  setplaying(true) }} className="mt-4 px-6 py-2 text-5xl cursor-pointer text-white rounded-lg hover:bg-green-600">
                                            <FontAwesomeIcon icon  ={faPlayCircle} />
                                        </button>
                                    </div>}
                                </div>}
        </div></>
}