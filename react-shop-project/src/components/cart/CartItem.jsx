export const CartItem = (props) => {
  const {mainId, displayName, price, quantity, removeFromCart = Function.prototype} = props;

  return(
    <li className="collection-item cart-item">
      {displayName} x{quantity} = {price.finalPrice * quantity} руб.
      <button className="secondary-content cart-item__delete-btn"
      onClick={() => removeFromCart(mainId)}
      >
        <i className="material-icons">close</i>
      </button>
    </li>
  );
}
