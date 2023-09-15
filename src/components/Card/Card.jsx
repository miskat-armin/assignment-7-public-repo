import PropTypes from 'prop-types'
import './Card.css'
import { BiDollar } from 'react-icons/bi'
import { BsBook } from 'react-icons/bs'

const Card = ({ image, name, description, price, credit, selectedHandler }) => {
    const handleSelectClick = () => {
        selectedHandler({ title: name, price: price, credit: credit });
    }

    return (
        <div className="card">
            <img src={image} alt="image" />
            <h2 className='card-title my-3'>{name}</h2>
            <p className='card-desc'>{description}</p>
            <div className='flex flex-row justify-between w-[100%] my-3'>
                <div className='flex flex-row justify-center items-center gap-1'> 
                    <BiDollar size={24}/>
                    <p className='card-details'> Price: {price}</p>
                </div>
                <div className='flex flex-row justify-center items-center gap-1'>
                    <BsBook size={20}/>
                    <p className='card-details'>Credit: {credit}hr</p>
                </div>
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