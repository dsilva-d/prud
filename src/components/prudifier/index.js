import pruBack from '../../images/darkPru.png';
import {useEffect, useRef, useState} from "react";
import "./index.css";
import blank from "../../images/blank.png";
import smallBlank from "../../images/smallBlank.png";
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
import smallA from "../../images/smallA.png";

const Prudify = () => {
 const [windowAlpha, setWindowAlpha] = useState('');
 const userInputAlpha = useRef();

  useEffect(() => {
      localStorage.setItem('windowAlpha', windowAlpha)
  }, [windowAlpha])

 return (
   <div style={{ backgroundImage:`url(${pruBack})`}}>
   <div>
       <link href="index.css" rel="stylesheet"/>
       <div style={{position: 'relative', top: '0', left: '0', }}>
           {topRowRender(windowAlpha)}
           {bottomRowRender(windowAlpha)}
       </div>
       <img className="blank-pru" src={pruBack} alt="logo" />
        <input ref={userInputAlpha}
               onChange={event => setWindowAlpha('' + event.target.value)}
               className="search-float"
               type="text"
               placeholder="Enter your Pru-Text..."
               title="Prudifier"/>
   </div>
   </div>
 );
};


function topRowRender(windowAlpha) {

var windowsImagesRow1 = [blank,blank,blank,blank];
 var windowsImagesSmallRow1 = [smallBlank,smallBlank,smallBlank,smallBlank];

 for(let i = 0; i <= 3; i++) {
        switch(windowAlpha.charAt(i).toLowerCase()) {
            case "a":
                windowsImagesRow1[i] = pruA;
                windowsImagesSmallRow1[i] = smallA;
                break;
            case "b":
                windowsImagesRow1[i] = pruB;
                break;
            case "c":
                windowsImagesRow1[i] = pruC;
                break;
            case "d":
                windowsImagesRow1[i] = pruD;
                break;
            case "e":
                windowsImagesRow1[i] = pruE;
                break;
            case "f":
                windowsImagesRow1[i] = pruF;
                break;
            case "g":
                windowsImagesRow1[i] = pruG;
                break;
            case "h":
                windowsImagesRow1[i] = pruH;
                break;
            case "i":
                windowsImagesRow1[i] = pruI;
                break;
            case "j":
                windowsImagesRow1[i] = pruJ;
                break;
            case "k":
                windowsImagesRow1[i] = pruK;
                break;
            case "l":
                windowsImagesRow1[i] = pruL;
                break;
            case "m":
                windowsImagesRow1[i] = pruM;
                break;
            case "n":
                windowsImagesRow1[i] = pruN;
                break;
            case "o":
                windowsImagesRow1[i] = pruO;
                break;
            case "p":
                windowsImagesRow1[i] = pruP;
                break;
            case "q":
                windowsImagesRow1[i] = pruQ;
                break;
            case "r":
                windowsImagesRow1[i] = pruR;
                break;
            case "s":
                windowsImagesRow1[i] = pruS;
                break;
            case "t":
                windowsImagesRow1[i] = pruT;
                break;
            case "u":
                windowsImagesRow1[i] = pruU;
                break;
            case "v":
                windowsImagesRow1[i] = pruV;
                break;
            case "w":
                windowsImagesRow1[i] = pruW;
                break;
            case "x":
                windowsImagesRow1[i] = pruX;
                break;
            case "y":
                windowsImagesRow1[i] = pruY;
                break;
            case "z":
                windowsImagesRow1[i] = pruZ;
                break;
            case "":
                windowsImagesRow1[i] = blank;
                windowsImagesSmallRow1[i] = smallBlank;
                break;
            default:
                windowsImagesRow1[i] = blank;
                windowsImagesSmallRow1[i] = smallBlank;
        }
    }

    // If last letter in row has been assigned small or 3rd letter is not assigned
    if(windowAlpha.length < 4 || windowAlpha.charAt(2) === " ") {
    return(<>
       <img className="first-letter" src={windowsImagesRow1[0]}/>
       <img className="second-letter" src={windowsImagesRow1[1]}/>
       <img className="third-letter" src={windowsImagesRow1[2]}/>
       </>
       );
    } else {
    return(
    <>
       <img className="first-letter-small" src={windowsImagesSmallRow1[0]}/>
       <img className="second-letter-small" src={windowsImagesSmallRow1[1]}/>
       <img className="third-letter-small" src={windowsImagesSmallRow1[2]}/>
       <img className="fourth-letter-small" src={windowsImagesSmallRow1[3]}/>
       </>);
    }
}

