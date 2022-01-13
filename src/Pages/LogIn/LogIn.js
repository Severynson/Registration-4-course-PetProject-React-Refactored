import classes from "./LogIn.module.css";
import Button from "../../UI/Button";
import { useDispatch, useSelector } from "react-redux";
import { useRef, useState } from "react";
import { accountsActions } from "../../store";


const LogIn = (props) => {
    const users = useSelector(state => state.accounts);
    const dispatch = useDispatch();
    const username = useRef();
    const password = useRef();
    const isEmpty = (val) => val.current.value.trim() === "";
    const [formConfirmedEmpty, setFormConfirmedEmpty] = useState(false);


  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!isEmpty(username) || !isEmpty(password)) {
        // console.log(users);
        const actualUser = users.find((user) => {
            // console.log(user.username);
            // console.log(username);
            // console.log(user.username === username);
            // console.log(user.password === password);
            if(user.username === username.current.value && user.password === password.current.value) return true;
        })
        console.log(actualUser);
    } else {
        setFormConfirmedEmpty(true);
    }
  };

  return (
      <form className={classes["login"]} onSubmit={onSubmitHandler}>
        <label>Username:</label>
        <input ref={username}/>
        <label>Password:</label>
        <input ref={password}/>
        <Button text="Create account" />
        {formConfirmedEmpty && (
          <p className={classes["error-text"]}>
            Form can't be submited empty or with mistakes!
          </p>
        )}
      </form>
  );
};

export default LogIn;