import YearNavigation from "../../Elements/YearNavigation";
import {useState} from "react";
import HeaderBar from "../../Elements/HeaderBar";
import About from "./About";
import SixtyFive from "./SixtyFive";
import SixtySix from "./SixtySix";
import SixtySeven from "./SixtySeven";
import "./SpanishHomePage.css";

function SpanishHomePage () {
    const [activeTab, setActiveTab] = useState({
        active: 'about',
    })

    function onSelect(selectedKey) {
        switch(selectedKey) {
            case "link-0":
                setActiveTab({
                    active: 'about',
                });
                break;
            case "link-1":
                setActiveTab({
                    active: 'sixtyfive',
                });
                break;
            case "link-2":
                setActiveTab({
                    active: 'sixtysix',
                });
                break;
            case "link-3":
                setActiveTab({
                    active: 'sixtyseven',
                });
                break;
        }

    }

    // switch statement based off:
    // https://stackoverflow.com/questions/46592833/how-to-use-switch-statement-inside-a-react-component
    return (
        <div>
            <div className="content d-flex flex-row justify-content-between">
                <div className="years">
                    <YearNavigation active={activeTab.active} onSelect={onSelect} language={"spanish"}/>
                </div>
                <div className="articles">
                    {(() => {
                        switch (activeTab.active) {
                            case 'about':
                                return <About />;
                            case 'sixtyfive':
                                return <SixtyFive />;
                            case 'sixtysix':
                                return <SixtySix />;
                            case 'sixtyseven':
                                return <SixtySeven />;
                        }
                    })()}
                </div>
            </div>
        </div>
    );
}

export default SpanishHomePage;