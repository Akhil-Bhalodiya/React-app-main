import Movie from "./Movie";
import "./App.css";
import NavBar from "../navbar/NavBar";
import SideBar from "../navbar/SideBar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <NavBar />
      <SideBar />
      <Movie />
    </>
  );
}

export default App;
