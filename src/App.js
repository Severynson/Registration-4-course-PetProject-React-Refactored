import { Redirect, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import MainPage from "./Pages/MainPage/MainPage";
import Registration from "./Pages/Registration/Registration";
import LogIn from "./Pages/LogIn/LogIn";
import { useDispatch } from "react-redux";
import { accountsActions } from "./store/slices/accountsSlice";
import AccountCabinet from "./Pages/AccountCabinet/AccountCabinet";
import AdminAccount from "./Pages/AdminAccount/AdminAccount";

function App() {
  const dispatch = useDispatch();

  // (async () => {
  //   try {
  //     const res = await fetch(
  //       "https://registration4courserefactored-default-rtdb.europe-west1.firebasedatabase.app/users.json"
  //     );
  //     const data = await res.json();
  //     dispatch(accountsActions.addUsers(data));
  //   } catch (err) {
  //     alert(err);
  //   }
  // })();

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
      <Route path="/account-cabinet">
        <AccountCabinet />
      </Route>
      <Route path="/admin" >
        <AdminAccount />
      </Route>
      <Footer />
    </>
  );
}

export default App;
