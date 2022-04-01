import "./Fade.css";
import {useState, useEffect} from "react";
 function FadeOut () {

     const [fadeProp, setFadeProp] = useState({
         fade: 'fade-in',
     })

     useEffect(() => {
         const timeout = setInterval(() => {
             if (fadeProp.fade === 'fade-in') {
                 setFadeProp({
                     fade: 'fade-out'
                 })
             }
         }, 1000);
         return () => clearInterval(timeout)
     }, [fadeProp])

     return (
         <>
             <h1 className={fadeProp.fade}>Casimiro Sotelo Montenegro</h1>
         </>
     );
 }

 export default FadeOut;