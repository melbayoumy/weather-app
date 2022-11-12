import Nav from '../nav/Nav'
import WeatherView from '../weather/WeatherView'

// styles
import styles from './App.module.scss'

const App = () => {
  return (
    <div className={styles.app}>
      <Nav className={styles.nav} />
      <WeatherView />
    </div>
  )
}

export default App
