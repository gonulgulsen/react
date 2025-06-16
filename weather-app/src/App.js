import './App.css';
import Header from './components/Header';
import Weather from './components/Weather';
import { CityProvider } from './context/CityContext';

function App() {
  return (
   <CityProvider>
      <div className="App">
         <div className="header-wrapper">
          <Header />
        </div>
        <Weather />
      </div>
    </CityProvider>
  );
}

export default App;
