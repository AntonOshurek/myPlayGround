import { CartItem } from "./CartItem";

export const CartList = (props) => {
  const { order = [] } = props;

  return(
    <ul className="collection">
      <li className="collection-item active">Корзина</li>
      {
        order.length ? order.map((item) => {
          <CartItem key={item.mainId} {...item}/>
        }) : (<li className="collection-item">Корзина пуста</li>)
      }
      <li className="collection-item">Общая стоимость</li>
    </ul>
  );
}
