import './cart-list.css';
import { CartItem } from "./CartItem";

export const CartList = (props) => {
  const { order = [], handleCartShow } = props;

  return(
    <ul className="collection cart-list">
      <li className="collection-item active">Корзина</li>
      {
        order.length ? order.map((item) => (
          <CartItem key={item.mainId} {...item}/>
        )) : (<li className="collection-item">Корзина пуста</li>)
      }
      <li className="collection-item">Общая стоимость</li>
      <button className='cart-list__close-btn' onClick={handleCartShow}>
        <i className="material-icons">close</i>
      </button>
    </ul>
  );
}
