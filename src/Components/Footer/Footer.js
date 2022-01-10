import itIncubator from "../../Pictures/ItIncubator.png"
import classes from "./Footer.module.css"

 const Footer = () => (
    <footer className={classes.footer}>
        <img className={classes["it-incubator-logo"]} src={itIncubator} alt="It-incubator logo"/>
        <span>
            <p>Our social media:</p>
            <span className="social-media-icons">
                <img
                className="social-media-api-logo"
                  src="https://img.icons8.com/fluency/50/000000/instagram-new.png"
                  alt="Instagram logo"
                />
                <img
                  className="social-media-api-logo"
                  src="https://img.icons8.com/color/48/000000/twitter--v1.png"
                  alt="Twitter logo"
                />

                <img
                  className="social-media-api-logo"
                  src="https://img.icons8.com/color/48/000000/facebook.png"
                  alt="Facebook logo"
                />
              </span>
        </span>
    </footer>
);

export default Footer;