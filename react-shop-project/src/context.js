import { createContext, useReducer } from "react";
import { reducer } from './reducer';

export const ShopContext = createContext();

const initialState = {
  goods: [],
  loading: true,
  order: [],
  isCartShow: false,
  allertName: '',
}

export const ContextProvider = ({children}) => {
  const [value, dispatch] = useReducer(reducer, initialState);

  value.closeAllert = () => {
    dispatch({type: 'CLOSE_ALERT'});
  }

  value.removeFromCart = (itemId) => {
    dispatch({type: 'REMOVE_FROM_CART', payload: {id: itemId}});
  }

  value.addToCart = (item) => {
    dispatch({type: 'ADD_TO_CART', payload: item});
  }

  value.incQuantity = (itemId) => {
    dispatch({type: 'INCREMENT_QUANTITY', payload: {id: itemId}});
  }

  value.decQuantity = (itemId) => {
    dispatch({type: 'DECREMENT_QUANTITY', payload: {id: itemId}});
  }

  value.handleCartShow = () => {
    dispatch({type: 'TOOGLE_BASCET'});
  }

  value.setGoods = (data) => {
    dispatch({type: 'SET_GOODS', payload: data});
  }

  return(
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
}
