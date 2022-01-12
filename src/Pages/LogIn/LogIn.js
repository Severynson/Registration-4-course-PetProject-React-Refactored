import classes from "./LogIn.module.css";
import Button from "../../../UI/Button";
import { useSelector } from "react-redux";

const LogIn = (props) => {

    const fetchingAllUsers = () => {
        
    };


  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
      <form className={classes["login"]} onSubmit={onSubmitHandler}>
        <label>Username:</label>
        <input/>
        <label>Password:</label>
        <input/>
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