import { AppNav } from "../components/Nav.jsx"
import { Hero } from "../components/Hero.jsx"
import { Valeurs } from "../components/valeurs.jsx"
import { CallToAction } from "../components/CTA.jsx"
import { Temoignages } from "../components/Temoignages.jsx"
import { CounterImpact } from "../components/Counter.jsx"
import { Mentors } from "../components/Mentors.jsx"
import { AppFooter } from "../components/footer.jsx"
import { useEffect } from "react"
export function Home() {
    useEffect(() => {
        const checkFade  =  ()=> {
          const fadeElements = document.querySelectorAll('.fade-in');
          
          fadeElements.forEach(element => {
              const elementTop = element.getBoundingClientRect().top;
              const elementVisible = 150;
              
              if (elementTop < window.innerHeight - elementVisible) {
                  element.classList.add('visible');
              }
          });
            
      }
      
          window.addEventListener('scroll', checkFade);
        checkFade(); // Vérifier au chargement initial
        return () => {
          window.removeEventListener('scroll', checkFade);
            
        }
       
      } , [])
    return <>
        <AppNav />
        <Hero />
        <CallToAction />
        <Mentors/>
        <Valeurs />
        <CounterImpact />
        <Temoignages />
        <CallToAction />    
        <AppFooter />    
    
    </>
}