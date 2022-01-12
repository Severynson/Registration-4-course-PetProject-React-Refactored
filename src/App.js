import { Redirect, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer"
import MainPage from "./Pages/MainPage/MainPage";
import Registration from "./Pages/Registration/Registration";
import LogIn from "./Pages/LogIn/LogIn";

function App() {

  return (
    <>
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
      <Route path="/logIn">
        <LogIn />
      </Route>
      <Footer />
    </>
  );
}

export default App;
