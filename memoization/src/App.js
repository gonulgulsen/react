import './App.css';
import Header from './components/Header';
import {useState, useMemo} from 'react'

function App() {

  const [number, setNumber] = useState(0);
  const [text, setText] = useState("");

  //  Burada data prop unu useMemo ile kullanmazsak Header re-render edilir
  // const data = useMemo(()=>{
  //   return {name: "Gönül"};
  // },[])



  //   const data = useMemo(()=>{
  //   return [{name: "Gönül" , number}];
  // },[number])
//  Dependency array değiştiğinde artık sadece data hesaplanır



    const data = useMemo(()=>{
    return calculateObject();
    },[])
    // Bu şekilde yazınca calculateObject fonksiyondaki loglara girmedi



    // const data = calculateObject();
    // Bu yöntemle sayfa yavaşlar. 

  return (
    <div className="App">
     <Header number={number < 5 ? 0 : number} data={data}/>
     <hr/>
     <h1>{number}</h1>
     <button onClick={() => setNumber(number +1)}>Click</button>
     <br/>
     <br/>
     <input type={text} onChange={({target})=> setText(target.value)}/>
    </div>
  );
}


function calculateObject(){
  console.log("Calculating...");
  for(let i=0; i < 10000000; i++){}
  console.log("Calculating completed!");
  return {name: "Gülsen"}
}
export default App;
