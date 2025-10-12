import './App.css'
import Info  from './components/info';

function App() {
  return (
  <div>
    <h1>Hello from React</h1>
    <Info name='ayman' age={24} graduated={true} />
    <Info name='momen' age={20} graduated={false} />
  </div>
)}

export default App;
