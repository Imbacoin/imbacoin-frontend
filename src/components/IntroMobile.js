import React, {useEffect, useMemo, useRef, useState} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";

import GoButton from "./GoButton";
import BuyForm from "./BuyForm";
import path_1 from "../images/mobile/webp/path_1.png"
import path_2 from "../images/mobile/webp/path_2.png"
import path_3 from "../images/mobile/webp/path_3.png"
import path_4 from "../images/mobile/webp/path_4.png"
import path_5 from "../images/mobile/webp/path_5.png"
import path_6 from "../images/mobile/webp/path_6.png"
import path_7 from "../images/mobile/webp/path_7.png"
import path_8 from "../images/mobile/webp/path_8.png"
import path_9 from "../images/mobile/webp/path_9.png"
import path_10 from "../images/mobile/webp/path_10.png"
import path_11 from "../images/mobile/webp/path_11.png"
import path_12 from "../images/mobile/webp/path_12.png"
import lines from "../images/mobile/webp/lines.png"
import path_left_lite from "../images/mobile/webp/path_left_lite.png"
import path_right_bottom from "../images/mobile/webp/path_right_bottom.png"
import player from "../images/mobile/webp/player.png"
import right_top_corner from "../images/mobile/webp/right_top_corner.png"
import tablo from "../images/mobile/webp/tablo.png"
import tablo_down_brizg from "../images/mobile/webp/tablo_down_brizg.png"
import tablo_right_top_brizg from "../images/mobile/webp/tablo_right_top_brizg.png"
import tablo_bg_lines from "../images/mobile/webp/tablo_bg_lines.png"
import tablo_lenti from "../images/mobile/webp/tablo_lenti.png"
import vorota from "../images/mobile/webp/vorota.png"
import vorota_uzor from "../images/mobile/webp/vorota_uzor.png"
import zritel from "../images/mobile/webp/zritel.png"
import bg from "../images/mobile/webp/bg.png"
import ball from "../images/mobile/webp/ball.png"
import ball_oreol from "../images/mobile/webp/ball_oreol.png"
import left_light from "../images/mobile/webp/left_light.png"
import france from "../images/lang/france.png";
import arrowDown from "../images/lang/arrowDown.svg";
import arrow_mob from "../images/lang/arrow_mob.svg";
import SearchBar from "./searchBar";
import PreloadImage from "../services/PreloadImage";


