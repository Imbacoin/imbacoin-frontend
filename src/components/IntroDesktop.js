import React, {useEffect, useRef, useState} from "react";
import gsap from "gsap";
import GoButton from "./GoButton";
import BuyForm from "./BuyForm";
import SearchBar from "./searchBar";
import BeatLoader from "react-spinners/BeatLoader";
import path_1 from "../images/path_1.png"
import path_2 from "../images/path_2.png"
import path_3 from "../images/path_3.png"
import path_4 from "../images/path_4.png"
import path_5 from "../images/path_5.png"
import path_6 from "../images/path_6.png"
import path_7 from "../images/path_7.png"
import path_8 from "../images/path_8.png"
import path_9 from "../images/path_9.png"
import path_10 from "../images/path_10.png"
import path_11 from "../images/path_11.png"
import path_12 from "../images/path_12.png"
import path_13 from "../images/path_13.png"
import path_left_top from "../images/path_left_top.png"
import path_left_lite from "../images/path_left_lite.png"
import path_right_bottom from "../images/path_right_bottom.png"
import path_right_top from "../images/path_right_top.png"
import player from "../images/player.png"
import right_top_corner from "../images/right_top_corner.png"
import tablo from "../images/tablo.png"
import tablo_down_brizg from "../images/tablo_down_brizg.png"
import tablo_left_top_brizg from "../images/tablo_left_top_brizg.png"
import tablo_right_top_brizg from "../images/tablo_right_top_brizg.png"
import tablo_bg_lines from "../images/tablo_bg_lines.png"
import tablo_lenti from "../images/tablo_lenti.png"
import vorota from "../images/vorota.png"
import vorota_after from "../images/vorota_after.png";
import vorota_uzor from "../images/vorota_uzor.png"
import zritel from "../images/zritel.png"
import left_light from "../images/left_light.png"
import bg from "../images/bg.png"
import ball from "../images/ball.png"
import ball_oreol from "../images/ball_oreol.png"
import france from "../images/lang/france.png";
import arrowDown from "../images/lang/arrowDown.svg";
import pil from "../images/pil.png";
import lines from "../images/tablet_L/lines.png";
import path from "../images/mobile/path.png";
import light from "../images/mobile/light.png";
import corner from "../images/mobile/corner.png";


