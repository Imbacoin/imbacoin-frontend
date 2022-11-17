import IntroDesktop from "./IntroDesktop";
import IntroMobile from "./IntroMobile";
import {useMediaQuery} from 'react-responsive'
import IntroTabletPortrait from "./IntroTabletPortrait";
import IntroTabletLandscape from "./IntroTabletLandscape";
import SocialButtons from "./SocialButtons";
import Chat from "./Chat";
import {gsap} from "gsap";

function Home() {

    const Desktop = ({children}) => {
        const isDesktop = useMediaQuery({minWidth: 1300})
        return isDesktop ? children : null
    }
    const TabletPortrait = ({children}) => {
        const isTablet = useMediaQuery({minWidth: 540, maxWidth: 1299, orientation: "portrait"})
        return isTablet ? children : null
    }
    const TabletLandscape = ({children}) => {
        const isTablet = useMediaQuery({minWidth: 300, maxWidth: 1299, orientation: "landscape"})
        
        return isTablet ? children : null
    }

    const Mobile = ({children}) => {
        const isMobile = useMediaQuery({maxWidth: 540})
         
        return isMobile ? children : null
    }
  return(

<div>
    <Desktop>
    <IntroDesktop/>
    <div className="appears">
        <SocialButtons/>
        <Chat/>
    </div>
</Desktop>

<TabletPortrait>
    <IntroTabletPortrait/>
</TabletPortrait>

<TabletLandscape>
    <IntroTabletLandscape/>
    <div className="appears">
        <Chat/>
        <SocialButtons/>
    </div>
</TabletLandscape>

<Mobile>
    <IntroMobile/>
    <div className="appears">
        <Chat/>
        <SocialButtons/>
    </div>
</Mobile>
</div>
  )
}

export default Home;