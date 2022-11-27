import Counter from "./components/Counter";
import StarRating from "./components/StarRating";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Counter />
      <hr />
      <StarRating
        onRate={(value) => console.log(`user gave rating of ${value}`)}
      />
    </div>
  );
}

export default App;
