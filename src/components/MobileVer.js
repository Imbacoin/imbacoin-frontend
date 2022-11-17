import React, {useEffect, useRef, useState} from "react";
import {gsap} from "gsap";
import GoButton from "./GoButton";
import BuyForm from "./BuyForm";
import SearchBar from "./searchBar";

import arrow_next from "../images/lang/arrowDown.svg";
import arrow_mob from "../images/lang/arrow_mob.svg";

import path from "../images/mobile/path.png"
import player from "../images/mobile/player.png"
import ball from "../images/mobile/ball.png"
import bg from "../images/mobile/bg.png"
import light from "../images/mobile/light.png"
import corner from "../images/mobile/corner.png"
import tablo from "../images/mobile/tablo.png"
import vorota from "../images/mobile/vorota.png"
import vorota_after from "../images/mobile/vorota_after.png"
import zritel from "../images/mobile/zritel.png"
import france from "../images/lang/france.png"
import BeatLoader from "react-spinners/BeatLoader";


function IntroMobile() {
    gsap.config({
        nullTargetWarn: false
    })
    const langFullPanelRef = useRef(null)
    const langRef = useRef(null)
    const tl_start = useRef(null)
    const tl_intro = useRef(null)
    const tl_Ref = useRef(null)
    const tl_langPanel_Ref = useRef(null)
    const [start, setStart] = useState(false)
    const containerRef = useRef(null)
    const q = gsap.utils.selector(containerRef)

    const [isLoading, setIsLoading] = useState(true)
    const imgs = [
        path,
        player,
        ball,
        bg,
        light,
        corner,
        tablo,
        vorota,
        vorota_after,
        zritel,
        france,
    ]

    useEffect(() => {
        const loadImage = src => {
            return new Promise((resolve, reject) => {
                const loadImg = new Image()
                loadImg.src = src
                loadImg.onload = () => {
                        resolve(src)
                }
                loadImg.onerror = err => reject(err)
            })
        }

        Promise.all(imgs.map(src => loadImage(src)))
            .then(() => {
                setIsLoading(false)
            })
            .catch(err => console.log("Failed to load images", err))
    }, [])


    useEffect(() => {
        if (!isLoading) {
            let ctx_confetti = gsap.context(() => {
                const circles = q('.circle')
                const squares = q('.squares')

                const minX = 0;
                const maxX = window.innerWidth / 2

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
            })

            let ctx_l = gsap.context(() => {
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
            })


            let ctx = gsap.context(() => {
                tl_intro.current = gsap.timeline()
                    .to(q(".scene"), {opacity:1, scale: 2, xPercent: -50, yPercent: 20, duration: 1, ease: "power3.inOut"})
                    .fromTo(q(".bg"), {yPercent: 100}, {yPercent: 0, duration: 1, ease: "power3.inOut"}, "<+0.2")
                    .fromTo(q(".vorota"), {xPercent: 50}, {xPercent: 0, duration: 1, ease: "power3.inOut"}, "<+=0.2")
                    .to(q(".scene"), {scale: 1, xPercent: 0, yPercent: 0, duration: 1, ease: "power3.inOut"}, "<+=0.2")
                    .fromTo(q(".corner"), {scale: 0, yPercent: -20, xPercent: 50},
                        {scale: 1, yPercent: 0, xPercent: 0, duration: 1, ease: "power3.inOut"})
                    .fromTo(q(".tablo"), {yPercent: -150, xPercent: -20}, {
                        yPercent: 0,
                        xPercent: 0,
                        duration: 1,
                        ease: "power3.inOut"
                    }, "<+=0.2")
                    .fromTo([".left_light1", ".left_light2", ".left_light3"],
                        {xPercent: -100, yPercent: -100},
                        {xPercent: 0, yPercent: 0, stagger: 0.2, duration: 1}, "<+=0.2")
                    .fromTo(q(".confetti"), {opacity: 0},
                        {opacity: 1, duration: 3}, "<+=0.2")
                    .fromTo(q(".player"),
                        {opacity: 0, rotation: 30, yPercent: 10, xPercent: -50},
                        {opacity: 1, rotation: 0, yPercent: 0, xPercent: 0, duration: 1, ease: "power3.inOut"}, "<+0.2")
                    .fromTo(q(".path"), {opacity: 0}, {opacity: 1, duration: 1, ease: "power3.inOut"}, "<+=0.6")
                    .fromTo(q(".ball"),
                        {scale: 0},
                        {scale: 1, duration: 0.3, ease: "power3.inOut"}, "<+=0.6")
                    .fromTo(q(".vorota_after"), {opacity: 0}, {opacity: 1, duration: 0.2}, "<+=0.2")
                    .fromTo(q(".zritel"),
                        {xPercent: 30, yPercent: 30},
                        {xPercent: 0, yPercent: 0, duration: 1, ease: "power3.inOut"}, "<-=0.5")
                    .fromTo(q(".goButton"),
                        {yPercent: 200, opacity: 0},
                        {yPercent: 0, opacity: 1, duration: 1, ease: "power3.inOut"}, "<")
                    .to('.appears', {opacity: 1, duration: 1})
                    .fromTo(q('.path'),
                        {opacity: 0},
                        {opacity: 1, duration: 1, repeat: -1, repeatDelay: 1}, "<")
            });

            return () => {
                ctx.revert();
                ctx_l.revert();
                ctx_confetti.revert();
            }
        }
    }, [isLoading])


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
        <div className="intro_wrap" ref={containerRef}>
            
            {isLoading ? (
                    <div className="preloader">
                        <BeatLoader color="#1d275f"/>
                    </div>
                )
                : (
                    <div className="scene">
                        <div className="bg img"><img alt="bg" src={bg}/></div>
                        <div className="corner img"><img alt="" src={corner}/></div>
                        <div className="left_light1 img"><img alt="" src={light}/></div>
                        <div className="left_light2 img"><img alt="" src={light}/></div>
                        <div className="left_light3 img"><img alt="" src={light}/></div>
                        <div className="vorota img"><img alt="" src={vorota}/></div>
                        <div className="vorota_after img"><img alt="" src={vorota_after}/></div>
                        <div className="confetti">
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
                        <div className="path img"><img alt="" src={path}/></div>
                        <div className="tablo img"><img alt="" src={tablo}/></div>
                        <div className="player img"><img alt="" src={player}/></div>
                        <div className="zritel img"><img alt="" src={zritel}/></div>
                        <div className="ball img"><img alt="" src={ball}/></div>
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
                                                    <img alt="" src={el.img}/>
                                                </div>
                                            </li>
                                        )
                                    )
                                }
                            </ul>
                            <div className="arrow_mob" onClick={openLangPanel}>
                                <img alt="" src={arrow_mob}/>
                            </div>
                            <div className="next_arrow" onClick={openLangPanel}>
                                <img alt="" src={arrow_next}/>
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
                                                                <img alt="" src={el.img}/>
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
                )
            }
        </div>
    );
}

export default IntroMobile;