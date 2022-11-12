import { useWeather } from '@/hooks/use-weather'
import WeatherItem from '../WeatherItem'
import WeatherMainItem from '../WeatherMainItem'
import { useParams } from 'react-router-dom'

// styles
import styles from './WeatherView.module.scss'

const WeatherView = () => {
  const { city } = useParams()
  const { isError, error, data } = useWeather(city || '')
  const [todaysWeather, ...weatherElements] = data

  return (
    <main className={styles.wrapper}>
      {isError && <div className={styles.error}>{error.toString()}</div>}
      <WeatherMainItem item={todaysWeather} />
      <div className={styles.elements}>
        {(weatherElements?.length
          ? weatherElements
          : new Array(3).fill(undefined)
        ).map((weatherElement, index) => (
          <WeatherItem key={index} item={weatherElement} />
        ))}
      </div>
    </main>
  )
}

export default WeatherView
