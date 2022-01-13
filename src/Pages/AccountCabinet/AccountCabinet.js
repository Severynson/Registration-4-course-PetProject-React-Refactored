import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import classes from "./AccountCabinet.module.css";
import { acceptSvg } from "../../SVGs/SVGs";
import { deniedSvg } from "../../SVGs/SVGs";
import { unwatchedSvg } from "../../SVGs/SVGs";

const AccountCabinet = () => {
  const user = useSelector((state) => state.user);
  const [message, setMessage] = useState();
  const [svg, setSvg] = useState();

  useEffect(() => {
    if (user.status === "NotAccepted") {
      setMessage(`${user.name}, your request wasn't watched by admin yet`);
      setSvg(unwatchedSvg);
    } else if (user.status === "Accepted") {
      setMessage(
        `Dear ${user.name}, you are accepted to this course! My congratulations!`
      );
      setSvg(acceptSvg);
    } else if (user.status === "Denied") {
      setMessage(
        `${user.namr}... Sorry, but we didn't find place for you this season. Come to try our courses in the next year. And get ready better`
      );
      setSvg(deniedSvg);
    }
  }, [message]);

  return (
    <div className={classes.container}>
      <div>{svg}</div>
      <h3>{message}</h3>
    </div>
  );
};

export default AccountCabinet;