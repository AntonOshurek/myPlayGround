import { GoodsItem } from "./Goods-item";

export const GoodsList = (props) => {

  const {goods = []} = props;

  if(!goods.length) {
    return(
      <h2>Данные не получены!</h2>
    )
  };

  return(
    <ul className="goods-list">
      {
        goods.map((item) => {
          return <GoodsItem item={item} key={item.mainId}/>
        })
      }
    </ul>
  );
};
