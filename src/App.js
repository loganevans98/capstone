import './App.css';
import './index.css';
import IntroPage from "./Pages/IntroPage";
import EnglishHomePage from "./Pages/English/EnglishHomePage";
import HeaderBar from "./Elements/HeaderBar";
import {useState} from "react";
import SpanishHomePage from "./Pages/Spanish/SpanishHomePage";

function App() {
    const [language, setLanguage] = useState("english");

    function chooseLanguage(target) {
        if(target === '1') {
            console.log(target);
            setLanguage("english");
        } else if (target === '2') {
            setLanguage("spanish");
        }
    }

    return (
        <div>
            <HeaderBar changeLanguage={chooseLanguage}/>
            {language === "english" ?
                <EnglishHomePage /> :
                <SpanishHomePage /> }
        </div>
    );
}

export default App;
