import React, {useState} from 'react';
import './App.css';
import Footer from "./components/footer";
import Nav from "./components/nav";
import Search from "./components/search";
import Tabs from "./components/tabs";
import Crypto from "./components/crypto";
import Animation from "./components/animation";
import {BrowserRouter} from "react-router-dom";
import Todos from "./components/todos";
import Citation from "./components/citation";
import OverLayer from "./components/overlayer";
function App() {
    const [isOverlayVisible, setIsOverlayVisible] = useState<boolean>(false);
    const [purpose, setPurpose] = useState<string>("");
    const handleOverlayVisibility = (visible: boolean) => {
        setIsOverlayVisible(visible);
    };

  return (

      <BrowserRouter>
          {isOverlayVisible && <OverLayer handleOverlayVisibility={handleOverlayVisibility} purpose={purpose}/>}
          <div className="App">
              <Nav />
              <div className="Main">
                  <Crypto handleOverlayVisibility={handleOverlayVisibility} purpose={setPurpose}/>
                  <div className="MainCenter">
                      <div className="MainCenterTop">
                          <Animation />
                          <Citation text={"You have been hacked"}/>
                          <Search />
                      </div>
                      <Tabs handleOverlayVisibility={handleOverlayVisibility} purpose={setPurpose}/>
                  </div>
                  <div className="MainRight">
                      <Citation text={"Todo Hub"}/>
                      <Todos handleOverlayVisibility={handleOverlayVisibility} purpose={setPurpose}/>
                  </div>
              </div>

              <Footer />
          </div>
      </BrowserRouter>

  );
}

export default App;
