import "./App.css";
import Header from "./components/header";
import Card from "./components/card";
import data from "./assets/data/data.json";
function App() {
  return (
    <div>
      <Header />
      <main className="container">
        {data.map((ele) => {
          return <Card key={ele.id} {...ele} />;
        })}
      </main>
    </div>
  );
}

export default App;
