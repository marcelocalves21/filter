import Pikachu from '../assets/pikachu.jpeg'
import Frame from '../assets/frame.png'
import './card.css'

export const Card = () => {

    return (
        <div className="card">
            <div className="card-header">
                <img src={Frame} alt="" srcset="" />
            </div>
            <div className="card-body">
                <span>#025</span>
                <h3>PIKACHU</h3>
                <div className="pokemon-type">
                    <span>Electric</span>
                    <span>Electric</span>

                </div>
            </div>
        </div>
    )
}