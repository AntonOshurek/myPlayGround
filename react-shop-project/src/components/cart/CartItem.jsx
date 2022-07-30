export const CartItem = (props) => {
  const {mainId, displayName, price, quantity} = props;

  console.log('sdf')

  return(
    <li className="collection-item ">
      {displayName} x{quantity} = {price}
      <button class="secondary-content"><i class="material-icons">close</i></button>
    </li>
  );
}
