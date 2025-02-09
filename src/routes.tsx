import { createBrowserRouter } from 'react-router-dom'

import { Dashboard } from './pages/app/Dashboard'
import { SingIn } from './pages/auth/Sing-in'

export const router = createBrowserRouter([
  { path: '/', element: <Dashboard /> },
  { path: '/sing-in', element: <SingIn /> },
])
