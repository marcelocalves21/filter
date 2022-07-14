import './navbar.css'
import Pokemon from '../../assets/pokemon-logo.png'

export const Navbar = () => {
    return (
    <div className="navbar">
        <div className="container">
            <div className="logo">
                <img src={Pokemon} alt="" srcSet="" />
            </div>
            <div className="menu">
                <a href="#" className='menu-button all'>All</a>
                <a href="#" className='menu-button bug'>Bug</a>
                <a href="#" className='menu-button fire'>Fire</a>
                <a href="#" className='menu-button electric'>Electric</a>
                <a href="#" className='menu-button water'>Water</a>
                <a href="#" className='menu-button ghost'>Ghost</a>
                <a href="#" className='menu-button grass'>Grass</a>
            </div>
        </div>
    </div>
    )
}