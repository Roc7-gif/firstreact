import { useEffect } from "react"
import { AppNav } from "../components/Nav.jsx"
import { ContactForm } from "../components/contactForm.jsx"
import { AppFooter } from "../components/footer.jsx"
import { ContactList } from "../components/contacts_list.jsx"
export function Contact() {
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
      <div className="lg:flex  p-2 gap-4">
      <ContactList/>
        <ContactForm /> 
      </div>
        <AppFooter/>
    
    </>
}