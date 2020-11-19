import './App.css';
import React, { Component } from 'react';
import './styles/style.css'
import selector from './test'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      obfustication: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }


  // obfusticator() {
    //   if (e.target.value = 'a') {
      //     return 'ă';
      //   }
      // }
      obfusticator(letter) {
        return letter.replaceAll("a", selector())
        // if (letter === "a") {
        //   return "ă";
        // }
        //  if (letter === "b") {
        //   return "ƀ";
        // }
        // else {
        //   return letter;
        // }
       }
       handleChange(e) {
         //  function obfusticator() {
         //    if (e.target.value = "a") {
         //      return "ă";
         //    }
         //  }
         console.log(e)
         this.setState({
           obfustication: e.target.value,
         });
       }
       render() {
         return (
           <div className="panel">
             YOUR MESSAGE:
             <input
               type="text"
               value={this.state.obfustication}
               onChange={this.handleChange}
             />
             <br />
             YOUR UNOBFUSTICATED MESSAGE : {this.state.obfustication}
             <br />
             YOUR OBFUSTICATED MESSAGE : {this.obfusticator(this.state.obfustication)}
           </div>
         );
       }
     }
     export default App;

  
       //take phrase entered
       //convert 
      
    
    
  
  
   

        
   
    
  


