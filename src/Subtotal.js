import React from 'react'
import "./Subtotal.scss"
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import { useHistory } from 'react-router';

function Subtotal() {
    const [{basket}, dispatch] = useStateValue();
    const history = useHistory();
     return (
        <div className="subtotal">
            <CurrencyFormat
             renderText={(value) =>(
                <>
                    <p>
                        Subtotal ({basket.length} items):
             <strong>{value}</strong>
                    </p>
                    <small className="subtotal__gift">
                        <input type="checkobox" />This order contains a gift
                    </small>
                </>
            )}
            decimals={2}
             value={getBasketTotal(basket)}
             displayType={'text'}
             thousandSeparator={true} 
             prefix={'$'}
               />
        <button onClick={e => history.push('/payment')}>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal
