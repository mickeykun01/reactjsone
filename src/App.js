import React from 'react';
import './App.css';
import Button from './Component/Button';


class App extends React.Component {
  render() {
    return (
      <div>
        <div className='decor'>
          <h1 className='heading'>Styling using Functional and Class Component</h1>
        <Button></Button>
        </div>
      </div>

    )
  }
}

export default App;
