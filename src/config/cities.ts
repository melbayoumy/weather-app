type City = 'ottawa' | 'moscow' | 'tokyo'
type CityObj = {
  key: City
  lat: number
  lon: number
  country: string
}

const cities: { [city in City]: CityObj } = {
  ottawa: {
    key: 'ottawa',
    lat: 45.4208777,
    lon: -75.6901106,
    country: 'CA',
  },
  moscow: {
    key: 'moscow',
    lat: 55.7504461,
    lon: 37.6174943,
    country: 'RU',
  },
  tokyo: {
    key: 'tokyo',
    lat: 35.6828387,
    lon: 139.7594549,
    country: 'JP',
  },
}

const defaultCity = cities.ottawa

export { cities, defaultCity }
export type { City, CityObj }
