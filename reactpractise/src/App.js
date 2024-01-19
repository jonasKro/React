import "./App.css";
import Button from "./components/Button";
import Card from "./components/Card";
import ListElement from "./components/ListElement";

function App() {
  return (
    <div class="container">
      <div>
        <h1>Liste</h1>
        <ul class="list">
          <ListElement name="Coffee"></ListElement>
          <ListElement name="Tea"></ListElement>
          <ListElement name="Bier (ganz viel)"></ListElement>
        </ul>
      </div>
      <div>
        <h1>Button</h1>
        <Button name="Sendar"></Button>
      </div>
      <div>
        <h1>Card</h1>
        <Card fname="Jonas" lname="Kronabitter" descr="Cracky Coder "></Card>
      </div>
    </div>
  );
}

export default App;
