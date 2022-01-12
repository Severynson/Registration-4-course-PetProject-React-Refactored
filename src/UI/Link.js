import { NavLink } from "react-router-dom";
import classes from "./Link.module.css";

const Link = (props) => {

  return (
    <div className={classes["link-div"]}>
      <NavLink to={props.link} className={classes["link"]}>
        {props.text}
      </NavLink>
    </div>
  );
};

export default Link;
