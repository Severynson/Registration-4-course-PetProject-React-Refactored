import { React } from "react";
import { useState } from "react";
import FirstStep from "./FirstStep/FirstStep";
import SecondStep from "./SecondStep/SecondStep";
import AfterRegMessage from "./AfterRegMessage/AfterRegMessage";
import { Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userActions } from "../../store/slices/userSlice";

const Registration = () => {
  const dispatch = useDispatch();
  const [submitFirstStep, setSubmitFirstStep] = useState(false);
  const [submitSecondStep, setSubmitSecondStep] = useState(false);
  const [accountCreated, setAccountCreated] = useState(false);

  const onSubmitFirstFormHandler = () => {
    setSubmitFirstStep(true);
  };

  const onSubmitSecondFormHandler = () => {
    setSubmitSecondStep(true);
    dispatch(userActions.clearData());
    setTimeout(() => {
      setAccountCreated(true);
    }, 5000);
  };

  return (
    <div>
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
