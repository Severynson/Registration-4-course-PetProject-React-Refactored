import classes from "./Registration.module.css";
import { React } from "react";
import { useEffect, useState } from "react";
import FirstStep from "./FirstStep/FirstStep";
import SecondStep from "./SecondStep/SecondStep";
import AfterRegMessage from "./AfterRegMessage/AfterRegMessage";
import { Redirect } from "react-router-dom";
  let userData = {};

const Registration = (props) => {
  const [submitFirstStep, setSubmitFirstStep] = useState(false);
  const [submitSecondStep, setSubmitSecondStep] = useState(false);
  const [accountCreated, setAccountCreated] = useState(false);


  const onSubmitFirstFormHandler = () => {
    setSubmitFirstStep(true);
  };

  const onSubmitSecondFormHandler = (data) => {
    console.log("mmmmm----------mmmmmm");
    userData.userPicture = data.userPicture[0];
    userData.name = data.name;
    userData.instagram = data.instagram;
    userData.gmail = data.gmail;
    userData.textarea = data.textarea;
    delete userData.passwordAgain;
    console.log(userData)
    setSubmitSecondStep(true);
    addNewUser(userData);
    setTimeout(() => {
      setAccountCreated(true);
    }, 5000)
  };

  async function addNewUser(userData) {
    const response = await fetch(
      "https://it-incubaror-course-proj-default-rtdb.firebaseio.com/users.json",
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
    // setTimeout(() => registrationPageChangeHandler(), 5000);
  }

  return (
    <div className={classes["registration-form-div"]}>
        {!submitFirstStep && <FirstStep onSubmitFirstFormHandler={onSubmitFirstFormHandler} />}
        {submitFirstStep && !submitSecondStep && <SecondStep onSubmitSecondFormHandler={onSubmitSecondFormHandler} />}
        {submitFirstStep && submitSecondStep && <AfterRegMessage />}
        {accountCreated && <Redirect to="/mainpage" />}
    </div>
  );
};

export default Registration;