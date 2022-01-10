import { Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer"
import MainPage from "./Pages/MainPage/MainPage";

function App() {
  return (
    <div>
      <Header />
      <Route path="/mainpage">
        <MainPage />
      </Route>
      <Footer />
    </div>
  );
}

export default App;
