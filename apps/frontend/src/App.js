import { BrowserRouter } from 'react-router-dom'

import { AppRoutes } from './routes'
import { AuthProvider } from './hooks/useAuth';

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


import { Theme } from './styles/Theme'
import { GlobalStyle } from './styles/global'
import { Normalize } from 'styled-normalize'

export default function App() {
  return (
    <BrowserRouter>
      <Theme>
        <AuthProvider>
            <AppRoutes />
             <ToastContainer autoClose={2000}/>
            <GlobalStyle />
            <Normalize />
        </AuthProvider>
      </Theme>
    </BrowserRouter>
  )
}
