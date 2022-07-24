import { useState, useEffect } from 'react';
import {API_KEY, API_URL} from '../config';

import { GoodsList } from './Goods-list';
import { Preloader } from './Preloader';
import { Cart } from './Cart';

import './shop.css';

export const Shop = () => {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);

  const addToCart = (item) => {
    console.log(item);

    setOrder((prevOrder) => [...prevOrder, item]);
  };

  useEffect(() => {
    console.log(order)
  }, [order])

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        'Authorization': API_KEY,
      },
    }).then(response => response.json())
    .then((data) => {
      setGoods(data.shop);
      setLoading(false);
    })
  }, []);

  return(
    <section className="shop container">
      <h2>Магазин</h2>
      <Cart quantity={order.length}/>
      {
        loading ? <Preloader /> : <GoodsList goods={goods} addToCart={addToCart}/>
      }
    </section>
  )
};
