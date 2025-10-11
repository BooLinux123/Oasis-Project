import './App.css';
import Header from "../components/Header";
import Counter from "../components/Counter";
import "./index.css";

function App() {

  return (
    <>
      <div>
        <Header />
        <Counter />
        <img src="../Images/Counter.jpeg" alt="This is a counter" className="image"/>
      </div>
    </>
  );
}

export default App
