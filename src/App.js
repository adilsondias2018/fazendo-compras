import Products from "./components/Products";
import Foods from "./components/Foods";
import Cart from "./components/Cart";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Foods></Foods>
        <Cart></Cart>
      </header>
    </div>
  );
}

export default App;
