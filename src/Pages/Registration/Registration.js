import classes from "./Registration.module.css";
import { React } from "react";
import { useState } from "react";
import FirstStep from "./FirstStep/FirstStep";
import SecondStep from "./SecondStep/SecondStep";
import AfterRegMessage from "./AfterRegMessage/AfterRegMessage";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../store/index";

const getUser = (state) => state.user;

const Registration = () => {
  const dispatch = useDispatch();
  const user = useSelector(getUser());
  const [submitFirstStep, setSubmitFirstStep] = useState(false);
  const [submitSecondStep, setSubmitSecondStep] = useState(false);
  const [accountCreated, setAccountCreated] = useState(false);

  const onSubmitFirstFormHandler = () => {
    setSubmitFirstStep(true);
  };

  const onSubmitSecondFormHandler = () => {
    setSubmitSecondStep(true);
    console.log(`Adding a user: ${user}`);
    console.log(user);
    
    addNewUser(user);
    console.log(user);
    dispatch(userActions.clearData());
    setTimeout(() => {
      setAccountCreated(true);
    }, 5000);
  };

  async function addNewUser(userData) {
    try {
      const response = await fetch(
        "https://registration4courserefactored-default-rtdb.europe-west1.firebasedatabase.app/users.json",
        {
          method: "POST",
          body: JSON.stringify(userData),
          headers: {
            "Content-type": "application/json",
          },
        }
      );

      const data = await response.json();
      console.log(data);
    } catch (err) {
      alert(err);
    }
  }

  return (
    <div className={classes["registration-form-div"]}>
      {!submitFirstStep && (
        <FirstStep onSubmitFirstFormHandler={onSubmitFirstFormHandler} />
      )}
      {submitFirstStep && !submitSecondStep && (
        <SecondStep onSubmitSecondFormHandler={onSubmitSecondFormHandler} />
      )}
      {submitFirstStep && submitSecondStep && <AfterRegMessage />}
      {accountCreated && <Redirect to="/mainpage" />}
    </div>
  );
};

export default Registration;
