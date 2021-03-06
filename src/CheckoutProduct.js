import React from 'react'
import './CheckoutProduct.scss'
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, image, title, price, rating, hidenButton}) {
    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id:id,
        })
    }
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} />
        
        <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct_price">
            <small>$</small>
            <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
            {
                Array(rating)
                .fill()
                .map((_) => (
                    <p>&#11088;</p>
            ))}
        </div>
        {!hidenButton && (
            <button onClick={removeFromBasket}>Remove from basket</button>
        )}
        </div>
        </div>
    )
}

export default CheckoutProduct
