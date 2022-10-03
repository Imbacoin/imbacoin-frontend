import React, {useEffect, useRef} from "react";
import lang_bg from '../images/lang/lang_bg.svg'
import go_text from '../images/lang/go_text.svg'
import british from '../images/lang/british.png'
import france from '../images/lang/france.png'
import gsap from "gsap";
import {useMediaQuery} from 'react-responsive'

function GoButton({startForm, start}) {
    const isDesktop = useMediaQuery({minWidth: 1225})
    const isTablet_L = useMediaQuery({minWidth: 768, maxWidth: 1224, orientation: "portrait"})
    const isTablet_P = useMediaQuery({minWidth: 768, maxWidth: 1224, orientation: "landscape"})
    const isMobile = useMediaQuery({maxWidth: 767})

    const langRef = useRef(null)
    const tl_Ref = useRef(null)

    useEffect(() => {
        tl_Ref.current = gsap.timeline({paused: true})

        tl_Ref.current.to(".go_title", {opacity: 0, y: 50, ease: 'none'})
        tl_Ref.current.to(".lang_panel", {
            autoAlpha: 1,
            top: () => isDesktop ? '10vh' :
                       isTablet_L ? '5vh' :
                       isTablet_P ? '5vh' :
                       isMobile ? "5vh" : '10vh'
            , ease: 'back'
        })
    }, [])

    const langClick = () => {
        if (!langRef.current.classList.contains('active')) {
            langRef.current.classList.add('active')
            tl_Ref.current.play()
        } else {
            langRef.current.classList.remove('active')
            tl_Ref.current.reverse()
        }
    }
    const subLangClick = (e) => {
        tl_Ref.current.reverse()
    }

    const langs = [
        {lang: 'fran', img: france},
        {lang: 'fran', img: france},
        {lang: 'fran', img: france},
        {lang: 'fran', img: france},
        {lang: 'fran', img: france},
    ]

    useEffect(() => {
        if (start && isDesktop) {
            gsap.to(".go_title", {y: 50, autoAlpha: 0, duration: 0.6})
            gsap.to(".img_bg_circle", {y: 50, opacity: 0, duration: 0.5})
            gsap.to(".goButton", {top: '-2vh', y:0, left: '90vw', delay: 0.5, duration: 1, ease: "power4.inOut"})
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
                    <img src={go_text} alt=""/>
                </div>
                <div className="lang_panel" ref={langRef}>
                    <ul>
                        {
                            langs.map((el, index) => (
                                    <li key={index} onClick={subLangClick} className="liLang">
                                        <div className="name">{el.lang}</div>
                                        <div className="flag">
                                            <img src={el.img} alt=""/>
                                        </div>

                                    </li>
                                )
                            )
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default GoButton;