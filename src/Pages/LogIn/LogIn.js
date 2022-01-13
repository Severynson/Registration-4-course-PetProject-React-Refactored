import classes from "./LogIn.module.css";
import Button from "../../UI/Button";
import { useDispatch, useSelector } from "react-redux";
import { useRef, useState } from "react";
import { userActions } from "../../store/slices/userSlice";
import { Redirect } from "react-router-dom";
import Link from "../../UI/Link";

const LogIn = (props) => {
  const users = useSelector((state) => state.accounts);
  const [redirect, setRedirect] = useState(false);
  const dispatch = useDispatch();
  const username = useRef();
  const password = useRef();
  const isEmpty = (val) => val.current.value.trim() === "";
  const [formConfirmedEmpty, setFormConfirmedEmpty] = useState(false);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!isEmpty(username) || !isEmpty(password)) {
      const actualUser = users.find((user) => {
        if (
          user.username === username.current.value &&
          user.password === password.current.value
        )
          return true;
      });
      console.log(actualUser);
      actualUser === undefined &&
        alert(
          "Some data passed not correctly or no such user registered, maybe you need to register at first?"
        );
      actualUser !== undefined &&
        dispatch(
          userActions.logIn({
            username: actualUser.username,
            password: actualUser.password,
            name: actualUser.name,
            status: actualUser.status,
          })
        ) &&
        setRedirect(true);
    } else {
      setFormConfirmedEmpty(true);
    }
  };

  return (
      <>
      <form className={classes["login"]} onSubmit={onSubmitHandler}>
      <label>Username:</label>
      <input ref={username} />
      <label>Password:</label>
      <input ref={password} />
      <Button text="Log In" />
       <Link text="Admin account (no logIn)" link="/admin" />
      {formConfirmedEmpty && (
        <p className={classes["error-text"]}>
          Form can't be submited empty!
        </p>
      )}
    </form>
    {redirect && <Redirect to="/account-cabinet" />}
      </>
    
  );
};

export default LogIn;
