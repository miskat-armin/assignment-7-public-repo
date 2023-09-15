import './Card.css'
const Card = ({ image, name, description, price, credit }) => {
    return (
        <div className="card">
            <img src={image} alt="image" />
            <h2>{name}</h2>
            <p>{description}</p>
            <div className='flex flex-row justify-between w-[80%]'>
                <p>{price}</p>
                <p>{credit}</p>
            </div>
        </div>
    );
};

export default Card;