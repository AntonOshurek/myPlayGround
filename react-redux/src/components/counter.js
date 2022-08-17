import { connect } from "react-redux/es/exports";
// import * as actions from '../store/actions';
import {inc, dec} from '../store/actions';
// import { bindActionCreators } from "redux";

const Counter = ({
  counter,
  inc = Function.prototype,
  dec = Function.prototype
  }) => {
  return(
    <>
      <h1>{counter} - count</h1>
      <button onClick={dec}>dec</button>
      <button onClick={inc}>inc</button>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    counter: state.value,
  }
};

// const mapDispatchToProps = (dispatch) => {
//   const {inc, dec} = bindActionCreators(actions, dispatch);
//   return {
//     inc,
//     dec,
//   }
// };

export default connect(mapStateToProps, {inc, dec})(Counter);
