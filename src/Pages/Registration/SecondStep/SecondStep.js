import classes from './SecondStep.module.css'
import {React} from 'react';
import { useForm } from 'react-hook-form';
import galleryIcon from "../../../Pictures/gallery-icon.png";
import Button from '../../../UI/Button';

const SecondStep = (props) => {
  const { register, handleSubmit } = useForm();
    return (
        <form onSubmit={handleSubmit(props.onSubmitSecondFormHandler)} className={classes["second-form"]}>
        <div className={classes["add-picture-div"]}>
          <img src={galleryIcon} className={classes["gallery-icon"]} alt="gallery" />
            <label>Avatar-picture:</label>
          <input className={classes["img-input"]} type="file" {...register('userPicture')} />
        </div>
          <label>Name:</label>
          <input className={classes["text-input"]} {...register('name')} />
          <label>G-mail:</label>
          <input className={classes["text-input"]} {...register('gmail')} />
          <label>Instagram or some social media:</label>
          <input className={classes["text-input"]} {...register('instagram')} />
          <label>Tell about yourself and write youre motivation to learn on course:</label>
          <textarea className={classes["text-input"]} {...register('textarea')} />
          <Button text="Submit" />
        </form>
      )
}

export default SecondStep;