function IntroMobile() {

    gsap.ticker.lagSmoothing(1000, 33)
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.config({
        ignoreMobileResize: true
    });

    const langFullPanelRef = useRef(null)
    const langRef = useRef(null)
    const tl_start = useRef(null)
    const tl_intro = useRef(null)
    const tl_Ref = useRef(null)
    const tl_langPanel_Ref = useRef(null)
    const [start, setStart] = useState(false)
    const containerRef = useRef(null)
    const q = gsap.utils.selector(containerRef)


    useEffect(() => {

        const circles = q('.circle')
        const squares = q('.squares')

        const minX = 0;
        const maxX = containerRef.current.getBoundingClientRect().width

        const minY = window.innerHeight;
        const maxY = window.innerHeight / 2;

        const minSize = window.innerHeight / 100;
        const maxSize = window.innerHeight * 4 / 100;

        const minDelay = 0;
        const maxDelay = 2;

        const minOpacity = 1.;
        const maxOpacity = 1.0;

        const minDuration = 1;
        const maxDuration = 3;

        const minRotation = 15;
        const maxRotation = 60;


        circles.forEach(el => {
            animateCircle(el, 0);
        })

        squares.forEach(el => {
            animateCircle(el, 1);
        })

        function animateCircle(el, sq) {

            const x = random(minX, maxX);
            const y = random(minY, maxY);
            let sizeH, sizeW
            if (sq) {
                sizeW = 2 * random(minSize, maxSize);
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
                width: sizeW,
                height: sizeH,
                opacity: opacity
            });

            gsap.to(el, {
                duration,
                opacity: 0,
                rotation: rotation,
                y: y,
                x: x,
                delay: delay,
                onComplete: animateCircle,
                onCompleteParams: [el]
            });
        }

        function random(min, max) {
            if (max == null) {
                max = min;
                min = 0;
            }
            return Math.random() * (max - min) + min;
        }


        gsap.to(".left_light1", {
            rotation: -10,
            transformOrigin: '0 0',
            duration: 15,
            repeat: -1,
            yoyo: true,
            ease: "none"
        })
        gsap.to(".left_light2", {
            rotation: 20,
            transformOrigin: '0 0',
            duration: 17,
            repeat: -1,
            yoyo: true,
            ease: "none"
        })
        gsap.to(".left_light3", {
            rotation: 10,
            transformOrigin: '0 0',
            duration: 13,
            repeat: -1,
            yoyo: true,
            ease: "none"
        })


            tl_intro.current = gsap.timeline()
                .to(q(".scene"), {scale: 2, xPercent: -50, yPercent: 20, duration: 1, ease: "back"})
                .fromTo(q(".bg"), { yPercent: 100},{ yPercent: 0, duration: 1, ease: "back"},"<+0.2")
                .fromTo(q(".right_top_corner"), {scale: 0, yPercent: -20, xPercent:20},
                    {scale: 1,  yPercent: 0, xPercent:0, duration: 1, ease: "power3.inOut"}, "<+=0.2")
                .to(q(".lines"), {opacity: 1, x: 0, duration: 1, ease: "power3.inOut"}, "<+=0.2")
                .fromTo(q(".vorota"), { xPercent: 50},{ xPercent: 0, duration: 1, ease: "back"}, "<+=0.2")
                .to(q(".scene"), {scale: 1, xPercent: 0, yPercent: 0, duration: 1, ease: "power3.inOut"})
                .fromTo(q(".tablo"), {yPercent: -150, xPercent: -20},{yPercent: 0, xPercent: 0, duration: 1, ease: "back"},"<+=0.2")
                .fromTo(q(".tablo_lenti"), {yPercent: -250, xPercent: -20},{ yPercent: 0, xPercent: 0, duration: 1, ease: "none"}, "<+=0.2")
                .fromTo(q(".tablo_right_top_brizg"),
                    {opacity: 0, xPercent: -8},
                    {opacity: 1, xPercent: 0, duration: 0.5, ease: "back"}, "<+=0.2")
                .fromTo(q(".tablo_down_brizg"),
                    {opacity: 0, yPercent: -20},
                    {opacity: 1, yPercent: 0, duration: 0.5, ease: "back"}, "<+=0.2")
                .fromTo(q(".tablo_bg_lines"),
                    {opacity: 0, yPercent: -30},
                    {yPercent: 0, opacity: 1, duration: 1, ease: "power4.inOut"},"<+=0.2")
                .fromTo([".left_light1",".left_light2",".left_light3"],
                    {xPercent: -100, yPercent: -100},
                    {xPercent: 0, yPercent: 0, stagger:0.2, duration: 1}, "<+=0.2")
                .fromTo(q(".confetti"),{opacity:0},
                    {opacity: 1, duration: 3}, "<+=0.2")
                .fromTo(q(".player"),
                    { opacity:0, rotation: -30,yPercent: 20, xPercent: -20},
                    {opacity: 1, rotation: 0, yPercent: 0, xPercent: 0, duration: 1, ease: "back"}, "<+0.2")
                .fromTo(q(".path"), {opacity: 0},{opacity: 1, duration: 0.3, stagger: 0.1, ease:"back"}, "<+=0.2")
                .fromTo(q(".path_left_lite"),
                    { scale:0, xPercent: -30, yPercent: 200},
                    {scale: 1, xPercent: -5,yPercent: 5, duration: 0.5, ease: "power3.Out"}, "<-=0.2")
                .fromTo(q(".path_right_bottom"),
                    { scale:0, xPercent: 50, yPercent: 200},
                    { scale:1, xPercent: 0, yPercent: 0,duration: 0.5, ease: "power3.Out"}, "<+=0.1")
                .fromTo(q(".ball"),
                    {scale: 0},
                    {scale: 1, duration: 0.3, ease: "back"}, "<+=1.3")
                .fromTo(q(".ball_oreol"),
                    {scale: 0},
                    {scale: 1, duration: 0.3, ease: "back"}, "<+=0.2")
                .fromTo(q(".vorota_uzor"),
                    {scale: 0},
                    {scale: 1, duration: 0.5, ease:"back"}, "<+=0.4")
                .fromTo(q(".zritel"),
                    { xPercent: 30, yPercent: 30},
                    { xPercent: 0, yPercent: 0, duration: 1, ease: "back"}, "<-=0.5")
                .fromTo(q(".goButton"),
                    {yPercent: 200, },
                    {yPercent: 0,duration: 1,ease: "back"}, "<")
                .to('.appears', {opacity: 1, duration: 1})


        return ()=>tl_intro.current.kill();
    }, [])


    const startForm = () => {
        setStart(true)
        tl_start.current = gsap.timeline({paused: true})
            .set(q(".player"), {zIndex: 10})
            .set(q(".zritel"), {zIndex: 0})
            .set(".buy_wrap", {top: 0, zIndex: 9})
            .to(".buy_form_wrap", {opacity: 1, duration: 1, ease: "power4.inOut"})
            .to(q(".middle_box"), {top: '0vh', duration: 2, ease: "power4.inOut"}, "<")
            .to(q(".player"), {top: '20vh', left: -20, duration: 2, ease: "power4.inOut"}, "<")
            .to('.chat_wrap', {top: '70vh', height: '15vh', duration: 2, ease: "power4.inOut"}, "<")

        tl_start.current.play()
    }
    const back_to_main = () => {
        tl_start.current.reverse()

    }
    useEffect(() => {
        tl_Ref.current = gsap.timeline({paused: true})
        tl_Ref.current.to(".chat_wrap", {autoAlpha: 0, ease: 'power3.inOut'})
        tl_Ref.current.to(".social_buttons_wrap", {autoAlpha: 0, ease: 'power3.inOut'})
        tl_Ref.current.to(q(".lang_panel"), {autoAlpha: 1, bottom: '0', ease: 'power3.inOut'})
    }, [tl_Ref, q])

    useEffect(() => {
        tl_langPanel_Ref.current = gsap.timeline({paused: true})
        tl_langPanel_Ref.current.to(q(".go_title"), {opacity: 0, y: 50, ease: 'none'})
    }, [tl_langPanel_Ref, q])

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
            gsap.timeline().to(q(".lang_full_panel"), {autoAlpha: 1, duration: 0.3})
                .to(q(".panel_l"), {marginTop: 0, opacity: 1, duration: 1, ease: "back"}, "<")
                .fromTo(q(".liLang"), {opacity: 0}, {opacity: 1, duration: 1, ease: "back"}, "<")
        } else {
            langFullPanelRef.current.classList.remove("active")
        }
    }

    const closeLangPanel = () => {
        if (langFullPanelRef.current.classList.contains("active")) {
            gsap.timeline().to(q(".panel_l"), {marginTop: 100, duration: 1, ease: "back"})
                .to(q(".lang_full_panel"), {autoAlpha: 0, duration: 1.2}, "<")
            langFullPanelRef.current.classList.remove("active")
            langRef.current.classList.remove('active')
            tl_Ref.current.reverse()
        }
    }

    const wrapClosePanel = (e) => {
        if (e.target.classList.contains("lang_full_wrap")) {
            gsap.timeline().to(q(".panel_l"), {marginTop: 100, duration: 1, ease: "back"})
                .to(q(".lang_full_panel"), {autoAlpha: 0, duration: 1.2}, "<")
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
        <div className="intro_wrap" id="root" ref={containerRef}>
            <div className="scene">
                <div className="bg img"><PreloadImage src={bg} /></div>
                <div className="lines img"><PreloadImage src={lines} /></div>
                <div className="right_top_corner img"><PreloadImage src={right_top_corner} /></div>
                <div className="left_light1 img"><PreloadImage src={left_light} /></div>
                <div className="left_light2 img"><PreloadImage src={left_light} /></div>
                <div className="left_light3 img"><PreloadImage src={left_light} /></div>
                <div className="left_light3 img"><PreloadImage src={left_light} /></div>
                <div className="vorota img"><PreloadImage src={vorota} /></div>
                <div className="vorota_uzor img"><PreloadImage src={vorota_uzor} /></div>
                <div className="confetti" >
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
                <div className="path_left_lite img"><PreloadImage src={path_left_lite} /></div>
                <div className="path_right_bottom img"><PreloadImage src={path_right_bottom} /></div>
                <div className="path_1 img"><PreloadImage src={path_1} /></div>
                <div className="path_2 img"><PreloadImage src={path_2} /></div>
                <div className="path_3 img"><PreloadImage src={path_3} /></div>
                <div className="path_4 img"><PreloadImage src={path_4} /></div>
                <div className="path_5 img"><PreloadImage src={path_5} /></div>
                <div className="path_6 img"><PreloadImage src={path_6} /></div>
                <div className="path_7 img"><PreloadImage src={path_7} /></div>
                <div className="path_8 img"><PreloadImage src={path_8} /></div>
                <div className="path_9 img"><PreloadImage src={path_9} /></div>
                <div className="path_10 img"><PreloadImage src={path_10} /></div>
                <div className="path_11 img"><PreloadImage src={path_11} /></div>
                <div className="path_12 img"><PreloadImage src={path_12} /></div>
                <div className="tablo_right_top_brizg img"><PreloadImage src={tablo_right_top_brizg} /></div>
                <div className="tablo_down_brizg img"><PreloadImage src={tablo_down_brizg} /></div>
                <div className="tablo_bg_lines img"><PreloadImage src={tablo_bg_lines} /></div>
                <div className="tablo_lenti img"><PreloadImage src={tablo_lenti} /></div>
                <div className="tablo img"><PreloadImage src={tablo} /></div>
                <div className="player img"><PreloadImage src={player} /></div>
                <div className="zritel img"><PreloadImage src={zritel} /></div>
                <div className="ball_oreol img"><PreloadImage src={ball_oreol} /></div>
                <div className="ball img"><PreloadImage src={ball} /></div>
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
                                            <PreloadImage src={el.img}/>
                                        </div>
                                    </li>
                                )
                            )
                        }
                    </ul>
                    <div className="arrow_mob" onClick={openLangPanel}>
                        <PreloadImage src={arrow_mob} />
                    </div>
                    <div className="next_arrow" onClick={openLangPanel}>
                        <PreloadImage src={arrowDown} />
                    </div>
                </div>

                <div className="lang_full_panel" ref={langFullPanelRef}>
                    <div className="lang_full_wrap" onClick={wrapClosePanel}>
                        <div className="panel_l">
                            <div className="panel_close_btn" onClick={closeLangPanel}>
                                <span></span>
                                <span></span>
                            </div>
                            <div className="search_pos">
                                <SearchBar/>
                            </div>
                            <div className="allLangs">
                                <ul>
                                    {
                                        langs.map((el, index) => (
                                                <li key={index} className="liLang">
                                                    <div className="name">{el.lang}</div>
                                                    <div className="flag">
                                                        <PreloadImage src={el.img} />
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
                    <BuyForm back_to_main={back_to_main}/>
                </div>

            </div>
        </div>
    );
}

export default IntroMobile;