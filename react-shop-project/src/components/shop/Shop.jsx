import { useState, useEffect, useContext } from 'react';
import {API_KEY, API_URL} from '../../config';

import { GoodsList } from '../goods/Goods-list';
import { Preloader } from '../Preloader';
import { Cart } from '../cart/Cart';
import { CartList } from '../cart/CartList';
import { Allert } from '../Allert';

import './shop.css';

import { ShopContext } from '../../context';

export const Shop = () => {

  const {goods, setGoods, loading, order, isCartShow, allertName} = useContext(ShopContext);

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        'Authorization': API_KEY,
      },
    }).then(response => response.json())
    .then((data) => {
      setGoods(data.shop);
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return(
    <section className="shop container">
      <h2>Магазин</h2>
      <Cart quantity={order.length}/>
      {
        loading ? <Preloader /> : <GoodsList goods={goods}/>
      }
      {
        isCartShow && <CartList/>
      }
      {
        allertName && <Allert name={allertName}/>
      }
    </section>
  )
};