function IntroDesktop() {
    gsap.config({
        nullTargetWarn: false
    })
    const containerRef = useRef(null)
    const q = gsap.utils.selector(containerRef)
    const langFullPanelRef = useRef(null)
    const langRef = useRef(null)
    const tl_intro = useRef(null)
    const tl_langPanel_Ref = useRef(null)
    const tl_start = useRef(null)
    const tl_Ref = useRef(null)

    const [start, setStart] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const imgs = [
        path_1,
        path_2,
        path_3,
        path_4,
        path_5,
        path_6,
        path_7,
        path_8,
        path_9,
        path_10,
        path_11,
        path_12,
        path_13,
        lines,
        path_left_top,
        path_left_lite,
        path_right_bottom,
        path_right_top,
        player,
        right_top_corner,
        tablo,
        tablo_down_brizg,
        tablo_left_top_brizg,
        tablo_right_top_brizg,
        tablo_bg_lines,
        tablo_lenti,
        vorota,
        vorota_after,
        vorota_uzor,
        zritel,
        left_light,
        bg,
        ball,
        ball_oreol,
        france,
        arrowDown,
        path,
        light,
        corner,
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
                const maxX = window.innerWidth / 3

                const minY = window.innerHeight;
                const maxY = window.innerHeight / 2;

                const minSize = window.innerHeight / 50;
                const maxSize = window.innerHeight * 4 / 50;

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
                    .to(q(".scene"), {opacity: 1, scale: 2, xPercent: -80, yPercent: 20, duration: 1, ease: "back"})
                    .fromTo(q(".bg"), {yPercent: 100}, {yPercent: 0, duration: 1, ease: "back"}, "<+0.2")
                    .fromTo(q(".right_top_corner"), {scale: 0, yPercent: -20, xPercent: 20},
                        {scale: 1, yPercent: 0, xPercent: 0, duration: 1, ease: "power3.inOut"}, "<+=0.2")
                    .fromTo(q(".vorota"), {xPercent: 50}, {xPercent: 0, duration: 1, ease: "back"}, "<+=0.2")
                    .to(q(".scene"), {scale: 1, xPercent: 0, yPercent: 0, duration: 1, ease: "power3.inOut"})
                    .fromTo(q(".tablo"), {yPercent: -150, xPercent: -20}, {
                        yPercent: 0,
                        xPercent: 0,
                        duration: 1,
                        ease: "back"
                    }, "<+=0.2")
                    .fromTo(q(".tablo_lenti"), {yPercent: -250, xPercent: -20}, {
                        yPercent: 0,
                        xPercent: 0,
                        duration: 1,
                        ease: "none"
                    }, "<+=0.2")
                    .fromTo(q(".tablo_right_top_brizg"),
                        {opacity: 0, xPercent: -8},
                        {opacity: 1, xPercent: 0, duration: 0.5, ease: "back"}, "<+=0.2")
                    .fromTo(q(".tablo_down_brizg"),
                        {opacity: 0, yPercent: -20},
                        {opacity: 1, yPercent: 0, duration: 0.5, ease: "back"}, "<+=0.2")
                    .fromTo(q(".tablo_bg_lines"),
                        {opacity: 0, yPercent: -30},
                        {yPercent: 0, opacity: 1, duration: 1, ease: "power4.inOut"}, "<+=0.2")
                    .fromTo([".left_light1", ".left_light2", ".left_light3"],
                        {xPercent: -100, yPercent: -100},
                        {xPercent: 0, yPercent: 0, stagger: 0.2, duration: 1}, "<+=0.2")
                    .fromTo(q(".confetti"), {opacity: 0},
                        {opacity: 1, duration: 3}, "<+=0.2")
                    .fromTo(q(".player"),
                        {opacity: 0, rotation: -30, yPercent: 20, xPercent: -20},
                        {opacity: 1, rotation: 0, yPercent: 0, xPercent: 0, duration: 1, ease: "back"}, "<+0.2")
                    .fromTo(q(".path"), {opacity: 0}, {opacity: 1, duration: 0.3, stagger: 0.1, ease: "back"}, "<+=0.2")
                    .fromTo(q(".path_left_lite"),
                        {scale: 0, xPercent: -30, yPercent: 200},
                        {scale: 1, xPercent: 0, yPercent: 0, duration: 0.5, ease: "power3.Out"}, "<-=0.2")
                    .to(".path_right_top", {opacity: 1, y: 0, x: 0, duration: 0.5, ease: "power3.Out"}, "<+=0.2")
                    .to(".path_left_top", {opacity: 1, y: 0, x: 0, duration: 0.5, ease: "power3.Out"}, "<+=0.2")
                    .fromTo(q(".path_right_bottom"),
                        {scale: 0, xPercent: 50, yPercent: 200},
                        {scale: 1, xPercent: 0, yPercent: 0, duration: 0.5, ease: "power3.Out"}, "<+=0.1")
                    .fromTo(q(".ball"),
                        {opacity: 0},
                        {opacity: 1, duration: 0.3, ease: "back"}, "<+=1.3")
                    .fromTo(q(".ball_oreol"),
                        {opacity: 0},
                        {opacity: 1, duration: 0.3, ease: "back"}, "<+=0.2")
                    .fromTo(q(".vorota_after"), {opacity: 0}, {opacity: 1, duration: 0.2}, "<+=0")
                    .fromTo(q(".vorota_uzor"),
                        {scale: 0},
                        {scale: 1, duration: 0.5, ease: "back"}, "<+=0.4")
                    .fromTo(q(".zritel"),
                        {xPercent: 30, yPercent: 30},
                        {xPercent: 0, yPercent: 0, duration: 1, ease: "back"}, "<-=0.5")
                    .to(".pil", {opacity: 1, y: 0, x: 0, duration: 1, ease: "back"}, "<-=0.5")
                    .fromTo(q(".goButton"),
                        {opacity: 0, yPercent: 200,},
                        {opacity: 1, yPercent: 0, duration: 1, ease: "back"}, "<")
                    .to('.appears', {opacity: 1, duration: 1})


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
        tl_start.current = gsap.timeline({
            paused: true,
            onComplete: () => {
                gsap.to(".player", {y: -20, duration: 5, repeat: -1, yoyo: true, ease: "none"})
            },
            onReverseComplete: () => {
                setStart(false)
            }
        })
            .to(".ball_oreol", {top: '-20vh', autoAlpha: 0, duration: 2, ease: "power4.inOut"})
            .to(".zritel", {top: '50vh', duration: 1, ease: "power4.inOut"}, "<")
            .to(".buy_wrap", {top: 0, duration: 2, ease: "power4.inOut"}, "<")
            .to(".left_light1", {top: '-20vh', autoAlpha: 0, duration: 2, ease: "power4.inOut"}, "<")
            .to(".left_light2", {top: '-20vh', autoAlpha: 0, duration: 2, ease: "power4.inOut"}, "<")
            .to(".left_light3", {top: '-20vh', autoAlpha: 0, duration: 2, ease: "power4.inOut"}, "<")
            .to(".ball_oreol", {top: '-20vh', autoAlpha: 0, duration: 2, ease: "power4.inOut"}, "<")
            .to(".ball", {top: '-20vh', autoAlpha: 0, duration: 2, ease: "power4.inOut"}, "<")
            .to(".tablo", {top: '-20vh', duration: 2, ease: "power4.inOut"}, "<")
            .to(".vorota_uzor", {top: '-20vh', duration: 2, ease: "power4.inOut"}, "<")
            .to(".vorota", {top: '-20vh', duration: 2, ease: "power4.inOut"}, "<")
            .to(".path", {top: '-20vh', duration: 2, ease: "power4.inOut"}, "<")
            .to(".bg", {top: '-20vh', duration: 2, ease: "power4.inOut"}, "<")
            .to(".right_top_corner", {top: '-20vh', duration: 2, ease: "power4.inOut"}, "<")
            .to(".tablo_lenti", {top: '-20vh', duration: 2, ease: "power4.inOut"}, "<")
            .to(".tablo_right_top_brizg", {top: '-20vh', duration: 2, ease: "power4.inOut"}, "<")
            .to(".tablo_left_top_brizg", {top: '-20vh', duration: 2, ease: "power4.inOut"}, "<")
            .to(".tablo_down_brizg", {top: '-20vh', duration: 2, ease: "power4.inOut"}, "<")
            .to(".confetti", {top: '-20vh', duration: 2, ease: "power4.inOut"}, "<")
            .to(".goButton", {zIndex: 9}, "<+=0.5")


        tl_start.current.play()
    }

    const back_to_main = () => {
        tl_start.current.reverse()

    }


    useEffect(() => {
        tl_Ref.current = gsap.timeline({paused: true})
        tl_Ref.current.to(".go_title", {opacity: 0, y: 50, ease: 'none'})
        tl_Ref.current.to(".lang_panel", {autoAlpha: 1, top: '24vh', ease: 'back'})
    }, [])

    useEffect(() => {
        tl_langPanel_Ref.current = gsap.timeline({paused: true})
        tl_langPanel_Ref.current.to(".go_title", {opacity: 0, y: 50, ease: 'none'})
    }, [])

    const langClick = () => {
        if (start) {
            openLangPanel()
        } else {
            if (!langRef.current.classList.contains('active')) {
                langRef.current.classList.add('active')
                tl_Ref.current.play()
            } else {
                langRef.current.classList.remove('active')
                tl_Ref.current.reverse()
            }
        }
    }
    const subLangClick = () => {
        tl_Ref.current.reverse()
    }


    const openLangPanel = () => {
        if (!langFullPanelRef.current.classList.contains("active")) {
            langFullPanelRef.current.classList.add("active")
            gsap.timeline().to(".lang_full_panel", {autoAlpha: 1, duration: 0.3})
                .to(".panel_l", {marginTop: 0, opacity: 1, duration: 1, ease: "back"}, "<")
                .fromTo(".liLang", {opacity: 0}, {opacity: 1, duration: 1, stagger: 0.05, ease: "back"}, "<")
        } else {
            langFullPanelRef.current.classList.remove("active")
        }
        //
    }

    const closeLangPanel = () => {
        if (langFullPanelRef.current.classList.contains("active")) {
            gsap.timeline().to(".panel_l", {marginTop: 100, duration: 1, ease: "back"})
                .to(".lang_full_panel", {autoAlpha: 0, duration: 1.2}, "<")
            langFullPanelRef.current.classList.remove("active")
            langRef.current.classList.remove('active')
            tl_Ref.current.reverse()
        }
    }

    const wrapClosePanel = (e) => {
        if (e.target.classList.contains("lang_full_wrap")) {
            gsap.timeline().to(".panel_l", {marginTop: 100, duration: 1, ease: "back"})
                .to(".lang_full_panel", {autoAlpha: 0, duration: 1.2}, "<")
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
                            <div className="next_arrow" onClick={openLangPanel}>
                                <img src={arrowDown} alt=""/>
                            </div>
                        </div>
                        <img src={bg} className="bg img" alt=""/>
                        <img src={pil} className="pil img" alt=""/>
                        <img src={right_top_corner} className="right_top_corner img" alt=""/>
                        <img src={vorota} className="vorota img" alt=""/>
                        <img src={vorota_after} className="vorota_after img" alt=""/>
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
                            <BuyForm back_to_main={back_to_main}/>
                        </div>
                        <img src={player} className="player img" alt=""/>
                        <img src={zritel} className="zritel img" alt=""/>
                        <img src={left_light} className="left_light1 img" alt=""/>
                        <img src={left_light} className="left_light2 img" alt=""/>
                        <img src={left_light} className="left_light3 img" alt=""/>
                        <img src={ball_oreol} className="ball_oreol img" alt=""/>
                        <img src={ball} className="ball img" alt=""/>

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
                                                        <li key={index} className="liLang" onClick={closeLangPanel}>
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
                )
            }
        </div>
    );
}

export default IntroDesktop;