import React from "react";
import CourseDescripton from "./Articles/CourseDescription";
import CourseGallery from "./CourseGallery/CourseGallery";
import CourseFeatures from "./CourseFeatures/CourseFeatures";
import classes from "./MainPage.module.css";
import Slider from "./Slider/Slider";
import Link from "../../UI/Link";

const MainPage = (props) => {
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
