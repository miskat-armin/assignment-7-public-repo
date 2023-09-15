import PropTypes from 'prop-types'
import './Card.css'
const Card = ({ image, name, description, price, credit }) => {
    return (
        <div className="card">
            <img src={image} alt="image" />
            <h2 className='card-title'>{name}</h2>
            <p>{description}</p>
            <div className='flex flex-row justify-between w-[80%]'>
                <p>{price}</p>
                <p>{credit}</p>
            </div>
            <button className='select-btn'>Select</button>
        </div>
    );
};

Card.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    credit: PropTypes.number,
}

export default Card;