import './cart.css';

import { useContext } from 'react';
import { ShopContext } from '../../context';

export const Cart = (props) => {
  const { order, handleCartShow = Function.prototype } = useContext(ShopContext);

  const quantity = order.length;

  return(
    <div className="cart blue darken-4 white-text"
    onClick={handleCartShow}
    >
      <i className="material-icons cart__icon">shoping_cart</i>
      {quantity ? <span className="cart__quantity">{quantity}</span> : null}
    </div>
  )
};
