import './IntroPage.css';
import React from "react";
import FadeOut from "../Elements/FadeOut";
import FadeIn from "../Elements/FadeIn";

function IntroPage() {

    // fade in and out components based off:
    // https://levelup.gitconnected.com/fade-in-out-text-in-react-fa8fc7a2a0b1

    return (
        <div>
            <div className="title"><FadeOut /></div>
            <div className="language"><FadeIn /></div>
        </div>
    );
}

export default IntroPage;
