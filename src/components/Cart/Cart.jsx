import PropTypes from 'prop-types'
import './Cart.css'

const Cart = ({selectedCourses, totalCredit, totalPrice, remaining}) => {

    console.log(totalCredit);
    console.log(totalPrice);
    return (
        <div className="cart">
            <p className='cart-title'>Credit Hour Remaining {remaining}hr</p>
            <hr className='border border-1 w-[90%] my-2' />
            <h2>Course Name</h2>
            <ol>
                {
                    selectedCourses.map((course, idx) => {
                        
                        return (
                            <li key={idx}>{`${idx + 1} ${course.title}`}</li>
                        )
                    })
                }
            </ol>

            <hr className='border border-1 w-[90%] my-2' />
            <p className='cart-credit'>Total Credit Hour: {totalCredit}</p>
            <hr className='border border-1 w-[90%] my-2' />
            <p className='cart-price'>Total Price: {totalPrice} USD</p>

        </div>
    );
};

Cart.propTypes = {
    selectedCourses: PropTypes.array
}

export default Cart;