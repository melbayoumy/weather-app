import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/components/App'
import reportWebVitals from './reportWebVitals'
import { createBrowserRouter, RouterProvider, redirect } from 'react-router-dom'
import { cities, defaultCity } from '@/config/cities'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const router = createBrowserRouter([
  {
    path: '/',
    loader: async () => {
      throw redirect(`/${defaultCity.key}`)
    },
    element: <></>,
  },
  {
    path: '/:city',
    loader: async ({ params }) => {
      const { city } = params

      if (!city || !Object.keys(cities).includes(city.toLocaleLowerCase())) {
        throw redirect(`/${defaultCity.key}`)
      }

      return { city }
    },
    element: <App />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
const queryClient = new QueryClient()

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
)

reportWebVitals(console.log)
