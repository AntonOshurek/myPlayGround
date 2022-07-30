export const CartItem = (props) => {
  const {mainId, displayName, price, quantity} = props;

  return(
    <li className="collection-item cart-item">
      {displayName} x{quantity} = {price.finalPrice}
      <button className="secondary-content cart-item__delete-btn"><i className="material-icons">close</i></button>
    </li>
  );
}
