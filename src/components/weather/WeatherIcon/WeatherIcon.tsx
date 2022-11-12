import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSun,
  faCloudSun,
  faCloud,
  faCloudShowersHeavy,
  faCloudRain,
  faCloudBolt,
  faSnowflake,
  faWater,
} from '@fortawesome/free-solid-svg-icons'

// types
import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import type { FontAwesomeIconProps } from '@fortawesome/react-fontawesome'

const icons: { [code: string]: IconProp } = {
  '01d': faSun,
  '02d': faCloudSun,
  '03d': faCloud,
  '04d': faCloud,
  '09d': faCloudShowersHeavy,
  '10d': faCloudRain,
  '11d': faCloudBolt,
  '13d': faSnowflake,
  '50d': faWater,
}

type WeatherIconProps = Omit<FontAwesomeIconProps, 'icon'> & {
  icon: string
  description: string
}

const WeatherIcon = ({ icon, description, ...props }: WeatherIconProps) => {
  return (
    <FontAwesomeIcon
      role="img"
      aria-hidden
      icon={icons[icon]}
      title={description}
      {...props}
    />
  )
}

export default WeatherIcon
export type { WeatherIconProps }
