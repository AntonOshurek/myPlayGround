import { connect } from "react-redux/es/exports";
import {inc, dec} from '../store/actions';

import { bindActionCreators } from "redux";

const Counter = ({counter, title, inc, dec}) => {
  return(
    <>
      <h1>{counter} - {title}</h1>
      <button onClick={dec}>dec</button>
      <button onClick={inc}>inc</button>
    </>
  );
};

const mapStateToProps = (state) => ({
  counter: state.value,
  title: state.title,
});

//вариант с добавлением конекста к действиям
// const mapDispatchToPropsFOO = (dispatch) => bindActionCreators({
//   inc: () => dispatch(inc()),
//   dec: () => dispatch(dec()),
// }, dispatch);
//тоже самое только нужно самому писать dispatch
// const mapDispatchToPropsBAR = (dispatch) => {
//   return {
//     inc: () => dispatch(inc()),
//     dec: () => dispatch(dec()),
//   }
// };

//вариант с объектом action
// const componentActions = {
//   inc,
//   dec,
// }
// const mapDispatchToProps = (dispatch) => {
//   const {inc, dec} = bindActionCreators(componentActions, dispatch);
//   return {
//     inc,
//     dec,
//   }
// };
// такой же вариант только чуть проше в написании
const mapDispatchToProps = (dispatch) => bindActionCreators({
  inc,
  dec,
}, dispatch);

// вариант без mapDispatchToProps
// функция connect биндит функции автоматически если передать в неё объект!
// export default connect(mapStateToProps, {inc, dec})(Counter);
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
