import React, {useEffect, useRef, useState} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import GoButton from "./GoButton";
import BuyForm from "./BuyForm";
import path_1 from "../images/mobile/path_1.png"
import path_2 from "../images/mobile/path_2.png"
import path_3 from "../images/mobile/path_3.png"
import path_4 from "../images/mobile/path_4.png"
import path_5 from "../images/mobile/path_5.png"
import path_6 from "../images/mobile/path_6.png"
import path_7 from "../images/mobile/path_7.png"
import path_8 from "../images/mobile/path_8.png"
import path_9 from "../images/mobile/path_9.png"
import path_10 from "../images/mobile/path_10.png"
import path_11 from "../images/mobile/path_11.png"
import path_12 from "../images/mobile/path_12.png"
import lines from "../images/mobile/lines.png"
import path_left_lite from "../images/mobile/path_left_lite.png"
import path_right_bottom from "../images/mobile/path_right_bottom.png"
import player from "../images/mobile/player.png"
import right_top_corner from "../images/mobile/right_top_corner.png"
import tablo from "../images/mobile/tablo.png"
import tablo_down_brizg from "../images/mobile/tablo_down_brizg.png"
import tablo_right_top_brizg from "../images/mobile/tablo_right_top_brizg.png"
import tablo_bg_lines from "../images/mobile/tablo_bg_lines.png"
import tablo_lenti from "../images/mobile/tablo_lenti.png"
import vorota from "../images/mobile/vorota.png"
import vorota_uzor from "../images/mobile/vorota_uzor.png"
import zritel from "../images/mobile/zritel.png"
import bg from "../images/mobile/bg.png"
import ball from "../images/mobile/ball.png"
import ball_oreol from "../images/mobile/ball_oreol.png"
import left_light from "../images/mobile/left_light.png"
import confetti from "../images/mobile/confetti.png"
import france from "../images/lang/france.png";
import arrowDown from "../images/lang/arrowDown.svg";
import arrow_mob from "../images/lang/arrow_mob.svg";
import SearchBar from "./searchBar";

