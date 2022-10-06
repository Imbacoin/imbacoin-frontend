import React, {useEffect, useRef, useState} from "react";
import gsap from "gsap";
import path_1 from "../images/tablet_L/path_1.png"
import path_2 from "../images/tablet_L/path_2.png"
import path_3 from "../images/tablet_L/path_3.png"
import path_4 from "../images/tablet_L/path_4.png"
import path_5 from "../images/tablet_L/path_5.png"
import path_6 from "../images/tablet_L/path_6.png"
import path_7 from "../images/tablet_L/path_7.png"
import path_8 from "../images/tablet_L/path_8.png"
import path_9 from "../images/tablet_L/path_9.png"
import path_10 from "../images/tablet_L/path_10.png"
import path_11 from "../images/tablet_L/path_11.png"
import path_12 from "../images/tablet_L/path_12.png"
import path_13 from "../images/tablet_L/path_13.png"
import lines from "../images/tablet_L/lines.png"
import path_left_top from "../images/tablet_L/path_left_top.png"
import path_left_lite from "../images/tablet_L/path_left_lite.png"
import path_right_bottom from "../images/tablet_L/path_right_bottom.png"
import path_right_top from "../images/tablet_L/path_right_top.png"
import player from "../images/tablet_L/player.png"
import right_top_corner from "../images/tablet_L/right_top_corner.png"
import tablo from "../images/tablet_L/tablo.png"
import tablo_down_brizg from "../images/tablet_L/tablo_down_brizg.png"
import tablo_left_top_brizg from "../images/tablet_L/tablo_left_top_brizg.png"
import tablo_right_top_brizg from "../images/tablet_L/tablo_right_top_brizg.png"
import tablo_bg_lines from "../images/tablet_L/tablo_bg_lines.png"
import tablo_lenti from "../images/tablet_L/tablo_lenti.png"
import vorota from "../images/tablet_L/vorota.png"
import vorota_uzor from "../images/tablet_L/vorota_uzor.png"
import zritel from "../images/tablet_L/zritel.png"
import left_light from "../images/tablet_L/left_light.png"
import bg from "../images/tablet_L/bg.png"
import ball from "../images/tablet_L/ball.png"
import ball_oreol from "../images/tablet_L/ball_oreol.png"
import GoButton from "./GoButton";
import BuyForm from "./BuyForm";
import {useMediaQuery} from "react-responsive";
import france from "../images/lang/france.png";
import SearchBar from "./searchBar";

