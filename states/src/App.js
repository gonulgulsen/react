import { useState } from "react";


// State, React’ta bir bileşenin anlık verisini tutan ve değiştiğinde o bileşeni otomatik olarak güncelleyen özel bir yapıdır.

// setName, setAge .. gibi camelCase ile yazılan fonk, state in değerini değiştiren fonksiyonlardır.

// useState, React’ta fonksiyon bileşenlerinde state (durum/veri) tutmak ve değiştirmek için kullanılan özel bir React Hook’udur.
       // useState, değişebilen veri saklamak için kullanılır.
       // Değer değişirse, ekran otomatik güncellenir.
       // Sadece fonksiyon componentlerde kullanılır.
       // Her useState çağrısı, bağımsız bir state oluşturur.
         /**Burada ...address bu şekilde yazarak address objesini aldık, daha sonra title datasını değiştirdik. */
         /**Bütün keyleri güncelleyeceksen ...address yazmana gerek yok */

function App() {
  const [name, setName] = useState("Gönül");
  const [age, setAge] = useState(35);
  const [friends, setFriends] = useState(["Ahmet", "Mehmet"]);
  const [address, setAddress] = useState({title: 'İzmir', zip: 35000})

  return (
    <div className="App">

      <h1>Merhaba {name}</h1>
      <h2>Yaşım {age}</h2>

      <button onClick={() => setName("Işıl")}>Change Name</button>
      <button onClick={() => setAge(33)}>Change Age</button>

      <hr/>
      <br/>

      <h2>Friends</h2>
      {friends.map((friend, index) => (<div key={index}>{friend}</div>))}
      <button onClick={() => setFriends([...friends, "Ayşe"])}>Add New Friend</button>


      <hr/>
      <br/>

      <h2>Address</h2>
      <div>{address.title} {address.zip}</div>

      <br/>
      <button onClick={() => setAddress({ ...address, title: 'İstanbul'})}>Change the Address</button>
    </div>
  );
}

export default App;
