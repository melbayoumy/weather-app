import WeatherIcon from '../WeatherIcon'
import Loader from '../../Loader'

// types
import type { WeatherItem as WeatherItemType } from '@/hooks/use-weather'

// styles
import styles from './WeatherItem.module.scss'

type WeatherItemProps = {
  item?: WeatherItemType
}

const WeatherItem = ({ item }: WeatherItemProps) => {
  let view = <Loader />

  if (item) {
    const { day, icon, description, degree } = item
    view = (
      <>
        <time>{day}</time>
        <WeatherIcon
          icon={icon}
          description={description}
          className={styles.icon}
        />
        <header className={styles.header}>{Math.round(degree)}&deg;</header>
      </>
    )
  }

  return <section className={styles.wrapper}>{view}</section>
}

export default WeatherItem
export type { WeatherItemProps }
