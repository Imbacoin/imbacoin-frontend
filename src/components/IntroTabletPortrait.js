import React, {useEffect, useRef, useState} from "react";
import gsap from "gsap";
/*import path_1 from "../images/tablet_P/path_1.png"
import path_2 from "../images/tablet_P/path_2.png"
import path_3 from "../images/tablet_P/path_3.png"
import path_4 from "../images/tablet_P/path_4.png"
import path_5 from "../images/tablet_P/path_5.png"
import path_6 from "../images/tablet_P/path_6.png"
import path_7 from "../images/tablet_P/path_7.png"
import path_8 from "../images/tablet_P/path_8.png"
import path_9 from "../images/tablet_P/path_9.png"
import path_10 from "../images/tablet_P/path_10.png"
import path_11 from "../images/tablet_P/path_11.png"
import path_12 from "../images/tablet_P/path_12.png"
import path_13 from "../images/tablet_P/path_13.png"*/
import path_left_lite from "../images/tablet_P/path_left_lite.png"
import path_right_bottom from "../images/tablet_P/path_right_bottom.png"
import player from "../images/tablet_P/player.png"
import right_top_corner from "../images/tablet_P/right_top_corner.png"
import tablo from "../images/tablet_P/tablo.png"
import tablo_down_brizg from "../images/tablet_P/tablo_down_brizg.png"
import tablo_right_top_brizg from "../images/tablet_P/tablo_right_top_brizg.png"
import tablo_bg_lines from "../images/tablet_P/tablo_bg_lines.png"
import tablo_lenti from "../images/tablet_P/tablo_lenti.png"
import vorota from "../images/tablet_P/vorota.png"
import vorotaopen from "../images/tablet_P/vorotaopen.png"
import vorota_uzor from "../images/tablet_P/vorota_uzor.png"
import zritel from "../images/tablet_P/zritel.png"
import bg from "../images/tablet_P/bg.png"
import ball from "../images/tablet_P/ball.png"
import ball_oreol from "../images/tablet_P/ball_oreol.png"
import left_light from "../images/tablet_P/left_light.png"
import GoButton from "./GoButton";
import BuyForm from "./BuyForm";
import france from "../images/lang/france.png";
import arrowDown from "../images/lang/arrowDown.svg";
import SearchBar from "./searchBar";
import Chat from "./Chat";
import path_all from "../images/tablet_P/path_all.png";
import SocialButtons from "./SocialButtons";
import '../AppTabletPortrait.scss';


