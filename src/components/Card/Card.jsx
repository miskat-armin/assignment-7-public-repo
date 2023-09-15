import PropTypes from 'prop-types'
import './Card.css'
const Card = ({ image, name, description, price, credit, selectedHandler}) => {
    const handleSelectClick = () =>{
        selectedHandler({title: name, price: price, credit: credit});
    }

    return (
        <div className="card">
            <img src={image} alt="image" />
            <h2 className='card-title'>{name}</h2>
            <p>{description}</p>
            <div className='flex flex-row justify-between w-[80%]'>
                <p className='font-medium text-base'>Price: {price}</p>
                <p className='font-medium text-base'>Credit: {credit}hr</p>
            </div>
            <button onClick={handleSelectClick} className='select-btn'>Select</button>
        </div>
    );
};

Card.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.string,
    credit: PropTypes.string,
    selectedHandler: PropTypes.func
}

export default Card;