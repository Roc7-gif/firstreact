import { EventSection } from "../components/Events.jsx"
import { AppNav } from "../components/Nav.jsx"
import { AppFooter } from "../components/footer.jsx"
import { CallToAction } from "../components/CTA.jsx"
import { useEffect } from "react"
export function Events() {
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
        <EventSection />
        <CallToAction />
        
        <AppFooter />    
    
    </>
}