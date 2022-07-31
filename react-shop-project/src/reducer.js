export const reducer = (state, {type, payload}) => {
  switch(type) {
    case 'REMOVE_FROM_CART':
      return{
        ...state,
        order: state.order.filter(element => element.mainId !== payload.id),
      }
    break;
    case 'CLOSE_ALERT':
      return {
        ...state,
        allerName: '',
      }
    default:
      return state;
  }
}
