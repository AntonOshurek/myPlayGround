import { useState, useEffect } from 'react';
import {API_KEY, API_URL} from '../../config';

import { GoodsList } from '../goods/Goods-list';
import { Preloader } from '../Preloader';
import { Cart } from '../cart/Cart';
import { CartList } from '../cart/CartList';
import { Allert } from '../Allert';

import './shop.css';

export const Shop = () => {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isCartShow, setCartShow] = useState(false);
  const [allerName, setAllertName] = useState('');

  const handleCartShow = () => {
    setCartShow(!isCartShow);
  }

  const addToCart = (item) => {
    const itemIndex = order.findIndex(orederItem => orederItem.mainId === item.mainId);

    if(itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      };

      setOrder((prevOrder) => [...prevOrder, newItem]);
    } else {
      const updateOrder = order.map((orderItem, i) => {
        if(i === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          }
        } else {
          return orderItem;
        }
      });
      setAllertName(item.displayName);
      setOrder(updateOrder);
    }
  };

  const removeFromCart = (itemId) => {
    const newOrder = order.filter(element => element.mainId !== itemId);
    setOrder(newOrder);
  }

  const incQuantity = (itemId) => {
    const newOrder = order.map(element => {
      if(element.mainId === itemId) {
        const newQuantity = element.quantity + 1;
        return {
          ...element,
          quantity: newQuantity,
        }
      } else {
        return element;
      }
    });

    setOrder(newOrder);
  }

  const decQuantity = (itemId) => {
    const newOrder = order.map(element => {
      if(element.mainId === itemId) {
        const newQuantity = element.quantity - 1;
        return {
          ...element,
          quantity: newQuantity >= 0 ? newQuantity : 0,
        }
      } else {
        return element;
      }
    });

    setOrder(newOrder);
  }

  const closeAllert = () => {
    setAllertName('');
  }

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
      <Cart quantity={order.length} handleCartShow={handleCartShow}/>
      {
        loading ? <Preloader /> : <GoodsList goods={goods} addToCart={addToCart}/>
      }
      {
        isCartShow && <CartList
        order={order}
        handleCartShow={handleCartShow}
        removeFromCart={removeFromCart}
        incQuantity={incQuantity}
        decQuantity={decQuantity}
        />
      }
      {
        allerName && <Allert name={allerName} closeAllert={closeAllert}/>
      }
    </section>
  )
};