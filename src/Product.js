import React from 'react'
import './Product.scss';
import { useStateValue } from './StateProvider';

function Product({ id, title, image, price, rating }) {
    const [{basket}, dispatch] = useStateValue(); 
/*     console.log("This is the basket", basket); */
    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            }
        })
    }
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price"><small>HUF</small>{price}</p>
                <div className="product__rating">
                    {
                        Array(rating)
                        .fill()
                        .map((_) => (
                            <p>&#11088;</p>
                        ))}
                </div>
            </div>
            <img src={image} alt="" />
            <button onClick={addToBasket} className="product__button">
                    Add to basket
            </button>
        </div>
    )
}

export default Product