function IntroTabletLandscape() {
    gsap.ticker.lagSmoothing(1000, 16)
    const containerRef = useRef(null)
    const q = gsap.utils.selector(containerRef)
    const langFullPanelRef = useRef(null)
    const tl_start = useRef(null)

    const [start,setStart] = useState(false)

    useEffect(()=>{
        const circles = q('.circle')
        const squares = q('.squares')

        const minX = 0;
        const maxX = containerRef.current.getBoundingClientRect().width

        const minY = window.innerHeight;
        const maxY =  window.innerHeight/2;

        const minSize = window.innerHeight/50;
        const maxSize = window.innerHeight*4/50;

        const minDelay = 0;
        const maxDelay = 2;

        const minOpacity = 1.;
        const maxOpacity = 1.0;

        const minDuration = 1;
        const maxDuration = 3;

        const minRotation = 15;
        const maxRotation = 60;


        circles.forEach(el=>{
            animateCircle(el, 0);
        })

        squares.forEach(el=>{
            animateCircle(el, 1);
        })

        function animateCircle(el, sq) {

            const x = random(minX, maxX);
            const y = random(minY, maxY);
            let sizeH, sizeW
            if (sq) {
                sizeW = 2*random(minSize, maxSize);
                sizeH = random(minSize, maxSize);
            } else {
                sizeW = random(minSize, maxSize);
                sizeH = random(minSize, maxSize);
            }
            const delay = random(minDelay, maxDelay);
            const rotation = random(minRotation, maxRotation);
            const opacity = random(minOpacity, maxOpacity);
            const duration = random(minDuration, maxDuration);

            gsap.set(el, {
                x: x,
                y: sizeW,
                rotation: rotation,
                width:sizeW,
                height: sizeH,
                autoAlpha: opacity
            });

            gsap.to(el, {
                duration,
                autoAlpha: 0,
                rotation: rotation,
                y: y,
                x: x,
                delay: delay,
                onComplete: animateCircle,
                onCompleteParams: [el]
            });
        }

        function random(min, max) {
            if (max == null) { max = min; min = 0; }
            return Math.random() * (max - min) + min;
        }

        gsap.to(".left_light1",{rotation: -10, transformOrigin: '0 0', duration: 15, repeat: -1, yoyo: true, ease: "none"})
        gsap.to(".left_light2",{rotation: 20, transformOrigin: '0 0', duration: 17, repeat: -1, yoyo: true, ease: "none"})
        gsap.to(".left_light3",{rotation: 10, transformOrigin: '0 0', duration: 13, repeat: -1, yoyo: true, ease: "none"})

        gsap.timeline()
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
            .fromTo(".tablo_left_top_brizg",
                { opacity:0, y: 20, x: 80},
                { opacity:1, y: 0, x: 0, duration: 0.5, ease: "elastic.out(1, 0.3)"},"<")
            .fromTo(".tablo_down_brizg",
                { opacity:0, y: -20, x: 0},
                { opacity:1, y: 0, x: 0, duration: 0.5, ease: "elastic.out(1, 0.3)"},"<+=0.2")
            .to(".tablo_bg_lines",{y: 0, x: 0, opacity: 1, duration: 1, ease: "power4.inOut"},"<")
            .to(".left_light1",{opacity: 1, duration: 1, ease: "power4.inOut"},"<+=0.2")
            .to(".left_light2",{opacity: 1, duration: 1, ease: "power4.inOut"},"<+=0.3")
            .to(".left_light3",{opacity: 1, duration: 1, ease: "power4.inOut"},"<+=0.4")
            .to(".tablo",{y: 10, duration:3, repeat:-1, yoyo: true, ease:"none"},"<")
            .to(".confetti",{opacity:1, duration:3},"<")
            .to(".player",{opacity: 1, rotation:0, y: 0, x: 0, duration:1, ease: "back"},"<+0.5")
            .fromTo(".path",{opacity:0, x:-10, y: 10},{opacity:1, x:0, y: 0, duration: 0.2, stagger:0.05, ease: "power3.inOut"},"<+=0.2")
            .to(".path_left_lite",{opacity:1, y: 0, x: 0, duration: 0.5, ease: "power3.Out"},"<-=0.1")
            .to(".path_right_bottom",{opacity:1, y: 0, x: 0, duration: 0.5, ease: "power3.Out"},"<+=0.1")
            .to(".path_right_top",{opacity:1, y: 0, x: 0, duration: 0.5, ease: "power3.Out"},"<+=0.2")
            .to(".path_left_top",{opacity:1, y: 0, x: 0, duration: 0.5, ease: "power3.Out"},"<+=0.3")
            .to(".ball_oreol",{opacity: 1,  y: 0, x: 0, duration:1,ease: "power4.inOut" },"<+=0.2")
            .to(".ball",{opacity: 1, y: 0, x: 0, duration:1, },"<+=0")
            .to(".vorota_uzor",{opacity:1, y: 0, x: 0, duration: 1, ease: "power4.inOut"},"<+=0.2")
            .to(".zritel",{opacity:1, y: 0, x: 0, duration: 1, ease: "back"},"<-=0.5")
            .fromTo(".goButton",{yPercent: 100,opacity:0},{yPercent:0,opacity:1,duration: 1, ease: "back"},"<")
            .to(".ball_oreol",{opacity:0.5, duration:3, repeat:-1, yoyo: true, ease:"none" })
            .fromTo(".path",{opacity:0},{opacity:1,repeat:-1, repeatDelay: 2,  duration: 0.2, stagger:0.05, ease: "power3.inOut"},"<")

    },[])

    const startForm = ()=>{
        setStart(true)
        tl_start.current = gsap.timeline({paused:true,
            onComplete:()=>{
                gsap.to(".player",{y:-20, duration: 5, repeat:-1, yoyo: true, ease: "none" })
            }})
            .set(".player",{zIndex:10})
            .set(".ball_oreol",{zIndex: -1})
            .set(".ball",{zIndex: -1})
            .set(".zritel",{zIndex: 0})
            .set(".buy_wrap",{left:0, zIndex: 9})
            .to(".buy_form_wrap",{ opacity: 1, duration: 1, ease:"power4.inOut"})
            .to(".buy_form_wrap",{ background: 'rgba(13, 19, 53, 0.2)',
                backdropFilter: 'blur(6px)', duration: 2, ease:"power4.inOut"}, "<")
            .to(".middle_box",{ right: 0, duration: 2, ease:"power4.inOut"}, "<")


        tl_start.current.play()
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
        //
    }

    const closeLangPanel = () => {
        if (langFullPanelRef.current.classList.contains("active")) {
            gsap.timeline().to(".panel_l", {marginTop: 100, duration: 1, ease: "back"})
                .to(".lang_full_panel", {autoAlpha: 0, duration: 1.2},"<")
            langFullPanelRef.current.classList.remove("active")
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
                <div className="confetti" ref={containerRef}>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="squares"></div>
                    <div className="squares"></div>
                    <div className="squares"></div>
                    <div className="squares"></div>
                    <div className="squares"></div>
                    <div className="squares"></div>
                    <div className="squares"></div>
                    <div className="squares"></div>
                    <div className="squares"></div>
                    <div className="squares"></div>
                    <div className="squares"></div>
                    <div className="squares"></div>
                    <div className="squares"></div>
                    <div className="squares"></div>
                    <div className="squares"></div>
                    <div className="squares"></div>
                    <div className="squares"></div>

                </div>

                <img src={lines} className="lines img" alt=""/>
                <div className="goButton">
                    <GoButton startForm={startForm} start={start} openLangPanel={openLangPanel}/>
                </div>
                <img src={bg} className="bg img" alt=""/>
                <img src={right_top_corner} className="right_top_corner img" alt=""/>
                <img src={vorota} className="vorota img" alt=""/>
                <img src={vorota_uzor} className="vorota_uzor img" alt=""/>
                <img src={path_left_top} className="path_left_top img" alt=""/>
                <img src={path_left_lite} className="path_left_lite img" alt=""/>
                <img src={path_right_bottom} className="path_right_bottom img" alt=""/>
                <img src={path_right_top} className="path_right_top img" alt=""/>
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
                <img src={path_13} className="path img" alt=""/>
                <img src={tablo_right_top_brizg} className="tablo_right_top_brizg img" alt=""/>
                <img src={tablo_left_top_brizg} className="tablo_left_top_brizg img" alt=""/>
                <img src={tablo_down_brizg} className="tablo_down_brizg img" alt=""/>
                <img src={tablo_bg_lines} className="tablo_bg_lines img" alt=""/>
                <img src={tablo_lenti} className="tablo_lenti img" alt=""/>
                <img src={tablo} className="tablo img" alt=""/>
                <div className="buy_wrap">
                    <BuyForm />
                </div>
                <img src={player} className="player img" alt=""/>
                <img src={zritel} className="zritel img" alt=""/>
                <img src={left_light} className="left_light1 img" alt=""/>
                <img src={left_light} className="left_light2 img" alt=""/>
                <img src={left_light} className="left_light3 img" alt=""/>
                <img src={ball_oreol} className="ball_oreol img" alt=""/>
                <img src={ball} className="ball img" alt=""/>
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
            </div>
        </div>
    );
}

export default IntroTabletLandscape;