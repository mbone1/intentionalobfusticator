let phrase = "gimme sum of dat red stuff ova dere"

export default function obfusticator(burrito) {
    //burrito will be the phrase inserted
    let splitter = Array.from(burrito)
    let oPhrase = []
    //converts burrito to Array
    console.log(splitter[1])
    for (let i = 0; i < splitter.length; i++) {
        let element = splitter[i];
        console.log(element)
        
        if (element === "a") {
            // element.replaceAll("a", "A")
            oPhrase.push(element.replaceAll("a", "A"));
            // console.log(oPhrase)
        } else {
            oPhrase.push(element)
        }
    }
    console.log(oPhrase)
    
    
    
    // burrito.replaceAll("a", selector());
  
  
    //  let a = ["À", "Ā", "Ă", "Ą", "ą", "à", "Â", "ã", "â", "å", "ă"];
    //  let randomizer = Math.floor(Math.random() * 10);
    //  return a[randomizer]


}
// function selector ()

//  export default function selector() {
//    let a = ["À", "Ā", "Ă", "Ą", "ą", "à", "Â", "ã", "â", "å", "ă"];
          
//           let randomizer = Math.floor(Math.random() * 10);
//    return a[randomizer]
   
// }
        

