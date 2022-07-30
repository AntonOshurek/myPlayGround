import './cart.css';

export const Cart = (props) => {
  const { quantity = 0, handleCartShow = Function.prototype } = props;

  return(
    <div className="cart blue darken-4 white-text"
    onClick={handleCartShow}
    >
      <i className="material-icons cart__icon">shoping_cart</i>
      {quantity ? <span className="cart__quantity">{quantity}</span> : null}
    </div>
  )
};
