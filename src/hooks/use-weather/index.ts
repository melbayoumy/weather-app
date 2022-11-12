import { cities, defaultCity } from '@/config/cities'
import { useQuery } from '@tanstack/react-query'

// types
import type { WeatherRawItem, WeatherItem } from './types'
import type { City } from '@/config/cities'

const getToday = () => {
  const now = new Date()
  return `${now.getFullYear()}${now.getMonth() + 1}${now.getDate()}`
}

const transformWeatherRawItemToWeatherItem = (
  item: WeatherRawItem
): WeatherItem => {
  const weatherData = item.weather[0]
  let icon = ''
  let description = ''

  if (weatherData) {
    icon = weatherData.icon
    description = weatherData.description
  }

  return {
    day: new Date(item.dt * 1000).toLocaleDateString('en', {
      weekday: 'short',
    }),
    degree: item.temp.day,
    icon,
    description,
  }
}

const useWeather = (city: City | string) => {
  const cityObj = cities[city as City] || defaultCity
  const { data, ...query } = useQuery<{ list: WeatherRawItem[] }, Error>({
    queryKey: [`${city}:${getToday()}`],
    queryFn: async ({ signal }) =>
      fetch(
        `http://api.openweathermap.org/data/2.5/forecast/daily?lat=${cityObj.lat}&lon=${cityObj.lon}&units=metric&cnt=4&appid=${process.env.REACT_APP_WEATHER_API_KEY}`,
        {
          signal,
        }
      ).then((resp) => {
        if (!resp.ok) {
          throw new Error(resp.statusText)
        }

        return resp.json()
      }),
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    retry: false,
    staleTime: 300000, // stale after 300 sec (5 min)
  })

  return {
    ...query,
    data: data
      ? (data.list || []).map((item) =>
          transformWeatherRawItemToWeatherItem(item)
        )
      : [],
  }
}

export { useWeather }
export type { WeatherRawItem, WeatherItem }
