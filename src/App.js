import './App.css';
import React, { useState } from 'react';
import obfusticator from './obfusticator'
import AutosizeInput from "react-input-autosize";
import './styles/scroller.css'
import './styles/lines.scss'
import './styles/layout.css'
import face from './media/face.png'
import LeftPanel from './panels/leftpanel'
import Rows from './panels/rows'
import Face from './panels/face'



export default function App() {

  const [value, setValue] = useState("")
  let placeholder = "how long is now?"
  return (
    <div class="container">
       <Rows/>
        <div class="column is-three-fifths is-offset-one-fifth">
           <LeftPanel/>
            <Face/>
            <div class="box comm-panel">
                <div class="comm">?</div>
            </div>

            
            <div class="box input-panel"></div>
            <div class="lineA"></div>
            <div class="lineB"></div>
            <div class="lineC"></div>
            <div class="lineD"></div>
        <div class="lineE"></div>
        <div class="lineA"></div>


            <div class="box output-panel"></div>
            <div class="button-panel">&nbsp;&nbsp;&nbsp;SUBMIT</div>
        </div>



    </div>
    
    /* // <div className="panel">
    //   <span></span>
    //   <AutosizeInput
    //     class="black"
    //     autoFocus
    //     placeholder={placeholder}
    //     value={value}
    //     onChange={(event) => setValue(event.target.value)}
    //   />
    //   <span class="termReverse blinking">&nbsp;</span>
    //   <br>
    //   </br>
    //   <AutosizeInput 
    //     placeholder={obfusticator(placeholder)}
    //     class="black"
    //   value={obfusticator(value)}></AutosizeInput><span class="termReverse blinking">&nbsp;</span>
      
    // </div> */


    
    
  );
}

//old code below

// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       obfustication: "",
//     };
//     this.handleChange = this.handleChange.bind(this);
//   }


//   // obfusticator() {
//     //   if (e.target.value = 'a') {
//       //     return 'ă';
//       //   }
//       // }
//       obfusticator(letter) {
//         return letter.replaceAll("a", selector())
//         // if (letter === "a") {
//         //   return "ă";
//         // }
//         //  if (letter === "b") {
//         //   return "ƀ";
//         // }
//         // else {
//         //   return letter;
//         // }
//        }
//        handleChange(e) {
//          //  function obfusticator() {
//          //    if (e.target.value = "a") {
//          //      return "ă";
//          //    }
//          //  }
//          console.log(e)
//          this.setState({
//            obfustication: e.target.value,
//          });
//        }
//        render() {
//          return (
//            <div className="panel">
//              YOUR MESSAGE:
//              <input
//                type="text"
//                value={this.state.obfustication}
//                onChange={this.handleChange}
//              />
//              <br />
//              YOUR UNOBFUSTICATED MESSAGE : {this.state.obfustication}
//              <br />
//              YOUR OBFUSTICATED MESSAGE : {this.obfusticator(this.state.obfustication)}
//            </div>
//          );
//        }
//      }
//      export default App;

  
       //take phrase entered
       //convert 
      
    
    
  
  
   

        
   
    
  


