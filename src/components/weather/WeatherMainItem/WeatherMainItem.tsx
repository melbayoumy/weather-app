import WeatherIcon from '../WeatherIcon'
import Loader from '../../Loader'

// types
import type { WeatherItem } from '@/hooks/use-weather'

// styles
import styles from './WeatherMainItem.module.scss'

type WeatherMainItemProps = {
  item?: Omit<WeatherItem, 'day'>
}

const WeatherMainItem = ({ item }: WeatherMainItemProps) => {
  let view = <Loader />

  if (item) {
    const { icon, description, degree } = item
    view = (
      <>
        <WeatherIcon
          icon={icon}
          description={description}
          className={styles.icon}
        />
        <header className={styles.header}>
          <div className={styles.degree}>{Math.round(degree)}&deg;</div>
          <div className={styles.description}>{description}</div>
        </header>
      </>
    )
  }

  return (
    <section className={styles.wrapper}>
      <time>Today</time>
      <div className={styles.details}>{view}</div>
    </section>
  )
}

export default WeatherMainItem
export type { WeatherMainItemProps }
