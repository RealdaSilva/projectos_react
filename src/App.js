import React from 'react';
import Home from './pages/index'


function App() {
  let titles = ["Aula1","Aula2"]
  return (
    <div className="App">
    {titles.map(title=><Home title={title}/>)
    
    }
    </div>
  );
}

export default App;
