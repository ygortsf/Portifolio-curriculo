import { useEffect, useState } from "react";
import styles from "./weather.module.css";

export function Weather() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(false);

  const weatherApiKey = "31bb3e0d8878019c55452789f88a5444";
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=Recife,BR&units=metric&appid=${weatherApiKey}`;

  useEffect(() => {
    fetch(weatherUrl)
      .then((res) => res.json())
      .then((data) => {
        if (data.cod === 200) {
          setWeather({
            temp: data.main.temp,
            desc: data.weather[0].description,
            icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`,
          });
        } else {
          setError(true);
        }
      })
      .catch(() => setError(true));
  }, []);

  return (
    <div className={styles.card}>
      {error && <p>Erro ao carregar o clima.</p>}
      {weather && (
        <div className={styles.info}>
          <img src={weather.icon} alt={weather.desc} />
          <p>
            Clima em Recife: <strong>{weather.desc}</strong>
          </p>
          <p>
            Temperatura: <strong>{weather.temp}°C</strong>
          </p>
        </div>
      )}
    </div>
  );
}
