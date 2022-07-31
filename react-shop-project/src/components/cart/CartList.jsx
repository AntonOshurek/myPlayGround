import './cart-list.css';
import { CartItem } from "./CartItem";

import { useContext } from "react";
import { ShopContext } from "../../context";

export const CartList = () => {
  const { order = [],
    handleCartShow = Function.prototype,
  } = useContext(ShopContext);

  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price.finalPrice * el.quantity;
  }, 0)

  return(
    <ul className="collection cart-list">
      <li className="collection-item active">Корзина</li>
      {
        order.length ? order.map((item) => (
          <CartItem key={item.mainId} {...item}/>
        )) : (<li className="collection-item">Корзина пуста</li>)
      }
      <li className="collection-item active">Общая стоимость = {totalPrice} руб.
        <button className='cart-list__buy-btn'>оформить</button>
      </li>
      <button className='cart-list__close-btn' onClick={handleCartShow}>
        <i className="material-icons">close</i>
      </button>
    </ul>
  );
}
