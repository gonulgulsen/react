import './App.css';
import Header from './components/Header';
import {useState, useMemo, useCallback} from 'react'

function App() {

  const [number, setNumber] = useState(0);
  const [text, setText] = useState("");

  // const increment = useCallback(() => {
  //    setNumber(number + 1)
  // },[number])
  // Yukarıdaki gibi kullanırsak useCallback hook da sürekli number değişeceğinden header re-render edilir.


  const increment = useCallback(() => {
     setNumber((prevState) => prevState + 1)
  },[])
  //Bu şekilde kullanılırsa Header re-render olmaz, prevstate ile bir önceki state i almış olduk

  return (
    <div className="App">
     <Header increment={increment} />

     <hr/>

     <h1>{number}</h1>

     <br/>
     <br/>

     <input type={text} onChange={({target})=> setText(target.value)}/>
    </div>
  );
}

export default App;
