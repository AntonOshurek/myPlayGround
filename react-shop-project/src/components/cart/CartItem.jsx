import { useContext } from "react";
import { ShopContext } from "../../context";

export const CartItem = (props) => {
  const {mainId, displayName, price, quantity,
    // removeFromCart = Function.prototype,
    // decQuantity = Function.prototype,
    // incQuantity = Function.prototype,
  } = props;

  const {removeFromCart, incQuantity, decQuantity} = useContext(ShopContext);

  return(
    <li className="collection-item cart-item">
      {displayName}
        <i className="material-icons cart-item-quantity" onClick={() => decQuantity(mainId)}>remove</i>
        x{quantity}
        <i className="material-icons cart-item-quantity" onClick={() => incQuantity(mainId)}>add</i>
        = {price.finalPrice * quantity} руб.
      <button className="secondary-content cart-item__delete-btn"
        onClick={() => removeFromCart(mainId)}>
        <i className="material-icons">close</i>
      </button>
    </li>
  );
}
