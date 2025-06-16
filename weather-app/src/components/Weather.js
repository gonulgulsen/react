import { useCity } from '../context/CityContext'

function Weather() {
 const { weather, loading } = useCity();

 if(loading) return <div>Loading...</div>
 if(!weather.length) return <div>Veri bulunamadı..</div>

const dayNames = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];

return (
  <div className="weather-list">
    {weather.map((day, idx) => {
      const date = new Date(day.date);
      const dayName = dayNames[date.getDay()];
      return (
        <div key={day.date} className={`weather-card${idx === 0 ? ' today' : ''}`}>
          <div className="weather-day"><b>{dayName}</b></div>
          <img className="weather-icon" src={`https:${day.day.condition.icon}`} alt="" />
          <div className="weather-desc">{day.day.condition.text}</div>
          <div className="weather-temp">
            <span><b>{Math.round(day.day.maxtemp_c)}°</b> / {Math.round(day.day.mintemp_c)}°</span>
          </div>
        </div>
      )
    })}
  </div>
)
}

export default Weather
