import './App.css';
import React, { useState } from 'react';
import './styles/style.css'
import obfusticator from './obfusticator'
import AutosizeInput from "react-input-autosize";


let phrase =
  "abcdefghijklmnopqrstuvwxyz";


export default function App() {

  const [value, setValue] = useState("")
  const [input, changeInput] =useState(0)

  return (
    <div className="panel">
      <AutosizeInput
        autoFocus
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      YOUR MESSAGE:
      <input>{/* <span class="termReverse">&nbsp;</span> */}</input>
      <br />{" "}
      <tr>
        <td nowrap height="15" class="term">
          <span class="termReverse"> &nbsp;</span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </td>
      </tr>
    </div>
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
      
    
    
  
  
   

        
   
    
  