function bottomRowRender(windowAlpha) {
    var windowsImagesRow2 = [blank,blank,blank,blank];
    var windowsImagesSmallRow2 = [smallBlank,smallBlank,smallBlank,smallBlank];

    if(windowAlpha.charAt(2) === " ") {
        windowAlpha = windowAlpha.substr(3, windowAlpha.length);
    } else {
        windowAlpha = windowAlpha.substr(4, windowAlpha.length);
    }
    for(let i = 0; i <= 3; i++) {
        switch(windowAlpha.charAt(i).toLowerCase()) {
            case "a":
                windowsImagesRow2[i] = pruA;
                windowsImagesSmallRow2[i] = smallA;
                break;
            case "b":
                windowsImagesRow2[i] = pruB;
                break;
            case "c":
                windowsImagesRow2[i] = pruC;
                break;
            case "d":
                windowsImagesRow2[i] = pruD;
                break;
            case "e":
                windowsImagesRow2[i] = pruE;
                break;
            case "f":
                windowsImagesRow2[i] = pruF;
                break;
            case "g":
                windowsImagesRow2[i] = pruG;
                break;
            case "h":
                windowsImagesRow2[i] = pruH;
                break;
            case "i":
                windowsImagesRow2[i] = pruI;
                break;
            case "j":
                windowsImagesRow2[i] = pruJ;
                break;
            case "k":
                windowsImagesRow2[i] = pruK;
                break;
            case "l":
                windowsImagesRow2[i] = pruL;
                break;
            case "m":
                windowsImagesRow2[i] = pruM;
                break;
            case "n":
                windowsImagesRow2[i] = pruN;
                break;
            case "o":
                windowsImagesRow2[i] = pruO;
                break;
            case "p":
                windowsImagesRow2[i] = pruP;
                break;
            case "q":
                windowsImagesRow2[i] = pruQ;
                break;
            case "r":
                windowsImagesRow2[i] = pruR;
                break;
            case "s":
                windowsImagesRow2[i] = pruS;
                break;
            case "t":
                windowsImagesRow2[i] = pruT;
                break;
            case "u":
                windowsImagesRow2[i] = pruU;
                break;
            case "v":
                windowsImagesRow2[i] = pruV;
                break;
            case "w":
                windowsImagesRow2[i] = pruW;
                break;
            case "x":
                windowsImagesRow2[i] = pruX;
                break;
            case "y":
                windowsImagesRow2[i] = pruY;
                break;
            case "z":
                windowsImagesRow2[i] = pruZ;
                break;
            case "":
                windowsImagesRow2[i] = blank;
                windowsImagesSmallRow2[i] = smallBlank;
                break;
            default:
                windowsImagesRow2[i] = blank;
                windowsImagesSmallRow2[i] = smallBlank;
        }
    }





    // If last letter in row has been assigned small
    if(!windowsImagesSmallRow2[3].toString().includes('small')) {
        return(<>
           <img className="fourth-letter" src={windowsImagesRow2[0]}/>
           <img className="fifth-letter" src={windowsImagesRow2[1]}/>
           <img className="sixth-letter" src={windowsImagesRow2[2]}/>
           </>
           );
    } else {
    console.log("Small!")
        return(
        <>
           <img className="fifth-letter-small" src={windowsImagesSmallRow2[0]}/>
           <img className="sixth-letter-small" src={windowsImagesSmallRow2[1]}/>
           <img className="seventh-letter-small" src={windowsImagesSmallRow2[2]}/>
           <img className="eighth-letter-small" src={windowsImagesSmallRow2[3]}/>
        </>);
    }
}

export default Prudify;
