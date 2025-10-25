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
          return (
            <Card
              img={ele.img}
              country={ele.country}
              mapLink={ele.mapLink}
              placeName={ele.placeName}
              date={ele.date}
              text={ele.text}
            />
          );
        })}
      </main>
    </div>
  );
}

export default App;
