import { useEffect, useState } from "react";

function Counter() {
const [number, setNumber] = useState(0);


useEffect(() => {
  console.log("Component mount edildi.")

  const interval = setInterval(() =>{
    setNumber((n) => n + 1)
  }, 1000);

  return () => clearInterval(interval);
 //Burada işlemleri durdurduk. Component unmount olunca setNumber da durmuş oldu.
}, []);


useEffect(() => {
  console.log("number state güncellendi")
}, [number])


  return (
    <div>
      <h1>{number}</h1>
      <button onClick= {() => setNumber(number + 1)}>Click</button>
    </div>
  );
}

export default Counter;
