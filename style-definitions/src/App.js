import './App.css';
import A from "./components/A";
import B from "./components/B";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div style={{color: "red", backgroundColor: "white", paddingTop: 50}}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </div>

        <div class="alert alert-danger" role="alert">
         A simple danger alert—check it out!
        </div>

        <A/>
        <B/>
      </header>
    </div>
  );
}

export default App;
