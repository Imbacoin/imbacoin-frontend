import React, {useEffect} from "react";
import gsap from "gsap";
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
import lines from "../images/lines.png"
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
import vorota_uzor from "../images/vorota_uzor.png"
import zritel from "../images/zritel.png"
import left_light from "../images/left_light.png"
import bg from "../images/bg.png"
import ball from "../images/ball.png"
import ball_oreol from "../images/ball_oreol.png"

function IntroAnimation() {

    useEffect(()=>{

        // gsap.registerEffect({
        //     name:"counter",
        //     extendTimeline:true,
        //     defaults:{
        //         end:0,
        //         duration:0.5,
        //         ease:"power1",
        //         increment:1,
        //     },
        //     effect: (targets, config) => {
        //         let tl = gsap.timeline()
        //         let num = targets[0].innerText.replace(/\,/g,'')
        //         targets[0].innerText = num
        //
        //         tl.to(targets, {duration:config.duration,
        //             innerText:config.end,
        //             //snap:{innerText:config.increment},
        //             modifiers:{
        //                 innerText:function(innerText){
        //                     return  gsap.utils.snap(config.increment, innerText).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        //
        //                 }
        //             },
        //             ease:config.ease}, 0)
        //
        //         return tl
        //     }
        // })

        // CustomEase.create("custom", "M0,0 C0,0 0.014,0.136 0.021,0.226 0.04,0.48 0.051,0.551 0.051,0.551 0.051,0.551 0.061,0.701 0.071,0.798 0.078,0.869 0.093,0.977 0.093,0.977 0.093,0.977 0.098,1.011 0.104,1.03 0.107,1.04 0.111,1.048 0.116,1.054 0.117,1.056 0.121,1.057 0.123,1.056 0.126,1.054 0.13,1.05 0.132,1.046 0.139,1.03 0.144,1.018 0.148,1 0.15,0.987 0.23,0.777 0.282,0.78 0.33,0.782 0.353,0.965 0.383,1.012 0.389,1.022 0.396,1.028 0.405,1.035 0.412,1.04 0.419,1.043 0.428,1.046 0.433,1.047 0.437,1.046 0.443,1.045 0.448,1.044 0.453,1.043 0.458,1.041 0.486,1.025 0.503,1.012 0.531,0.996 0.539,0.992 0.545,0.99 0.554,0.987 0.562,0.985 0.568,0.984 0.576,0.983 0.587,0.983 0.595,0.983 0.606,0.985 0.636,0.99 0.653,0.996 0.683,1.001 0.698,1.004 0.708,1.005 0.723,1.005 0.779,1.004 0.812,0.999 0.87,0.998 0.92,0.997 1,1 1,1 ");

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
           .to(".player",{opacity: 1, rotation:0, y: 0, x: 0, duration:1, ease: "back"},"<+0.5")
           .to(".ball",{opacity: 1, y: 0, x: 0, duration:1, },"<+=0")
           .fromTo(".path",{opacity:0, x:-10, y: 10},{opacity:1, x:0, y: 0, duration: 0.2, stagger:0.05, ease: "power3.inOut"},"<+=0.2")
           .to(".path_left_lite",{opacity:1, y: 0, x: 0, duration: 0.5, ease: "power3.Out"},"<-=0.1")
           .to(".path_right_bottom",{opacity:1, y: 0, x: 0, duration: 0.5, ease: "power3.Out"},"<+=0.1")
           .to(".path_right_top",{opacity:1, y: 0, x: 0, duration: 0.5, ease: "power3.Out"},"<+=0.2")
           .to(".path_left_top",{opacity:1, y: 0, x: 0, duration: 0.5, ease: "power3.Out"},"<+=0.3")
           .to(".ball_oreol",{opacity: 1,  y: 0, x: 0, duration:1,ease: "power4.inOut" },"<+=0.2")
           .to(".vorota_uzor",{opacity:1, y: 0, x: 0, duration: 1, ease: "power4.inOut"},"<+=0.2")
           .to(".zritel",{opacity:1, y: 0, x: 0, duration: 1, ease: "back"},"<-=0.5")
           .to(".ball_oreol",{opacity:0.5, duration:3, repeat:-1, yoyo: true, ease:"none" })
           .fromTo(".path",{opacity:0},{opacity:1,repeat:-1, repeatDelay: 2,  duration: 0.2, stagger:0.05, ease: "power3.inOut"},"<")



    },[])

    return (
        <div className="intro_wrap">
            <div className="scene">
                <img src={bg} className="bg" alt=""/>

                <img src={lines} className="lines" alt=""/>
                <img src={right_top_corner} className="right_top_corner" alt=""/>
                <img src={vorota} className="vorota" alt=""/>
                <img src={vorota_uzor} className="vorota_uzor" alt=""/>
                <img src={path_left_top} className="path_left_top" alt=""/>
                <img src={path_left_lite} className="path_left_lite" alt=""/>
                <img src={path_right_bottom} className="path_right_bottom" alt=""/>
                <img src={path_right_top} className="path_right_top" alt=""/>
                <img src={path_1} className="path" alt=""/>
                <img src={path_2} className="path" alt=""/>
                <img src={path_3} className="path" alt=""/>
                <img src={path_4} className="path" alt=""/>
                <img src={path_5} className="path" alt=""/>
                <img src={path_6} className="path" alt=""/>
                <img src={path_7} className="path" alt=""/>
                <img src={path_8} className="path" alt=""/>
                <img src={path_9} className="path" alt=""/>
                <img src={path_10} className="path" alt=""/>
                <img src={path_11} className="path" alt=""/>
                <img src={path_12} className="path" alt=""/>
                <img src={path_13} className="path" alt=""/>
                <img src={tablo_right_top_brizg} className="tablo_right_top_brizg" alt=""/>
                <img src={tablo_left_top_brizg} className="tablo_left_top_brizg" alt=""/>
                <img src={tablo_down_brizg} className="tablo_down_brizg" alt=""/>
                <img src={tablo_bg_lines} className="tablo_bg_lines" alt=""/>
                <img src={tablo_lenti} className="tablo_lenti" alt=""/>
                <img src={tablo} className="tablo" alt=""/>
                <img src={player} className="player" alt=""/>
                <img src={zritel} className="zritel" alt=""/>
                <img src={left_light} className="left_light1" alt=""/>
                <img src={left_light} className="left_light2" alt=""/>
                <img src={left_light} className="left_light3" alt=""/>
                <img src={ball_oreol} className="ball_oreol" alt=""/>
                <img src={ball} className="ball" alt=""/>
            </div>
        </div>
    );
}

export default IntroAnimation;