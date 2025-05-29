import Counter from "./components/Counter";
import { useState } from "react";

function App() {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div className="App">
    {isVisible && <Counter/>}
    <br/>

    <button onClick={()=> setIsVisible(!isVisible)}>Toggle Counter</button>
  </div>
  )
  
// const [number, setNumber] = useState(0);
// const [name, setName] = useState('Berker')
// // Burada herhangi bir state güncellendiği anda console da State güncellendi yazar
// // useEffect, useState gibi hooklar if içerisinde kullanılmaz
// useEffect(() => {
//   console.log("State güncellendi")
// })
// // Buradaki [] dependency array diye adlandırılır.Eğer içine bir şey yazmazsak component mount edildiği anı yakalarsın.

// useEffect(() => {
//   console.log("Component mount edildi.")
// }, [])

// //Burada ise number her güncellendiği anı yakalarsın
// useEffect(() => {
//   console.log("number state güncellendi")
// }, [number])

// // array içerisine istenilen kadar state eklenebilir.
// useEffect(() => {
//   console.log("number veya name state güncellendi")
// }, [number, name])

//   return (
//     <div className="App">
//       <h1>{number}</h1>
//       <button onClick= {() => setNumber(number + 1)}>Click</button>
//       <hr/>
//       <h1>{name}</h1>
//       <button onClick= {() => setName("Gönül")}>Click</button>
//     </div>
//   );
}

export default App;



