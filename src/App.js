import './App.css';
import TourData from './TourData.js';
import Tour from './components/Tour.js';

function App() {
  return (
    <div className="App">
       <h2>Make Your Trip </h2>
       <Tour Data={TourData}></Tour>     
    </div>
  );
}

export default App;
