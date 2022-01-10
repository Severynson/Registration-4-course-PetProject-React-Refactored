import classes from "./Header.module.css";
import incubatorImg from "../../Pictures/incubator-600x450.jpg";
import { useEffect, useState } from "react";
import { manPng, hulkPng } from "../../SVGs";

const Header = () => {
  const [animation, setAnimation] = useState(manPng);
  const [bulinForAnimation, setBulinForAnimation] = useState(true);

  useEffect(() => {
    if (!bulinForAnimation) {
      setAnimation(() => hulkPng);
    } else if (bulinForAnimation) {
      setAnimation(() => manPng);
    }
    stateChangingFunc();
  }, [bulinForAnimation]);

  const stateChangingFunc = () => {
    setTimeout(() => {
      setBulinForAnimation((prevState) => !prevState);
    }, 10000);
  };

  return (
    <header className={classes["main-header"]}>
      <span className={classes["main-header-span"]}>
        <h1>It-incubator</h1>
        <img
          src={incubatorImg}
          className={classes["incubator-img"]}
          alt="chicken incubatore immage"
        />
      </span>
      <span className={classes["man-or-hulk-span"]}>{animation}</span>
      <span>
        <h2>Studing platform</h2>
      </span>
    </header>
  );
};

export default Header;
