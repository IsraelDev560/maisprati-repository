import { Login } from './Login'
import { Navbar } from '../Navbar'
import '../../../styles/Netflix.css'

export const Home = () => {
    return (
        <header>
            <Navbar />
            <Login />
        </header>
    )
}