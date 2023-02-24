import './App.css';

import MousemoveThrottle from './components/MousemoveThrottle';
import Mousemove from './components/Mousemove';
import MousemoveUseThrottle from './components/MousemoveUseThrottle';

function App() {
  return (
    <div className="App">
      <Mousemove />
      <MousemoveThrottle />
      <MousemoveUseThrottle />
    </div>
  );
}

export default App;
