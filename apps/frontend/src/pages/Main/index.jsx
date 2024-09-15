import { Outlet } from 'react-router-dom'
import SideBar from '../../components/SideBar'

import { Container } from './styles'
// import Header from '../../components/Header'

 import homeLogo from '../../assets/Logos/logo1.jpeg'


export default function Main() {

  const nome = localStorage.getItem('socialName')

  return (
    <Container logo={homeLogo}>
      <SideBar />
      <section>
        <h1>Bem vindo(a) {nome}!</h1>
        <Outlet />
      </section>
    </Container>
  )
}
