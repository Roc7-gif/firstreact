import { TemoignageCards } from "./Cards"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

export function Temoignages() {
  
  const Testimo_Infos = [
    {
      name: 'Amara Diallo',
      profession: 'Développeuse Fullstack',
      image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=500&q=80',
      msg: "Grâce à Coders4Africa, j'ai pu acquérir des compétences techniques solides et rejoindre une communauté incroyable. Aujourd'hui, je travaille pour une entreprise internationale en tant que développeuse fullstack!"
    },
    {
      name: 'Chijioke Okonkwo',
      profession: 'Data Scientist',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=500&q=80',
      msg: "Le programme de mentorat de Coders4Africa a transformé ma carrière. Mon mentor m'a guidé pas à pas et m'a aidé à décrocher mon premier emploi en data science. Je recommande vivement!"
    },
    {
      name: 'Fatou Ndiaye',
      profession: 'UX/UI Designer',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=80',
      msg: "Les ateliers pratiques de Coders4Africa m'ont permis de perfectionner mes compétences en design. Aujourd'hui, je travaille en freelance pour des clients internationaux grâce à la visibilité que m'a apporté la communauté."
    }
  ]  
  return <>
    <div className="  top-30 m-0 pb-20  pt-20   overflow-hidden relative">
            <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200/30 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-200/30 rounded-full translate-x-1/3 translate-y-1/3"></div>
            
            <h3 className="text-3xl pb-10 md:text-3xl font-bold text-center mb-12 text-gray-800">Témoignages de <span className="text-primary">participants</span></h3>
            
            <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
      loop={true}
      className="testimonialSwiper relative z-10"
    >
      {Testimo_Infos.map(({ name, proffession, image, msg }) => (
        <SwiperSlide key={msg}>
          <TemoignageCards
            name={name}
            proffession={proffession}
            image={image}
            msg={msg}
          />
          <br />
          <br />
        </SwiperSlide>
      ))}
    </Swiper>

        </div>
  </>
}