function IntroTabletPortrait() {
    gsap.ticker.lagSmoothing(1000, 16)
    const containerRef = useRef(null)
    const q = gsap.utils.selector(containerRef)
    const langFullPanelRef = useRef(null)
    const langRef = useRef(null)
    const tl_langPanel_Ref = useRef(null)
    const tl_start = useRef(null)
    const tl_Ref = useRef(null)
    const tl_intro = useRef(null)

    const [start,setStart] = useState(false)
    
    const cnElems = document.getElementsByClassName("root").innerHeight;
    const wHeight = window.innerHeight;

    useEffect(()=>{
        const circles = q('.circle')
        const squares = q('.squares')

        const minX = 0;
        const maxX = containerRef.current.getBoundingClientRect().width

        const minY = window.innerHeight;
        const maxY =  window.innerHeight/2;

        const minSize = window.innerHeight/100;
        const maxSize = window.innerHeight*4/100;

        const minDelay = 0;
        const maxDelay = 2;

        const minOpacity = 1.;
        const maxOpacity = 1.0;

        const minDuration = 1;
        const maxDuration = 3;

        const minRotation = 15;
        const maxRotation = 60;

        const suspenses =  q('.suspense')
        
        suspenses.forEach(el => {
            el.style.setProperty('visibility', 'visible');
       })

        circles.forEach(el=>{
            animateCircle(el, 0);
        })

        squares.forEach(el=>{
            animateCircle(el, 1);
        })

        // $(window).resize(onResize);

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

        gsap.to(".left_light2",{rotation: -10, transformOrigin: '0 0', duration: 15, repeat: -1, yoyo: true, ease: "none"})
       // gsap.to(".left_light2",{rotation: 20, transformOrigin: '0 0', duration: 17, repeat: -1, yoyo: true, ease: "none"})
        gsap.to(".left_light3",{rotation: 10, transformOrigin: '0 0', duration: 13, repeat: -1, yoyo: true, ease: "none"})
 
        //const anim_path =  gsap.timeline({ paused:true}).fromTo("#circleMask", 1, {scaleY:0}, {scaleY:1}, '<+=3.5' );

        tl_intro.current = gsap.timeline()
            .set('.intro_wrap', { height: wHeight})
            .to(q(".scene"), {scale: 2, xPercent: -80, yPercent: 20, duration: 1, ease: "back"})
            .fromTo(q(".bg"), { yPercent: 100},{ yPercent: 0, duration: 1, ease: "back"},"<+0.2")
            .fromTo(q(".right_top_corner"), {scale: 0, yPercent: -20, xPercent:20},
                {scale: 1,  yPercent: 0, xPercent:0, duration: 1, ease: "power3.inOut"}, "<+=0.2")
            .fromTo(q(".vorota,.vorotaopen"), { xPercent: 100},{ xPercent: 0, duration: 1, ease: "back"}, "<+=0.2")
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
           // .fromTo(q(".path"), {opacity: 0},{opacity: 1, duration: 0.3, stagger: 0.1, ease:"back"}, "<+=0.2")
           .fromTo(q("#circleMask"), {scaleX:0}, {repeat:-1, repeatDelay:2,scaleX:1,duration: 0.4}, '<+=0.3' )
           .fromTo(q(".path_left_lite"),
                { scale:0, xPercent: -10, yPercent:50},
                {scale: 1, xPercent: 0, yPercent: 0, duration: 0.5, ease: "power3.Out"}, "<=0.5")
            .fromTo(q(".path_right_bottom"),
                { scale:0, xPercent: -10, yPercent: 200},
                { scale:1, xPercent: 0, yPercent: 0,duration: 0.5, ease: "power3.Out"}, "<+=0.6")
            .fromTo(q(".ball"),
                {opacity: 0},
                {opacity: 1, duration: 0.3, ease: "back"}, "<-=0.5")
            .fromTo(q(".ball_oreol"),
                {opacity: 0},
                {opacity: 1, duration: 0.3, ease: "back"}, "<-=0.2")
            .fromTo(q(".vorota"),
                {opacity: 1},
                {opacity: 0, duration: 0.2, ease: "back"}, "<+=0.2")
            .fromTo(q(".vorotaopen"),
                {opacity: 0},
                {opacity: 1, duration: 0.2, ease: "back"}, "<-=0.2")
            .fromTo(q(".vorota_uzor"),
                {scale: 0},
                {scale: 1, duration: 0.5, ease:"back"}, "<+=0.4")
            .fromTo(q(".zritel"),
                { xPercent: 100, yPercent: 30},
                { xPercent: 0, yPercent: 0, duration: 1, ease: "back"}, "<-=0.5")
            .fromTo(q(".goButton"),
                {opacity:0, yPercent: 20, },
                {opacity:1, yPercent: 0, duration: 1,ease: "back"}, "<")
            .to('.appears', {opacity: 1, duration: 1})
           // anim_path.play()

        return ()=>tl_intro.current.kill();
    },[])

    const startForm = ()=>{
        setStart(true)
        tl_start.current = gsap.timeline({paused:true,
            onComplete:()=>{
                gsap.to(".player",{y:-20, duration: 5, repeat:-1, yoyo: true, ease: "none" })
            },
            onReverseComplete:()=>{setStart(false)}
        })
            .set(".player",{zIndex:22})
            .set(".zritel",{zIndex: 0})
            .set(".buy_wrap",{top:0})
            .to(".buy_form_wrap",{ opacity: 1, duration: 1, ease:"power4.inOut"})
            .to(".buy_form_wrap",{ background: 'rgba(13, 19, 53, 0.2)',
                backdropFilter: 'blur(6px)', duration: 2, ease:"power4.inOut"}, "<")
            .to(".middle_box",{ top: '30vh', duration: 2, ease:"power4.inOut"}, "<")
            .to(".goButton",{ bottom:"-15vh"}, "<")
            .to(".social_buttons_wrap,.chat_wrap",{ bottom:"-15vh"}, "<")
           
            

        tl_start.current.play()
    }
    const back_to_main = () => {
        tl_start.current.reverse()

    }
    useEffect(() => {
        tl_Ref.current = gsap.timeline({paused: true})
        tl_Ref.current.to(".lang_panel", {autoAlpha: 1, bottom: '+=6vh', ease: 'power3.inOut'})
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
                .fromTo(".liLang",{opacity:0}, { opacity: 1, duration: 1, ease: "back"},"<")
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
        <div className="intro_wrap" ref={containerRef}>
            <div className="scene pp_relative">
                <img src={bg} className="bg img" alt=""/>
                <img src={right_top_corner} className="right_top_corner img" alt=""/>
                <img src={vorota} className="vorota img" alt=""/>
                <img src={vorotaopen} className="vorotaopen img" alt=""/>
                <img src={vorota_uzor} className="vorota_uzor img" alt=""/>
                <img src={path_left_lite} className="path_left_lite img" alt=""/>
                <img src={path_right_bottom} className="path_right_bottom img" alt=""/>

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
                <img src={tablo_right_top_brizg} className="tablo_right_top_brizg img" alt=""/>
                <img src={tablo_down_brizg} className="tablo_down_brizg img" alt=""/>
                <img src={tablo_bg_lines} className="tablo_bg_lines img" alt=""/>
                <img src={tablo_lenti} className="tablo_lenti img" alt=""/>
                <img src={tablo} className="tablo img" alt=""/>

                <svg id="portrait_path"  className="suspense" data-name="Layer 1" width="100%" viewBox="0 0 168 331">
                    <defs>
                        <mask id="theMask"><rect id ="circleMask"  className="mask-a" x="1" y="1"   width="100%" height="100%"/></mask>
                    </defs>
                    <image mask="url(#theMask)" width="167" height="330" transform="translate(1)" href={path_all}/>

                </svg>

                <img src={left_light} className="left_light2 img" alt=""/>
                <img src={left_light} className="left_light3 img" alt=""/>
                <img src={ball_oreol} className="ball_oreol img" alt=""/>
                <img src={ball} className="ball img" alt=""/>

                <div className="buy_wrap">
                    <BuyForm back_to_main={back_to_main} />
                </div>
                <img src={player} className="player img" alt=""/>

            </div>
            
            <img src={zritel} className="zritel img" alt=""/>


            <div className="appears">
                    <Chat />
                    <SocialButtons />
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
    );
}

export default IntroTabletPortrait;