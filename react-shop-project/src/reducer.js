export const reducer = (state, {type, payload}) => {
  switch(type) {

    case 'REMOVE_FROM_CART':
      return{
        ...state,
        order: state.order.filter(element => element.mainId !== payload.id),
      }

    case 'ADD_TO_CART':
      const itemIndex = state.order.findIndex(
        (orederItem) => orederItem.mainId === payload.mainId
      );

        let newOrder = null;

      if(itemIndex < 0) {
        const newItem = {
          ...payload,
          quantity: 1,
        };

        newOrder = [...state.order, newItem];
      } else {
        newOrder = state.order.map((orderItem, i) => {
          if(i === itemIndex) {
            return {
              ...orderItem,
              quantity: orderItem.quantity + 1,
            }
          } else {
            return orderItem;
          }
        });

        return {
          ...state,
          order: newOrder,
          alertName: payload.displayName,
        }
      }

    // eslint-disable-next-line no-fallthrough
    case 'INCREMENT_QUANTITY':
      return {
        ...state,
        order: state.order.map(element => {
          if(element.mainId === payload.id) {
            const newQuantity = element.quantity + 1;
            return {
              ...element,
              quantity: newQuantity,
            }
          } else {
            return element;
          }
        })
      }

    case 'DECREMENT_QUANTITY':
      return {
        ...state,
        order: state.order.map(element => {
          if(element.mainId === payload.id) {
            const newQuantity = element.quantity - 1;
            return {
              ...element,
              quantity: newQuantity >= 0 ? newQuantity : 0,
            }
          } else {
            return element;
          }
        })
      }

    case 'TOOGLE_BASCET':
      return {
        ...state,
        isCartShow: !state.isCartShow,
      }

    case 'CLOSE_ALERT':
      return {
        ...state,
        allerName: '',
      }

    default:
      return state;
  }
}
