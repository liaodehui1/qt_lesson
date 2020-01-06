import React from 'react';
import './App.css';
import connect from './react-redux/connect';

function App(props) {
  return (
    <div className="App">
      count: {props.count}
      <button onClick={props.inc}>+</button>
      <button onClick={props.dec}>-</button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    count: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    inc() {
      dispatch({type: 'INCREMENT'})
    },
    dec() {
      dispatch({type: 'DECREMENT'})
    } 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
