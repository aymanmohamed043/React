import './App.css'
import Info  from './components/info';
import SearchForm from './components/SearchForm';

function App() {
  return (
  <div>
    <h1>Hello from React</h1>
    <Info name='momen' age={20} graduated={false}  about='hi from my about are you ok?'/>
    <SearchForm/>
  </div>
)}

export default App;
