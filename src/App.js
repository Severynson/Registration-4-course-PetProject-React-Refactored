import { Redirect, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer"
import MainPage from "./Pages/MainPage/MainPage";
import Registration from "./Pages/Registration/Registration";

function App() {

  return (
    <div>
      <Header />
      <Route path="/" exact>
          <Redirect to="/mainpage" />
      </Route>
      <Route path="/mainpage">
        <MainPage />
      </Route>
      <Route path="/registration" exact>
        <Registration />
      </Route>
      <Footer />
    </div>
  );
}

export default App;
