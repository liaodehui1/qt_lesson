import React from 'react';
import './App.css';
import Toast from './Toast.jsx'

class App extends React.Component {
  state = {
    flag:false
  }
  render() {
    const {flag} = this.state
    return (
      <div>
        <button onClick={() => {
         Toast.addNotice('info','内容一',2000)
        }}>open</button>
      </div>
    )
  }
}

export default App;
