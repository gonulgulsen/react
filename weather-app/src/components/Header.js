import { useCity } from '../context/CityContext';

function Header() {
  const { city, setCity, cityList } = useCity();

  return (
    <div className="weather-header">
      <select
        value={city}
        onChange={e => setCity(e.target.value)}
        className="city-select"
      >
        {cityList.map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>
    </div>
  );
}

export default Header;
