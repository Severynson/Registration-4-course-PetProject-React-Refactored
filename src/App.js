import { Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import MainPage from "./Pages/MainPage/MainPage";

function App() {
  return (
    <div>
      <Header />
      <Route path="/mainpage">
        <MainPage />
      </Route>
    </div>
  );
}

export default App;
