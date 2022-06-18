import pruBack from '../../images/darkPru.png';
import {useEffect, useRef, useState} from "react";
import "./index.css";
import blank from "../../images/blank.png";
import pruA from "../../images/pru_A.png";
import pruB from "../../images/pru_B.png";
import pruC from "../../images/pru_C.png";
import pruD from "../../images/pru_D.png";
import pruE from "../../images/pru_E.png";
import pruF from "../../images/pru_F.png";
import pruG from "../../images/pru_G.png";
import pruH from "../../images/pru_H.png";
import pruI from "../../images/pru_I.png";
import pruJ from "../../images/pru_J.png";
import pruK from "../../images/pru_K.png";
import pruL from "../../images/pru_L.png";
import pruM from "../../images/pru_M2.png";
import pruN from "../../images/pru_N2.png";
import pruO from "../../images/pru_O.png";
import pruP from "../../images/pru_P.png";
import pruQ from "../../images/pru_Q.png";
import pruR from "../../images/pru_R.png";
import pruS from "../../images/pru_S.png";
import pruT from "../../images/pru_T.png";
import pruU from "../../images/pru_U.png";
import pruV from "../../images/pru_V.png";
import pruW from "../../images/pru_W.png";
import pruX from "../../images/pru_X.png";
import pruY from "../../images/pru_Y.png";
import pruZ from "../../images/pru_Z.png";

const Prudify = () => {
 const [windowAlpha, setWindowAlpha] = useState('')
 const userInputAlpha = useRef();

 var windowsImages = [blank,blank,blank,blank,blank,blank]

 for(let i = 0; i <= 5; i++) {
    switch(windowAlpha.charAt(i).toLowerCase()) {
        case "a":
            windowsImages[i] = pruA;
            break;
        case "b":
            windowsImages[i] = pruB;
            break;
        case "c":
            windowsImages[i] = pruC;
            break;
        case "d":
            windowsImages[i] = pruD;
            break;
        case "e":
            windowsImages[i] = pruE;
            break;
        case "f":
            windowsImages[i] = pruF;
            break;
        case "g":
            windowsImages[i] = pruG;
            break;
        case "h":
            windowsImages[i] = pruH;
            break;
        case "i":
            windowsImages[i] = pruI;
            break;
        case "j":
            windowsImages[i] = pruJ;
            break;
        case "k":
            windowsImages[i] = pruK;
            break;
        case "l":
            windowsImages[i] = pruL;
            break;
        case "m":
            windowsImages[i] = pruM;
            break;
        case "n":
            windowsImages[i] = pruN;
            break;
        case "o":
            windowsImages[i] = pruO;
            break;
        case "p":
            windowsImages[i] = pruP;
            break;
        case "q":
            windowsImages[i] = pruQ;
            break;
        case "r":
            windowsImages[i] = pruR;
            break;
        case "s":
            windowsImages[i] = pruS;
            break;
        case "t":
            windowsImages[i] = pruT;
            break;
        case "u":
            windowsImages[i] = pruU;
            break;
        case "v":
            windowsImages[i] = pruV;
            break;
        case "w":
            windowsImages[i] = pruW;
            break;
        case "x":
            windowsImages[i] = pruX;
            break;
        case "y":
            windowsImages[i] = pruY;
            break;
        case "z":
            windowsImages[i] = pruZ;
            break;
        case "":
            windowsImages[i] = blank;
            break;
        default:
            windowsImages[i] = blank;
    }

 }

  useEffect(() => {
      localStorage.setItem('windowAlpha', windowAlpha)
  }, [windowAlpha])

 return (
   <div>
       <link href="index.css" rel="stylesheet"/>
       <div style={{position: 'relative', top: '0', left: '0'}}>
           <img style={{position: 'absolute', width: '730px', height: '470px', left: '0px', top: '12px'}} src={windowsImages[3]}/>
           <img style={{position: 'absolute', width: '730px', height: '470px', left: '0px', top: '-96px'}} src={windowsImages[0]}/>
           <img style={{position: 'absolute', width: '730px', height: '470px', left: '52px', top: '-94px'}} src={windowsImages[1]}/>
           <img style={{position: 'absolute', width: '730px', height: '470px', left: '102px', top: '-92px'}} src={windowsImages[2]}/>
           <img style={{position: 'absolute', width: '730px', height: '470px', left: '52px', top: '14px'}} src={windowsImages[4]}/>
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