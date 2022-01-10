import React from "react";
import CourseDescripton from "./Articles/CourseDescription"
import CourseGallery from "./CourseGallery/CourseGallery";
import CourseFeatures from "./CourseFeatures/CourseFeatures";
import classes from "./MainPage.module.css";
import Slider from "./Slider/Slider";

const MainPage = (props) => {
  return (
    <React.Fragment>
      <button
        onClick={props.adminChangeHandler}
        className={classes["admin-mod-btn"]}
      >
        Admin mod
      </button>
      <CourseGallery />
      <CourseFeatures />
      <CourseDescripton />
      <Slider />
      
      <div className={classes["button-div"]}>
        <button
          onClick={props.registrationPageChangeHandler}
          className={classes["button"]}
        >
          Start registration for course
        </button>
      </div>
    </React.Fragment>
  );
};

export default MainPage;