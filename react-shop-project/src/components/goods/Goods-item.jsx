import { useContext } from 'react';
import { ShopContext } from '../../context';

export const GoodsItem = (props) => {
  const { item = [] } = props;

  const {
    displayName,
    displayType,
    displayDescription,
    price,
    displayAssets,
  } = item;

  const {addToCart} = useContext(ShopContext);

  const cardRevalStyle = {
    backgroundImage: `url("${ displayAssets[0].background }")`,
  };

  return(
    <div className="card">
      <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" src={displayAssets[0].full_background} alt=""/>
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">{displayName}<i className="material-icons right">more_vert</i></span>
        <p className="card__type">{displayType}</p>
        <p className="card__price">{price.finalPrice}</p>
        <button className="card__button"
          type="button"
          onClick={() => addToCart(item)}>Купить</button>
      </div>
      <div className="card-reveal" >
        <div className="card-reveal__wrap" style={cardRevalStyle}>
          <span className="card-title ">Описание<i className="material-icons right">close</i></span>
          <p className="card__description">{displayDescription ? displayDescription : 'Описание отсутствует!'}</p>
        </div>
      </div>
    </div>
  );
};
