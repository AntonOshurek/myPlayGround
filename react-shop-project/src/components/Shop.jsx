import { useState, useEffect } from 'react';
import {API_KEY, API_URL} from '../config';

import { GoodsList } from './Goods-list';
import { Preloader } from './Preloader';

import './shop.css';

export const Shop = () => {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        'Authorization': API_KEY,
      },
    }).then(response => response.json())
    .then((data) => {
      setGoods(data.shop);
      // console.log(data.shop[1].)
      setLoading(false);
    })
  }, []);

  return(
    <section className="shop container">
      <h2>Shop</h2>

      {
        loading ? <Preloader /> : <GoodsList goods={goods}/>
      }
    </section>
  )
};
