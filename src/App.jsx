import './App.css';

import MousemoveThrottle from './components/MousemoveThrottle';
import Mousemove from './components/Mousemove';

function App() {
  return (
    <div className="App">
      <Mousemove />
      <MousemoveThrottle />
    </div>
  );
}

export default App;
