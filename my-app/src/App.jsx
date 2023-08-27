// 創建外殼組件app
import React, {Component} from 'react';
import Hello from './component/Hello';

class App extends Component {
  render() {
    return (
      <div>
        <Hello/>
      </div>
    );
  }
}

// 暴露app組件
export default App;