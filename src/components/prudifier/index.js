import pruBack from '../../images/darkPru.png';
import {useEffect, useRef, useState} from "react";
import "./index.css";
import blank from "../../images/blank.png";
import pruA from "../../images/pru_A.png";
import pruB from "../../images/pru_B.png";

const Prudify = () => {
 const [windowAlpha, setWindowAlpha] = useState('')
 const userInputAlpha = useRef();
 var windowsImages = [blank,blank,blank,blank,blank,blank]
 for(let i = 0; i <= 5; i++) {
    console.log("Current WindowAlpha: " + windowAlpha );
    console.log("Current windowsImages:" + windowsImages );
    switch(windowAlpha.substr(i, i + 1)) {
        case "a":
            windowsImages[i] = pruA;
            break;
        case "b":
            windowsImages[i] = pruB;
            break;
        case "":
            windowsImages[i] = blank;
            break;
        default:
            windowsImages[i] = blank;
    }
 }

 return (
   <div>
       <link href="index.css" rel="stylesheet"/>
       <div style={{position: 'relative', top: '0', left: '0'}}>
           <img style={{position: 'absolute', width: '730px', height: '470px', left: '0px', top: '12px'}} src={windowsImages[3]}/>
           <img style={{position: 'absolute', width: '730px', height: '470px', left: '0px', top: '-96px'}} src={windowsImages[0]}/>
           <img style={{position: 'absolute', width: '730px', height: '470px', left: '50px', top: '-94px'}} src={windowsImages[1]}/>
           <img style={{position: 'absolute', width: '730px', height: '470px', left: '102px', top: '-90px'}} src={windowsImages[2]}/>
           <img style={{position: 'absolute', width: '730px', height: '470px', left: '50px', top: '14px'}} src={windowsImages[4]}/>
           <img style={{position: 'absolute', width: '730px', height: '470px', left: '102px', top: '16px'}} src={windowsImages[5]}/>
       </div>
       <img style={{alignSelf: 'center', height: '492px', width: '720px'}} src={pruBack} alt="logo" />
        <input ref={userInputAlpha}
               onChange={event => setWindowAlpha('' + event.target.value)}
               className="search-float"
               type="text"
               placeholder="Prudify..."
               title="Prudifier"/>
   </div>
 );
};
export default Prudify;