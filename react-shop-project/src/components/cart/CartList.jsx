import './cart-list.css';
import { CartItem } from "./CartItem";

export const CartList = (props) => {
  const { order = [],
    handleCartShow = Function.prototype,
    removeFromCart = Function.prototype,
    decQuantity = Function.prototype,
    incQuantity = Function.prototype
  } = props;

  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price.finalPrice * el.quantity;
  }, 0)

  return(
    <ul className="collection cart-list">
      <li className="collection-item active">Корзина</li>
      {
        order.length ? order.map((item) => (
          <CartItem key={item.mainId} {...item}
          removeFromCart={removeFromCart}
          decQuantity={decQuantity}
          incQuantity={incQuantity}
          />
        )) : (<li className="collection-item">Корзина пуста</li>)
      }
      <li className="collection-item active">Общая стоимость = {totalPrice} руб.</li>
      <button className='cart-list__close-btn' onClick={handleCartShow}>
        <i className="material-icons">close</i>
      </button>
    </ul>
  );
}
