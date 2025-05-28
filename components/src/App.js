import './App.css';
// import Header from './components/Header';

// function App(){
//   return(
//     // Burada <React.fragment> veya sadece <> bu şekilde de kullanılabilir div yerine
//     // Bir component bileşeni baş harfi büyük olarak yazılır
//     <div> 
//       <Header />
//       <h2>Hello React</h2>
//     </div>
//   );
// }

// export default App;

import User from ".components/User";

const friends = [{
  id: 1,
  name: "Ayşe",
},
{
  id: 2,
  name: "Fatma",
},
{
  id: 3,
  name: "Ali",
},
];

function App(){
  return(
    <>
    <User 
     name = "Gönül"
     surname = "Kurt"
     isLoggedIn = {true}
     age = {35}
     friends = {friends}
     address = {{
      title: "Bayraklı/İzmir",
      zip: "35000"
     }}
     />
    </>
  )
}

export default App;