function IntroMobile() {

    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.config({
        ignoreMobileResize: true
    });
    ScrollTrigger.normalizeScroll(true);

    gsap.ticker.lagSmoothing(1000, 16)

    const langFullPanelRef = useRef(null)
    const langRef = useRef(null)
    const tl_start = useRef(null)
    const tl_intro = useRef(null)
    const tl_Ref = useRef(null)
    const tl_langPanel_Ref = useRef(null)
    const [start,setStart] = useState(false)


    useEffect(()=>{

        tl_intro.current = gsap.timeline()
           .to(".scene",{scale:2,xPercent:-50, yPercent:20, duration: 1, ease: "back"})
           .to(".bg",{opacity:1, y:0, duration: 1, ease: "back"})
           .to(".right_top_corner",{opacity:1, y:0, x:0, duration: 1, ease: "power3.inOut"},"<+=0.1")
           .to(".lines",{opacity:1, x:0, duration: 1, ease: "power3.inOut"},"<+=0.2")
           .to(".vorota",{opacity:1, x:0, duration: 1, ease: "back"},"<+=0.3")
           .to(".scene",{scale:1,xPercent:0, yPercent:0, duration: 1, ease: "power3.inOut"})
           .to(".tablo",{y: 0, x: 0, duration: 1, ease: "elastic.out(1, 0.4)"})
           .to(".tablo_lenti",{opacity:1, y: 0, x: 0, duration: 1, ease: "none"},"<")
           .fromTo(".tablo_right_top_brizg",
               { opacity:0, y: 0, x: -80},
               { opacity:1, y: 0, x: 0, duration: 0.5,  ease: "elastic.out(1, 0.3)"},"<+=0.1")
           .fromTo(".tablo_down_brizg",
               { opacity:0, y: -20, x: 0},
               { opacity:1, y: 0, x: 0, duration: 0.5, ease: "elastic.out(1, 0.3)"},"<+=0.2")
           .to(".tablo_bg_lines",{y: 0, x: 0, opacity: 1, duration: 1, ease: "power4.inOut"},"<")
           .to(".left_light1",{opacity: 1, duration: 1, ease: "power4.inOut"},"<+=0.2")
           .to(".left_light2",{opacity: 1, duration: 1, ease: "power4.inOut"},"<+=0.3")
           .to(".left_light3",{opacity: 1, duration: 1, ease: "power4.inOut"},"<+=0.4")
           .to(".confetti_img",{opacity:1, duration:3},"<")
           .to(".player",{opacity: 1, rotation:0, y: 0, x: 0, duration:1, ease: "back"},"<+0.5")
           .fromTo(".path",{opacity:0, x:0, y: 0},{opacity:1, x:0, y: 0, duration: 0.2, stagger:0.05, ease: "power3.inOut"},"<+=0.2")
           .to(".path_left_lite",{opacity:1, y: 0, x: 0, duration: 0.5, ease: "power3.Out"},"<-=0.1")
           .to(".path_right_bottom",{opacity:1, y: 0, x: 0, duration: 0.5, ease: "power3.Out"},"<+=0.1")
           .to(".ball_oreol",{opacity: 1,  y: 0, x: 0, duration:1,ease: "power4.inOut" },"<+=0.2")
           .to(".ball",{opacity: 1, y: 0, x: 0, duration:1, },"<+=0")
           .to(".vorota_uzor",{opacity:1, y: 0, x: 0, duration: 1, ease: "power4.inOut"},"<+=0.2")
           .to(".zritel",{opacity:1, y: 0, x: 0, duration: 1, ease: "back"},"<-=0.5")
           .fromTo(".goButton",{yPercent: 100,opacity:0},{yPercent:0,opacity:1,duration: 1, ease: "back"},"<")
           .fromTo(".path",{opacity:0},{opacity:1,repeat:-1, repeatDelay: 2,  duration: 0.2, stagger:0.05, ease: "power3.inOut"},"<")



    },[])


    const startForm = ()=>{
        setStart(true)
        tl_start.current = gsap.timeline({paused:true})
            .set(".player",{zIndex:10})
            .set(".zritel",{zIndex: 0})
            .set(".buy_wrap",{top:0, zIndex: 9})
            .to(".buy_form_wrap",{ opacity: 1, duration: 1, ease:"power4.inOut"})
            .to(".middle_box",{ top: '0vh', duration: 2, ease:"power4.inOut"}, "<")
            .to(".player",{ top: '20vh',left:-20, duration: 2, ease:"power4.inOut"}, "<")
            .to(".chat_wrap",{ top: '70vh', height: '15vh', duration: 2, ease:"power4.inOut"}, "<")

        tl_start.current.play()
    }

    useEffect(() => {
        tl_Ref.current = gsap.timeline({paused: true})
        tl_Ref.current.to(".chat_wrap", {autoAlpha: 0,  ease: 'power3.inOut'})
        tl_Ref.current.to(".social_buttons_wrap", {autoAlpha: 0,  ease: 'power3.inOut'})
        tl_Ref.current.to(".lang_panel", {autoAlpha: 1, bottom: '0', ease: 'power3.inOut'})
    }, [])

    useEffect(() => {
        tl_langPanel_Ref.current = gsap.timeline({paused: true})
        tl_langPanel_Ref.current.to(".go_title", {opacity: 0, y: 50, ease: 'none'})
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
    const subLangClick = () => {
        langRef.current.classList.remove('active')
        tl_Ref.current.reverse()
    }

    const openLangPanel = () => {
        if (!langFullPanelRef.current.classList.contains("active")) {
            langFullPanelRef.current.classList.add("active")
            gsap.timeline().to(".lang_full_panel", {autoAlpha: 1, duration: 0.3})
                .to(".panel_l", {marginTop: 0, opacity: 1, duration: 1, ease: "back"},"<")
                .fromTo(".liLang",{opacity:0}, { opacity: 1, duration: 1, stagger:0.05, ease: "back"},"<")
        } else {
            langFullPanelRef.current.classList.remove("active")
        }
    }

    const closeLangPanel = () => {
        if (langFullPanelRef.current.classList.contains("active")) {
            gsap.timeline().to(".panel_l", {marginTop: 100, duration: 1, ease: "back"})
                .to(".lang_full_panel", {autoAlpha: 0, duration: 1.2},"<")
            langFullPanelRef.current.classList.remove("active")
            langRef.current.classList.remove('active')
            tl_Ref.current.reverse()
        }
    }

    const wrapClosePanel = (e) => {
        if (e.target.classList.contains("lang_full_wrap")) {
            gsap.timeline().to(".panel_l", {marginTop: 100, duration: 1, ease: "back"})
                .to(".lang_full_panel", {autoAlpha: 0, duration: 1.2},"<")
            langFullPanelRef.current.classList.remove("active")
        }
    }

    const langs = [
        {lang: 'fran', img: france},
        {lang: 'fran', img: france},
        {lang: 'fran', img: france},
        {lang: 'fran', img: france},
        {lang: 'fran', img: france},
        {lang: 'fran', img: france},
        {lang: 'fran', img: france},
        {lang: 'fran', img: france},
        {lang: 'fran', img: france},
        {lang: 'fran', img: france}
    ]

    return (
        <div className="intro_wrap">
            <div className="scene">
                <img src={bg} className="bg img" alt=""/>
                <img src={lines} className="lines img" alt=""/>
                <img src={right_top_corner} className="right_top_corner img" alt=""/>
                <img src={left_light} className="left_light1 img" alt=""/>
                <img src={left_light} className="left_light2 img" alt=""/>
                <img src={left_light} className="left_light3 img" alt=""/>
                <img src={vorota} className="vorota img" alt=""/>
                <img src={vorota_uzor} className="vorota_uzor img" alt=""/>
                <img src={path_left_lite} className="path_left_lite img" alt=""/>
                <img src={path_right_bottom} className="path_right_bottom img" alt=""/>
                <img src={path_1} className="path img" alt=""/>
                <img src={path_2} className="path img" alt=""/>
                <img src={path_3} className="path img" alt=""/>
                <img src={path_4} className="path img" alt=""/>
                <img src={path_5} className="path img" alt=""/>
                <img src={path_6} className="path img" alt=""/>
                <img src={path_7} className="path img" alt=""/>
                <img src={path_8} className="path img" alt=""/>
                <img src={path_9} className="path img" alt=""/>
                <img src={path_10} className="path img" alt=""/>
                <img src={path_11} className="path img" alt=""/>
                <img src={path_12} className="path img" alt=""/>
                <img src={confetti} className="confetti_img img" alt=""/>
                <img src={tablo_right_top_brizg} className="tablo_right_top_brizg img" alt=""/>
                <img src={tablo_down_brizg} className="tablo_down_brizg img" alt=""/>
                <img src={tablo_bg_lines} className="tablo_bg_lines img" alt=""/>
                <img src={tablo_lenti} className="tablo_lenti img" alt=""/>
                <img src={tablo} className="tablo img" alt=""/>
                <img src={player} className="player img" alt=""/>
                <img src={zritel} className="zritel img" alt=""/>
                <img src={ball_oreol} className="ball_oreol img" alt=""/>
                <img src={ball} className="ball img" alt=""/>
                <div className="goButton">
                    <GoButton startForm={startForm} start={start} langClick={langClick}/>
                </div>

                <div className="lang_panel" ref={langRef}>
                    <ul>
                        {
                            langs.slice(0, 5).map((el, index) => (
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
                    <div className="arrow_mob" onClick={openLangPanel}>
                        <img src={arrow_mob} alt=""/>
                    </div>
                    <div className="next_arrow" onClick={openLangPanel}>
                        <img src={arrowDown} alt=""/>
                    </div>
                </div>

                <div className="lang_full_panel" ref={langFullPanelRef}>
                    <div className="lang_full_wrap"  onClick={wrapClosePanel}>
                        <div className="panel_l">
                            <div className="panel_close_btn" onClick={closeLangPanel}>
                                <span></span>
                                <span></span>
                            </div>
                            <div className="search_pos">
                                <SearchBar />
                            </div>
                            <div className="allLangs">
                                <ul>
                                    {
                                        langs.map((el, index) => (
                                                <li key={index} className="liLang">
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
                </div>

                <div className="buy_wrap">
                    <BuyForm />
                </div>

            </div>
        </div>
    );
}

export default IntroMobile;