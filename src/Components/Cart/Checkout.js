import { useRef, useState } from 'react';
import classes from './Checkout.module.css';

const isEmpty = value => value.trim() === '';
const isFiveChars = value => value.trim().length === 5;

const Checkout = (props) => {
    const [formInputIsValid, setFormInputIsValid] = useState({
        name: true,
        street: true,
        postal: true,
        city: true,
    });
    const inputName = useRef();
    const inputStreet= useRef();
    const inputPostal = useRef();
    const inputCity = useRef();
  const confirmHandler = (event) => {
    event.preventDefault();
    const enteredName = inputName.current.value;
    const enteredStreet = inputStreet.current.value;
    const enteredPostal = inputPostal.current.value;
    const enteredCity = inputCity.current.value;

    const nameIsValid = !isEmpty(enteredName);
    const streetIsValid = !isEmpty(enteredStreet);
    const postalIsValid = isFiveChars(enteredPostal);
    const cityIsValid = !isEmpty(enteredCity);

    setFormInputIsValid({
        name: nameIsValid,
        street: streetIsValid,
        postal: postalIsValid,
        city: cityIsValid,
    })
    const formIsValid = nameIsValid && streetIsValid && postalIsValid && cityIsValid;

    if (formIsValid) {
        return;
    }
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={`${classes.control} ${!formInputIsValid.name ? classes.invalid : ""}`}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={inputName}/>
        {!formInputIsValid.name && <p>Please enter valid name</p>}
      </div>
      <div className={`${classes.control} ${!formInputIsValid.street ? classes.invalid : ""}`}>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' ref={inputStreet}/>
        {!formInputIsValid.street && <p>Please enter valid street</p>}
      </div>
      <div className={`${classes.control} ${!formInputIsValid.postal ? classes.invalid : ""}`}>
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' id='postal' ref={inputPostal}/>
        {!formInputIsValid.postal && <p>Please enter valid postal</p>}
      </div>
      <div className={`${classes.control} ${!formInputIsValid.city ? classes.invalid : ""}`}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city' ref={inputCity}/>
        {!formInputIsValid.city && <p>Please enter valid city</p>}
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
