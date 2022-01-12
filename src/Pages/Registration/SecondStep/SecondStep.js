import classes from './SecondStep.module.css'
import {React} from 'react';
import { useForm } from 'react-hook-form';
import galleryIcon from "../../../Pictures/gallery-icon.png";
import Button from '../../../UI/Button';
import { useDispatch } from 'react-redux';
import { userActions } from '../../../store/index';

const SecondStep = (props) => {
    const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

    const onSubmitSecondFormHandler = (data) => {
        const { name, picture, instagram, gmail, aboutUser } = data;

        dispatch(
          userActions.addUserInfo({
            name,
            picture: null, // Because firebase realtime database don't accept images.
            instagram,
            gmail,
            aboutUser,
          })
        );
        props.onSubmitSecondFormHandler()
    }

    return (
        <form onSubmit={handleSubmit(onSubmitSecondFormHandler)} className={classes["second-form"]}>
        <div className={classes["add-picture-div"]}>
          <img src={galleryIcon} className={classes["gallery-icon"]} alt="gallery" />
            <label>Avatar-picture:</label>
          <input className={classes["img-input"]} type="file" {...register('picture')} />
        </div>
          <label>Name:</label>
          <input className={classes["text-input"]} {...register('name')} />
          <label>G-mail:</label>
          <input className={classes["text-input"]} {...register('gmail')} />
          <label>Instagram or some social media:</label>
          <input className={classes["text-input"]} {...register('instagram')} />
          <label>Tell about yourself and write youre motivation to learn on course:</label>
          <textarea className={classes["text-input"]} {...register('aboutUser')} />
          <Button text="Submit" />
        </form>
      )
}

export default SecondStep;