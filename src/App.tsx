import './global.css'

import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import { ThemeProvider } from './components/theme/theme-provider'
import { router } from './routes'

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="pizzashop-theme">
      <RouterProvider router={router} />
      <Toaster />
    </ThemeProvider>
  )
}
