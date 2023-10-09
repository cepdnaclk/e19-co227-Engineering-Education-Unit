import NavBar from "./Components/Navbar"
import './App.css';
import menuData from "./Components/MenuData";

function App() {
  return (
    <div className="App">
      hello world
     <NavBar menuData={menuData} />
    </div>
  );
}

export default App;
