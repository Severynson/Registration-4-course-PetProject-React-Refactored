import classes from "./LogIn.module.css";
import Button from "../../UI/Button";
import { useSelector } from "react-redux";
import { useRef, useState } from "react";


const LogIn = (props) => {
    const username = useRef();
    const password = useRef();
    const isEmpty = (val) => val.current.value.trim() === "";
    const [formConfirmedEmpty, setFormConfirmedEmpty] = useState(false);

    const fetchingAllUsers = async() => {
        const res = await fetch("https://registration4courserefactored-default-rtdb.europe-west1.firebasedatabase.app/users.json")
        const data = await res.json();
        
    };


  const onSubmitHandler = (e) => {
      console.log('Alive?')
      console.log(isEmpty(username));
    e.preventDefault();
    if (!isEmpty(username) || !isEmpty(password)) {
        console.log("Alive!")
        fetchingAllUsers();
    };
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