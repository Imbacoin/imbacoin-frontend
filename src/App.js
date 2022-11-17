import React, {useEffect} from "react";
import './App.scss'; 
/*import IntroDesktop from "./components/IntroDesktop";
import IntroMobile from "./components/IntroMobile/IntroMobile";
import {useMediaQuery} from 'react-responsive'
import IntroTabletPortrait from "./components/IntroTabletPortrait";
import IntroTabletLandscape from "./components/IntroTabletLandscape"; */
import Home from "./components/Home";
import Result from "./components/Result";
import Fail from "./components/Fail";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';

function App() {
    

    return (
        <Router>
            <div className="App">
              
                <Routes>
                 <Route exact path='/' element={ <Home />}></Route>
                 <Route exact path='/result/:invoiceid' element={< Result />}></Route>
                 <Route exact path='/fail' element={< Fail />}></Route>
                 <Route path="*" element={<Home />} />
          </Routes>
            </div>
            </Router>
    );
}

export default App;

 