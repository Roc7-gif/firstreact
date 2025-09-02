import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { GalerieLighBoxCard } from "./Cards";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

export function LighBox({GalerieItems , setClickedMedia}) {
    const BoxRef = useRef(null)
    const CloseLightBox = () => {
        BoxRef.current.classList.remove('active');
        document.body.style.overflow = 'auto';
        setClickedMedia(0)
    }
    useEffect(() => {
        BoxRef.current.classList.add('active')
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && lightbox.classList.contains('active')) {
                lightbox.classList.remove('active');
                BoxRef.current.body.style.overflow = 'auto';
            }
        });
    })

    return <>
      <div ref={BoxRef} className=" z-200 lightbox fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
        <div className="lightbox-content max-w-4xl w-full max-h-full">
            <div className="relative">
                <button onClick={CloseLightBox}  className="cursor-pointer  absolute top-4 right-4 z-10 text-white text-2xl bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-70 transition-all">
                    <FontAwesomeIcon icon= {faTimes} />
                </button>
                <Swiper
      modules={[Pagination,Navigation]}
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true }}
    //   autoplay={{ delay: 5000 }}
      loop={true}
      className="swiper gallerySwiper"
    >
       {GalerieItems.map(({src , title , date , index ,type}) => (
                            <SwiperSlide key={index}>
                                                
                            <GalerieLighBoxCard type={type} key={index} src={src} title={title} date={date} />
                            </SwiperSlide>
                                
                            ))}
    </Swiper>
    
            </div>
        </div>
    </div>
    </>
}