type WeatherRawItem = {
  dt: number
  temp: {
    day: number
  }
  weather: {
    icon: string
    description: string
  }[]
}

type WeatherItem = {
  day: string
  degree: number
  icon: string
  description: string
}

export type { WeatherRawItem, WeatherItem }
