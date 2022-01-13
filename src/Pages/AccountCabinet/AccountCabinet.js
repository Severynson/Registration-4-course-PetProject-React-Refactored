import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import classes from "./AccountCabinet.module.css";


const AccountCabinet = () => {
    const user = useSelector((state) => state.user);
    const [message, setMessage] = useState();

    useEffect(() => {
          if (user.status === "NotAccepted") {
        setMessage(`${user.name}, your request wasn't watched by admin yet`);
    } else if (user.status === "Accepted") {
        setMessage(`Dear ${user.name}, you are accepted to this course! My congratulations!`);
    } else if (user.status === "Denied") {
        setMessage(`${user.namr}... Sorry, but we didn't find place for you this season. Come to try our courses in the next year. And get ready better`);
    }
    } ,[message])

    return (
        <div className={classes.container}>
            <h3>{message}</h3>
        </div>
    );
};

export default AccountCabinet;