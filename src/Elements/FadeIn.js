import "./Fade.css";
import {useState, useEffect} from "react";
import {DropdownButton, SplitButton, Dropdown, ButtonGroup} from "react-bootstrap";
import EnglishHomePage from "../Pages/English/EnglishHomePage";

function FadeOut (props) {

    const [fadeProp, setFadeProp] = useState({
        fade: 'fade-out',
    })

    const [showEnglish, setShowEnglish] = useState({
            english: false,
    })

    const [showSpanish, setShowSpanish] = useState({
        english: false,
    })

    useEffect(() => {
        const timeout = setInterval(() => {
            if (fadeProp.fade === 'fade-out') {
                setFadeProp({
                    fade: 'fade-in'
                })
            }
        }, 2000);
        return () => clearInterval(timeout)
    }, [fadeProp])

    function handleEnglishClick() {
        setShowEnglish({
            english: true,
        })
    }

    function handleSpanishClick() {
        setShowSpanish({
            spanish: true,
        })
    }

    return (
        <div>
            {showEnglish.english ? <EnglishHomePage/> :
                <div className={fadeProp.fade}>
                    Please choose a language
                    <div>
                        {[DropdownButton].map((DropdownType, idx) => (
                            <DropdownType
                                as={ButtonGroup}
                                key={idx}
                                id={`dropdown-button-drop-${idx}`}
                                size="lg"
                                title="Language"
                            >
                                <Dropdown.Item eventKey="1" onClick={handleEnglishClick}>English</Dropdown.Item>
                                <Dropdown.Item eventKey="2">Spanish</Dropdown.Item>
                            </DropdownType>
                        ))}
                    </div>
                </div>}

        </div>
    );
}

export default FadeOut;