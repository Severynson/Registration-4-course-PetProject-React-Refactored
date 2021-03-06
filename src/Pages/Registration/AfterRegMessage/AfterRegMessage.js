import classes from "./AfterRegMessage.module.css";
import { acceptSvg } from "../../../SVGs/SVGs";

const AfterRegMessage = (props) => {

  return (
    <div className={classes["container"]}>
      <div className={classes["svg-and-p"]}>
          <>{acceptSvg}</>
        <p>Account created successfully!</p>
      </div>
      <div className={classes["description"]}>
        <p>
          We will sent you a feedback in a few days. Check your status in the
          own cabinet.
        </p>
      </div>
    </div>
  );
};

export default AfterRegMessage;
