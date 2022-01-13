import React from "react";
import CourseDescripton from "./Articles/CourseDescription";
import CourseGallery from "./CourseGallery/CourseGallery";
import CourseFeatures from "./CourseFeatures/CourseFeatures";
import classes from "./MainPage.module.css";
import Slider from "./Slider/Slider";
import Link from "../../UI/Link";
import { accountsActions } from "../../store/slices/accountsSlice";
import { useDispatch } from "react-redux";

const MainPage = (props) => {
  const dispatch = useDispatch();

  (async () => {
    try {
      const res = await fetch(
        "https://registration4courserefactored-default-rtdb.europe-west1.firebasedatabase.app/users.json"
      );
      const data = await res.json();
      dispatch(accountsActions.addUsers(data));
    } catch (err) {
      alert(err);
    }
  })();

  return (
    <React.Fragment>
      <CourseGallery />
      <CourseFeatures />
      <CourseDescripton />
      <Slider />
      <Link link="/registration" text="Start registration for course" />
      <Link link="/logIn" text="Log in" />
    </React.Fragment>
  );
};

export default MainPage;
