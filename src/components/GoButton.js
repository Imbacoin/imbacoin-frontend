import React, {useEffect, useRef} from "react";
import lang_bg from '../images/lang/lang_bg.svg'
import go_text from '../images/lang/go_text.svg'
import british from '../images/lang/british.png'
import gsap from "gsap";
import {useMediaQuery} from 'react-responsive'

function GoButton({ startForm, start, langClick}) {
    const isDesktop = useMediaQuery({minWidth: 1300})
    const isMobile = useMediaQuery({ maxWidth: 767 })

    useEffect(() => {
        if (start && isDesktop) {
            gsap.to(".go_title", {y: 50, autoAlpha: 0, duration: 0.6})
            gsap.to(".img_bg_circle", {y: 50, opacity: 0, duration: 0.5})
            gsap.to(".goButton", {top: '-2vh', y:0, left: '90vw', delay: 0.5, duration: 1, ease: "power4.inOut"})
            gsap.set(".lang_panel li:nth-child(4)", {display:'none'})
            gsap.set(".lang_panel li:nth-child(5)", {display:'none'})
        }
        if (start && isMobile) {
            gsap.to(".chat_wrap", {autoAlpha: 1, ease: 'power3.inOut'})
            gsap.to(".social_buttons_wrap", {autoAlpha: 1, ease: 'power3.inOut'})
            gsap.to(".lang_panel", {autoAlpha: 0, bottom: '-10vh', ease: 'power3.inOut'})
        }
    }, [start])

    return (
        <div className="go_button_position">
            <div className="go_button_wrap">
                <img src={lang_bg} className="img_bg_circle" alt=""/>
                <div className="logo_lang"
                     onClick={langClick}
                     style={{
                         background: `url(${british})`,
                         backgroundSize: 'contain',
                     }}></div>
                <div className="go_title" onClick={startForm}>
                    <img src={go_text} alt=""/>1
                </div>
            </div>
        </div>
    );
}

export default GoButton;